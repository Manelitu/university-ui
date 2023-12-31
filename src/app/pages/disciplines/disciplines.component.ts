import { Component, OnInit, ViewChild } from '@angular/core';
import { Disciplines, DisciplinesService } from './disciplines.service';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Periods, PeriodsService } from '../periods/periods.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {
  @ViewChild('op') op!: OverlayPanel;
  public visible: boolean = false;
  public disciplines: Disciplines[] = [];
  public periods: Periods[] = [];
  public period!: Periods ;
  public disciplineId!: string;
  public discipline: Partial<Disciplines> = {
    name: '',
    hours: 0,
    description: '',
    active: true,
  };

  public layout: "list" | "grid" = 'list';
  public items: MenuItem[] = [];
  form: FormGroup = new FormGroup({});
  modalForm: FormGroup = new FormGroup({});

  constructor(
    private disciplineService: DisciplinesService,
    private periodService: PeriodsService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
  ) {
    this.items = [
      {
          label: 'Atualizar',
          icon: 'pi pi-refresh',
          command: () => {
            this.updateDiscipline(this.disciplineId);
          }
      },
      {
          label: 'Deletar',
          icon: 'pi pi-times',
          command: () => {
              this.deleteDiscipline(this.disciplineId);
          }
      },
    ];
    this.form = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      hours: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
    });
    this.modalForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      hours: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
    });
    
  }
  
  ngOnInit(): void {
    this.disciplineService.listDisciplines().subscribe(resp => {
      this.disciplines = resp;
    })

    this.periodService.listPeriods().subscribe(resp => {
      this.periods = resp;
    })
  }

  saveDiscipline(): void {
    const params = {
      name: this.modalForm.get('name')?.value,
      hours: Number(this.modalForm.get('hours')?.value),
      description: this.modalForm.get('description')?.value,
      periodId: this.period.periodId
    }
    this.disciplineService.createDiscipline(params).subscribe(() => {
      this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina criada com sucesso."});
      this.disciplineService.listDisciplines().subscribe(resp => {
        this.disciplines = resp;
      });
      this.visible = false;
    },
    (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao salvar disciplina."}))
  }
  
  getDisciplineById(id: string, op: OverlayPanel, event: any): void {
    this.disciplineService.listDisciplineById(id).subscribe(resp => {
      this.form.get('name')?.setValue(resp.name);
      this.form.get('hours')?.setValue(resp.hours);
      this.form.get('description')?.setValue(resp.description);
      this.disciplineId = resp.disciplineId;
    });
    op.toggle(event);
  }

  deleteDiscipline(id: string): void {
    this.disciplineService.deleteDisciplineById(id).subscribe(
      () =>  {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina deletada com sucesso."})
        this.disciplineService.listDisciplines().subscribe(resp => {
          this.disciplines = resp;
        });
      },
      (err) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao deletar a disciplina"})
    )
  }

  updateDiscipline(id: string): void {
    this.discipline = {
      name: this.form.get('name')?.value,
      hours: this.form.get('hours')?.value,
      description: this.form.get('description')?.value,
    }
    this.disciplineService.updateDisciplineById(id, this.discipline).subscribe(
      () => {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Disciplina salva com sucesso."});
        this.disciplineService.listDisciplines().subscribe(resp => {
          this.disciplines = resp;
        });
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao atualizar disciplina."})
    );
  }

  openAddDisciplineModal() {
    this.visible = true;
    this.modalForm.reset({
      name: '',
      hours: '',
      description: ''
    });
  }

  formIsValid(): boolean {
    return this.modalForm.valid && !!this.period.periodId;
  }
}
  

