import { Router } from "@angular/router";
import {
  FormGroup,
  ValidatorFn,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";
import { AuthService } from "src/app/core/auth/auth.service";

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get("password")?.value;
    const passwordConfirm = control.get("confirmPassword")?.value;
    if (password && passwordConfirm && password !== passwordConfirm) {
      return {
        passwordsDontMatch: true,
      };
    }
    return null;
  };
}

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get("name");
  }
  get email() {
    return this.signUpForm.get("email");
  }
  get password() {
    return this.signUpForm.get("password");
  }
  get confirmPassword() {
    return this.signUpForm.get("confirmPassword");
  }

  submit() {
    if (!this.signUpForm.valid) return;

    const { name, email, password } = this.signUpForm.value;
    this.authService;
    this.authService.signUp(this.signUpForm.value);

    this.router.navigate(["login"]);
  }
}
