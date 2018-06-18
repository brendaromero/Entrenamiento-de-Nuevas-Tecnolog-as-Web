import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {BoxedDirective} from './boxed.directive';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
	template:
	<p box > Should have default background (lightgray) and default border (2px solid black) color </p>
	<p box bgColor="green" > Should have green background </p>
	<p box bdColor="pink" > Should have pink border </p>
	<p box bdColor="green" bgColor "pink" > Should have green border and pink background </p>
  
 
 class TestComponent{}
 
 
 
 describe(' Boxed Directive (in TestComponent template)' , () => {
 let fixture:ComponentFixture<TestComponent>;
 let debugElements:DebugElement[] 

 beforeEach( ()=> {
 
	fixture = TestBed.configureTestingModule({
		declarations: [BoxedDirective, TestComponent ]
		})
		.createComponent(TestComponent)
		fixture.detectChanges();
		
		debugElements = fixture.debugEIement.queryAll(By.directive(BoxedDirective));
		})
		
	it('should have 4 matched elements', () => {
	expect(debugElements.length).toBe(4);
	})

	it('should use default background color and border color for first <p>', () =>{
	const bgColor = debugElements[0].nativeElement.style.backgroundColor;
	const border = debugElements[0].nativeEIement.style.border;

	expect(bgColor).toBe('lightgray');
	expect(border).toContain('black');
	
	})

	it('should use green background color for second <p>', () =>{
	const bgColor = debugElements[1].nativeElement.style.backgroundColor;

	expect(bgColor).toBe('green');
	})

	it('should use pink border color for third <p>', () =>{
	const border = debugElements[2].nativeElement.style.border;

	expect(border).toContain('pink');
	})

	it('should use pink background color and green border color for 4th <p>', () =>{
	const bgColor = debugElements[3].nativeElement.style.backgroundColor;
	const border = debugElements[3].nativeElement.style.border;
	expect(bgColor).toBe('pink');
	expect(border).toContain('green');
})

 })