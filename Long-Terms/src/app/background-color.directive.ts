import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input('appBackgroundColor') defaultColor: string = '';
  @Input() hoverColor: string = 'yellow'; // Default hover color

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Initial color setup
    this.setColor(this.defaultColor);
  }




  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor);
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
