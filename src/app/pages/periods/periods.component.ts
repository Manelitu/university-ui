import { Component, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Periods, PeriodsService } from './periods.service';
import { Courses, CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent {
  @ViewChild('op') op!: OverlayPanel;
  public visible: boolean = false;
  public selectedCourse: any;
  public periods: Periods[] = [];
  public courses: Courses[] = [];
  public courseId!: string;
  public periodId!: string;
  public course!: any;
  public period: Partial<any> = {
    period: 0,
    disciplineId: '',
    active: true,
  };

  public layout: "list" | "grid" = 'list';
  public items: MenuItem[] = [];
  form: FormGroup = new FormGroup({});
  modalForm: FormGroup = new FormGroup({});

  constructor(
    private periodService: PeriodsService,
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
  ) {
    this.items = [
      {
          label: 'Atualizar',
          icon: 'pi pi-refresh',
          command: () => {
            this.updatePeriod(this.periodId);
          }
      },
      {
          label: 'Deletar',
          icon: 'pi pi-times',
          command: () => {
              this.deletePeriod(this.periodId);
          }
      },
    ];
    this.form = this.formBuilder.group({
      period: new FormControl(0, [
        Validators.required,
      ]),
    });
    this.modalForm = this.formBuilder.group({
      period: new FormControl('', [
        Validators.required
      ]),
    });
  }
  
  ngOnInit(): void {
    this.periodService.listPeriods().subscribe(resp => {
      this.periods = resp;
    })
    this.courseService.listCourses().subscribe(resp => {
      this.courses = resp;
    })
  }

  createCourse(): void {
    const params = {
      period: this.modalForm.get('period')?.value,
      courseId: this.course.courseId,
    }
    this.periodService.createPeriod(params).subscribe(() => {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina salva com sucesso."});
        this.periodService.listPeriods().subscribe(resp => {
          this.periods = resp;
        });
        this.visible = false;
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao atualizar disciplina."})
    );
  }
  
  getPeriodById(id: string, op: OverlayPanel, event: any): void {
    this.periodService.listPeriodsById(id).subscribe(resp => {
      this.form.get('period')?.setValue(resp.period);
      this.periodId = resp.periodId;
    });
    op.toggle(event);
  }

  deletePeriod(id: string): void {
    this.periodService.deletePeriodsById(id).subscribe(
      () =>  {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Semestre deletado com sucesso."})
        this.periodService.listPeriods().subscribe(resp => {
          this.periods = resp;
        });
      },
      (err) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao deletar o semestre"})
    )
  }

  updatePeriod(id: string): void {
    this.period = {
      period: this.form.get('period')?.value,
    }
    this.periodService.updatePeriodsById(id, this.period).subscribe(
      () => {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Semestre salvo com sucesso."});
        this.periodService.listPeriods().subscribe(resp => {
          this.periods = resp;
        });
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao atualizar semestre."})
    );
  }

  openAddDisciplineModal() {
    this.visible = true;
    this.modalForm.reset({
      period: ''
    });
  }

  formIsValid(): boolean {
    return this.modalForm.valid && !!this.course.courseId;
  }
}
