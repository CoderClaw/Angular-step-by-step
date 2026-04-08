import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login-page.component.html",
  styleUrl: "./page-shared.css",
})
export class LoginPageComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  email = "admin@portal.test";
  password = "demo1234";
  errorMessage = "";

  login(): void {
    const success = this.authService.login(this.email, this.password);

    if (!success) {
      this.errorMessage =
        "Enter a valid email and a password with at least 4 characters.";
      return;
    }

    const returnUrl =
      this.route.snapshot.queryParamMap.get("returnUrl") || "/dashboard";
    this.router.navigateByUrl(returnUrl);
  }
}
