import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;

  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('span');
  }

  @HostListener('mouseenter')
  mouseenter(event: Event) {
    this.paragraph.innerHTML = '<br/>' + this.date.toLocaleDateString() + ' ' + this.date.toLocaleTimeString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseleave')
  mouseleave(event: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

}
