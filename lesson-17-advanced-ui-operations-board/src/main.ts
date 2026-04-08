import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((error: unknown) => {
  console.error("Angular failed to bootstrap Lesson 17.", error);
});
