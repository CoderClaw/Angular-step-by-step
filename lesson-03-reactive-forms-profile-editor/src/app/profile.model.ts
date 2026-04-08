export type NotificationChannel = "email" | "slack" | "none";

// Esta interfaz representa la forma que queremos guardar despues de que la validacion sea correcta.
// Mantenerla separada de la definicion del formulario ayuda a distinguir
// entre datos de dominio y los tipos de controles de formulario de Angular.
export interface TeamProfile {
  fullName: string;
  email: string;
  role: string;
  timeZone: string;
  bio: string;
  notificationChannel: NotificationChannel;
  slackHandle: string;
  weeklyFocusHours: number;
  receiveDigest: boolean;
}
