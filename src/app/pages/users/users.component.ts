import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService, Users } from './users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '../../account/helpers/date.utils';
import { MenuItem, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('op') op!: OverlayPanel;
  
  public users: Users[] = [];
  public user!: Users;
  public visible: boolean = false;
  public selectedRole!: any;
  public userId!: string;
  public items: MenuItem[] = [];

  public roles = [
    { name: "Administrador", role: "ADMIN" },
    { name: "Coordenador", role: "COORDINATOR" },
    { name: "Professor", role: "PROFESSOR" },
    { name: "Aluno", role: "STUDENT" },
  ];

  form: FormGroup = new FormGroup({});
  modalForm: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
    });

    this.modalForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    });
    this.items = [
      {
          label: 'Atualizar',
          icon: 'pi pi-refresh',
          command: () => {
            this.updateUser(this.userId);
          }
      },
      {
          label: 'Deletar',
          icon: 'pi pi-times',
          command: () => {
              this.deleteUser(this.userId);
          }
      },
    ];
  }

  ngOnInit(): void {
    this.userService.listUsers().subscribe((users) => {
      this.users = users;
    })
  }
  
  parseDate(numbers: any): string {
    return formatDate(numbers);
  }

  openCreateModal(): void {
    this.visible = true;
  }

  getUserById(id: string, op: OverlayPanel, event: any): void {
    this.userId = id;
    this.userService.listUserById(id).subscribe(resp => {
      this.form.get('name')?.setValue(resp.name);
      this.form.get('email')?.setValue(resp.email);
      this.selectedRole = this.roles.filter(role => role.role === resp.disciplineId);
    });
    op.toggle(event);
  }

  createUser(): void {
    const user = {
      name: this.modalForm.get('name')?.value,
      email: this.modalForm.get('email')?.value,
      password: this.modalForm.get('password')?.value,
      roles: this.selectedRole.role
    };

    this.userService.createUser(user).subscribe(
      () =>  {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Usuário cadastrado com sucesso."});
        this.userService.listUsers().subscribe(resp => {
          this.users = resp;
        });
        this.visible = false;
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao cadastrar usuário."}))
  }

  deleteUser(id: string): void {
    this.userService.deleteUserById(id).subscribe(
      () =>  {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Usuário deletado com sucesso."});
        this.userService.listUsers().subscribe(resp => {
          this.users = resp;
        });
        this.visible = false;
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao deletar usuário."}))
  }

  updateUser(id: string): void {
    const user = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
    };

    this.userService.updateUserById(id, user).subscribe(
      () =>  {
        this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Usuário editado com sucesso."});
        this.userService.listUsers().subscribe(resp => {
          this.users = resp;
        });
        this.visible = false;
      },
      (error) => this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao editar usuário."}))
  }

  formIsValid(): boolean {
    return this.modalForm.valid && !!this.selectedRole;
  }
}
