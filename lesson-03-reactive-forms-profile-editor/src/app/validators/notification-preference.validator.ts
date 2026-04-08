import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { NotificationChannel } from "../profile.model";

// Los validadores entre campos son una razon comun por la que los equipos eligen formularios reactivos.
// Aqui expresamos una regla de negocio que depende de mas de un control.
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
