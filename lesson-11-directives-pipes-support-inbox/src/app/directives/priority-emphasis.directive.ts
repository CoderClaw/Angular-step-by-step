import { Directive, HostBinding, HostListener, input } from "@angular/core";

// Las directivas de atributo son utiles cuando una regla visual o de comportamiento necesita
// reutilizarse en muchos elementos sin duplicar clases CSS por todas partes.
@Directive({
  selector: "[appPriorityEmphasis]",
  standalone: true,
})
export class PriorityEmphasisDirective {
  readonly appPriorityEmphasis = input<"low" | "medium" | "high">("low");

  private isHovered = false;

  @HostBinding("style.borderLeft")
  get borderLeft(): string {
    switch (this.appPriorityEmphasis()) {
      case "high":
        return "5px solid #d64545";
      case "medium":
        return "5px solid #d79c1f";
      default:
        return "5px solid #2f855a";
    }
  }

  @HostBinding("style.transform")
  get transform(): string {
    return this.isHovered ? "translateY(-1px)" : "translateY(0)";
  }

  @HostBinding("style.boxShadow")
  get boxShadow(): string {
    return this.isHovered ? "0 10px 24px rgba(53, 78, 122, 0.14)" : "none";
  }

  @HostBinding("style.transition")
  readonly transition = "transform 140ms ease, box-shadow 140ms ease";

  @HostListener("mouseenter")
  onMouseEnter(): void {
    this.isHovered = true;
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.isHovered = false;
  }
}
