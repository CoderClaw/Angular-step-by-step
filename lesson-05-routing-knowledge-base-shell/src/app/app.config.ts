import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

// El routing se registra globalmente porque la navegacion es una preocupacion de toda la app.
// Los providers le dicen al sistema de inyeccion de dependencias de Angular como crear o suministrar valores compartidos.
// Cuando algo solicita una dependencia como Router, Angular la busca en su inyector y usa
// el provider registrado para decidir que instancia devolver.
export const appConfig: ApplicationConfig = {
  // provideRouter(routes) anade todos los servicios relacionados con el router al inyector raiz de la aplicacion.
  // Eso hace que la navegacion este disponible en toda la app y tambien le dice a Angular que definiciones
  // de ruta debe usar para hacer coincidir URLs y renderizar componentes enrutados.
  providers: [provideRouter(routes)],
};
