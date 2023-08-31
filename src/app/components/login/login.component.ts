import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountService } from '@/app/account/shared/account.service';
import { MessageService } from 'primeng/api';
import { getStorage, setStorage } from '../../account/helpers/localstorage.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit  {
  form: FormGroup = new FormGroup({});
  token: any = getStorage('token');
  loading: boolean = false;
  button_isValid = false;

  constructor(
    private account: AccountService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }
  
  submitIsValid() {
    return this.form.valid;
  }

  async login() {
    const credentials = {
      login: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    }
    this.loading = true;
    this.account.login(credentials).subscribe(response => {
      setStorage('token', response.token);
      this.token = response.token;
      this.msg.add({ severity: 'success', summary: 'Sucesso', detail: "Logado com sucesso."});
      this.route.navigate(["app"]);
    },
    error => {
      if (error.status === 400) {
        this.msg.add({ severity: 'error', summary: 'Erro', detail: "Credenciais inválidas"});
      } else {
        this.msg.add({ severity: 'error', summary: 'Erro', detail: "Erro ao logar"});
      }
    });  
  }
}
