import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountService } from '@/app/account/shared/account.service';
import { AuthTokenService } from '@/app/account/shared/auth.service';
import { getStorage, setStorage } from '../../account/helpers/localstorage.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  form: FormGroup = new FormGroup({});
  token: any = getStorage('token');
  loading: boolean = false;
  button_isValid = false;

  constructor(
    private account: AccountService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
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
      this.cdr.detectChanges(); 
    });
    
  }
}
