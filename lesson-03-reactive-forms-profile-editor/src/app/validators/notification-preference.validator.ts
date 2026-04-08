import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { NotificationChannel } from "../profile.model";

// Cross-field validators are a common reason teams choose reactive forms.
// Here we express a business rule that depends on more than one control.
export function notificationPreferenceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const channel = control.get("notificationChannel")?.value as
      | NotificationChannel
      | undefined;
    const slackHandle = String(control.get("slackHandle")?.value ?? "").trim();

    if (channel === "slack" && slackHandle.length === 0) {
      return { slackHandleRequired: true };
    }

    return null;
  };
}
