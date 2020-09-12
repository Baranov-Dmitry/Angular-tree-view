import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../interfase';
import {AuthService} from '../services/auth.services';
import {LOGIN_AGAIN} from '../variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params[LOGIN_AGAIN]) {
        this.message = 'Please login';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit(): void {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe((response) => {
      this.form.reset();
      this.router.navigate(['/create']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });

  }

}

