import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[gameBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#F5F5F5';   //Couleur par défaut lorsqu'une carte n'est PAS survolé
  private defaultColor: string = '#9FDC5F';   //Couleur par défaut lorsqu'on survole une carte si une couleur n'est pas décidé par gameBorderCard
  private defaultHeight: number = 275;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('gameBorderCard') borderColor : string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

}
