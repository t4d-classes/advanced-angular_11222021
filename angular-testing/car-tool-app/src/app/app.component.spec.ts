import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// to load the component and all of its children, all of the child components must be loaded
// for an integration test, including these components could be a good option
// but for a unit testing of the AppComponent itself, we need to configure the template
// schema to ignore these element in the component html
// import { NotificationComponent } from './shared/components/notification/notification.component';
// import { ToolHeaderComponent } from './shared/components/tool-header/tool-header.component';
// import { ToolFooterComponent } from './shared/components/tool-footer/tool-footer.component';
// import { CarHomeComponent } from './car-tool/components/car-home/car-home.component';
// import { CarTableComponent } from './car-tool/components/car-table/car-table.component';
// import { CarViewRowComponent } from './car-tool/components/car-view-row/car-view-row.component';
// import { CarEditRowComponent } from './car-tool/components/car-edit-row/car-edit-row.component';
// import { CarFormComponent } from './car-tool/components/car-form/car-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        // CarHomeComponent, NotificationComponent, ToolHeaderComponent,
        // ToolFooterComponent, CarTableComponent, CarViewRowComponent,
        // CarEditRowComponent, CarFormComponent,
      ],
      // allow custom elements which are not necessarily mapped to a configured
      // component in the testing module
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
