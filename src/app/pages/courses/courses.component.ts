import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Courses, CoursesParams, CoursesService } from './courses.service';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @ViewChild('op') op!: OverlayPanel;
  public visible: boolean = false;
  public courses: Courses[] = [];
  public courseName!: string;
  public course: CoursesParams = {
    name: '',
    description: ''
  };

  public layout: "list" | "grid" = 'list';
  public items: MenuItem[] = [];
  form: FormGroup = new FormGroup({});
  modalForm: FormGroup = new FormGroup({});

  constructor(
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
  ) {
    this.items = [
      {
          label: 'Atualizar',
          icon: 'pi pi-refresh',
          command: () => {
            this.updateCourse(this.courseName);
          }
      },
      {
          label: 'Deletar',
          icon: 'pi pi-times',
          command: () => {
              this.deleteCourse(this.courseName);
          }
      },
    ];
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.modalForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    
  }
  
  ngOnInit(): void {
    this.courseService.listCourses().subscribe(resp => {
      this.courses = resp;
    })
  }
  
  getCourseByName(name: string, op: OverlayPanel, event: any): void {
    this.courseService.listCourseByName(name).subscribe(resp => {
      this.form.get('name')?.setValue(resp.name);
      this.form.get('description')?.setValue(resp.description);
      this.courseName = resp.name;
    });
    op.toggle(event);
  }

  createCourse(): void {
    this.course = {
      name: this.modalForm.get('name')?.value,
      description: this.modalForm.get('description')?.value
    }
    this.courseService.createCourse(this.course).subscribe(
      () => {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina criada com sucesso."})
        this.courseService.listCourses().subscribe(resp => {
          this.courses = resp;
        });
        this.course = { name: "", description: "" };
        this.visible = false;
      },
      () => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao criar disciplina"})
      );
  }

  deleteCourse(id: string): void {
    this.courseService.deleteCourseByName(id).subscribe(
      () =>  {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina deletada com sucesso."})
        this.courseService.listCourses().subscribe(resp => {
          this.courses = resp;
        });
      },
      (err) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao deletar a disciplina"})
    )
  }

  updateCourse(name: string): void {
    this.course = {
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value
    }
    this.courseService.updateCourseByName(name, this.course).subscribe(
      () => {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina salva com sucesso."});
        this.courseService.listCourses().subscribe(resp => {
          this.courses = resp;
        });
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao atualizar disciplina."})
    );
  }

  openAddDisciplineModal() {
    this.visible = true;
    this.modalForm.reset({
      name: '',
      description: '',
    });
  }

  formIsValid(): boolean {
    return this.modalForm.valid;
  }
}
