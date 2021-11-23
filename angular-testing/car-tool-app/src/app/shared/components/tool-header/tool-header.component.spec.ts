import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHeaderComponent } from './tool-header.component';

describe('ToolHeaderComponent', () => {

  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;
  const headerText = 'Tool Header Text';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    // when the component is created the TestBed definition is frozen, do not attempt
    // to reconfigure the module
    fixture = TestBed.createComponent(ToolHeaderComponent);
    component = fixture.componentInstance;

    // pass inputs to the component
    component.headerText = headerText;

    // bring the component to life, triggers the data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate h1', () => {
    
    // the native element is available on the fixture
    const h1Element = fixture.nativeElement as HTMLHeadingElement;

    // the toBe matcher performs a shallow strict equality comparison
    expect(h1Element.textContent).toBe(headerText);
  });

});
