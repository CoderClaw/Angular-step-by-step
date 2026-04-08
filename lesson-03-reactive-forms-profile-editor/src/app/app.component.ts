import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { NotificationChannel, TeamProfile } from "./profile.model";
import { notificationPreferenceValidator } from "./validators/notification-preference.validator";

interface ProfileFormModel {
  fullName: FormControl<string>;
  email: FormControl<string>;
  role: FormControl<string>;
  timeZone: FormControl<string>;
  bio: FormControl<string>;
  notificationChannel: FormControl<NotificationChannel>;
  slackHandle: FormControl<string>;
  weeklyFocusHours: FormControl<number>;
  receiveDigest: FormControl<boolean>;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly availableRoles = [
    "Frontend Engineer",
    "Product Designer",
    "Support Lead",
    "Operations Manager",
  ];

  readonly availableTimeZones = [
    "UTC-08:00 Pacific Time",
    "UTC-05:00 Eastern Time",
    "UTC+00:00 London",
    "UTC+01:00 Central Europe",
  ];

  submitAttempted = false;
  savedProfile: TeamProfile | null = null;

  // Typed reactive forms make every control explicit.
  // That becomes valuable as forms grow and refactors become more frequent.
  readonly profileForm = new FormGroup<ProfileFormModel>(
    {
      fullName: new FormControl("Alicia Stone", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl("alicia.stone@company.test", {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      role: new FormControl("Frontend Engineer", {
        nonNullable: true,
        validators: [Validators.required],
      }),
      timeZone: new FormControl("UTC+01:00 Central Europe", {
        nonNullable: true,
        validators: [Validators.required],
      }),
      bio: new FormControl(
        "Building internal tools and design system features for distributed teams.",
        {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(20)],
        },
      ),
      notificationChannel: new FormControl<NotificationChannel>("slack", {
        nonNullable: true,
        validators: [Validators.required],
      }),
      slackHandle: new FormControl("@alicia", {
        nonNullable: true,
      }),
      weeklyFocusHours: new FormControl(18, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(4),
          Validators.max(40),
        ],
      }),
      receiveDigest: new FormControl(true, {
        nonNullable: true,
      }),
    },
    {
      validators: [notificationPreferenceValidator()],
    },
  );

  get fullName() {
    return this.profileForm.controls.fullName;
  }

  get email() {
    return this.profileForm.controls.email;
  }

  get bio() {
    return this.profileForm.controls.bio;
  }

  get weeklyFocusHours() {
    return this.profileForm.controls.weeklyFocusHours;
  }

  get notificationChannel() {
    return this.profileForm.controls.notificationChannel;
  }

  get slackHandle() {
    return this.profileForm.controls.slackHandle;
  }

  get showSlackHandleRequirement(): boolean {
    return (
      this.profileForm.hasError("slackHandleRequired") &&
      (this.slackHandle.touched || this.submitAttempted)
    );
  }

  get formStatusLabel(): string {
    if (this.profileForm.valid) {
      return "Ready to save";
    }

    return "Needs attention";
  }

  saveProfile(): void {
    this.submitAttempted = true;

    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    // getRawValue preserves the typed shape of the full form payload.
    this.savedProfile = this.profileForm.getRawValue();
  }

  resetToStarterData(): void {
    this.submitAttempted = false;
    this.savedProfile = null;

    this.profileForm.reset({
      fullName: "Alicia Stone",
      email: "alicia.stone@company.test",
      role: "Frontend Engineer",
      timeZone: "UTC+01:00 Central Europe",
      bio: "Building internal tools and design system features for distributed teams.",
      notificationChannel: "slack",
      slackHandle: "@alicia",
      weeklyFocusHours: 18,
      receiveDigest: true,
    });
  }
}
