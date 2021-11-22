import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHeaderComponent } from './tool-header.component';

describe('ToolHeaderComponent', () => {
  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
