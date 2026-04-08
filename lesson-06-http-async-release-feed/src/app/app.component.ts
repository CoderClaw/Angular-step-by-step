import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";

import { ReleaseItem } from "./release-item.model";
import { ReleaseFeedService } from "./services/release-feed.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  private readonly releaseFeedService = inject(ReleaseFeedService);

  feedItems: ReleaseItem[] = [];
  selectedItemId: string | null = null;
  isLoading = false;
  errorMessage = "";
  lastLoadedAt: Date | null = null;

  ngOnInit(): void {
    this.loadFeed();
  }

  get publishedCount(): number {
    return this.feedItems.filter((item) => item.status === "Published").length;
  }

  get selectedItem(): ReleaseItem | null {
    return (
      this.feedItems.find((item) => item.id === this.selectedItemId) ?? null
    );
  }

  loadFeed(): void {
    this.isLoading = true;
    this.errorMessage = "";

    // El componente reacciona a estados de peticion asincrona: carga, exito y error.
    // getReleaseFeed() devuelve un Observable, que es una fuente de valores que puede producir datos mas tarde.
    // No ocurre nada realmente hasta que nos suscribimos: subscribe() le dice a Angular/RxJS que este
    // componente quiere escuchar el resultado de la peticion HTTP.
    //
    // Una suscripcion conecta este componente con la ejecucion del Observable.
    // En las peticiones de HttpClient, eso significa que Angular envia la peticion y luego llama a nuestros handlers
    // cuando la peticion termina. En esta forma basada en objeto de subscribe(), proporcionamos callbacks para los
    // resultados que nos importan.
    this.releaseFeedService.getReleaseFeed().subscribe({
      // next se ejecuta cuando el Observable emite datos con exito.
      // HttpClient normalmente emite aqui un solo valor de respuesta, asi que esta es nuestra ruta de exito.
      next: (items) => {
        this.feedItems = items;
        this.selectedItemId = items[0]?.id ?? null;
        this.lastLoadedAt = new Date();
        this.isLoading = false;
      },
      // error se ejecuta si el Observable falla antes de producir un resultado exitoso.
      // Aqui es donde sacamos la UI del estado de carga y mostramos un mensaje de error.
      error: () => {
        this.errorMessage = "The release feed could not be loaded. Try again.";
        this.isLoading = false;
      },
    });

    // En esta leccion nos suscribimos directamente en el componente porque el ejemplo es pequeno.
    // En aplicaciones mas grandes, las suscripciones suelen componerse con AsyncPipe, signals o logica
    // de limpieza para que los streams de larga duracion no permanezcan conectados mas tiempo del necesario.
  }

  selectItem(itemId: string): void {
    this.selectedItemId = itemId;
  }
}
