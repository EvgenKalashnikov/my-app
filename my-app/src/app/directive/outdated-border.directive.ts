import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appOutdatedBorder]'
})
export class OutdatedBorderDirective implements OnInit {
  @Input('appOutdatedBorder') createdDate: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    console.log(this.createdDate);
    if (this.createdDate < Date.now() && this.createdDate >= Date.now() - 1000 * 60 * 60 * 24 * 14) {
      this.addClassToElement( 'border');
      this.addClassToElement( 'border-success');
    } else if (this.createdDate > Date.now()) {
      this.addClassToElement( 'border');
      this.addClassToElement( 'border-info');
    }
  }

  addClassToElement(clazz: string): void {
    this.renderer.addClass(this.el.nativeElement, clazz);
  }


}
