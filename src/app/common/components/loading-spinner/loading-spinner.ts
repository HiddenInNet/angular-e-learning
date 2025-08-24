import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css',
})
export class AppLoadingSpinner {
  /** Tamaño del icono en px */
  @Input() size = 48;
  /** Color del arco (carga) */
  @Input() color = '#16a34a'; // verde tipo Tailwind green-600
  /** Color del track de fondo */
  @Input() trackColor = '#16a34a';
  /** Grosor del trazo */
  @Input() strokeWidth = 4;
  /** Velocidad de giro (ej: '0.9s', '1.2s') */
  @Input() speed = '0.9s';
  /** Texto accesible para lectores de pantalla (opcional) */
  @Input() ariaLabel: string | null = 'Cargando…';

  /** Estilo inline para pasar la velocidad como CSS var */
  get svgStyle(): { [key: string]: string } {
    return { '--speed': this.speed };
  }

  /**
   * Path de un arco (semi-círculo) centrado. Usamos un arco grande (A) entre dos puntos del círculo.
   * Centro (25,25), radio 20. Va de ángulo -45° a 225° para un efecto agradable.
   */
  get arcPath(): string {
    // Convertimos ángulos a radianes y generamos puntos
    const r = 20;
    const cx = 25;
    const cy = 25;
    const start = this.polarToCartesian(cx, cy, r, -45);
    const end = this.polarToCartesian(cx, cy, r, 225);
    // A rx ry xAxisRotation largeArcFlag sweepFlag x y
    return `M ${start.x} ${start.y} A ${r} ${r} 0 1 1 ${end.x} ${end.y}`;
  }

  private polarToCartesian(
    cx: number,
    cy: number,
    r: number,
    angleDeg: number,
  ): { x: number; y: number } {
    const rad = ((angleDeg - 90) * Math.PI) / 180.0;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }
}
