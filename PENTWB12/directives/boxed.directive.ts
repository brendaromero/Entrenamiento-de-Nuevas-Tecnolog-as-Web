import { Directive,ElementRef, Input, Renderer, OnInit} from '@angular/core';

@Directive({
selector: '[box]'
})

export class BoxedDirective implements Onlnit {
 @Input('bgColor') bgColor: string;
 @Input('bdcoIor') bdcolor: string;

 constructor(private e1: ElementRef, private renderer: Renderer) {
 ngOnInit(){
 this.renderer.setElementStyle(this.el.nativeElement, 'background-color', this.bgColor ? this.bgColor : 'lightgray' ); this.renderer.setElementStyle(this.el.nativeElement, 'border', this.bdcolor ? '2px solid ${this.bdcolor}' : '2px solid black' );
	} 
 }