import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ToolFooterComponent } from './components/tool-footer/tool-footer.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    ToolHeaderComponent,
    ToolFooterComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolHeaderComponent,
    ToolFooterComponent,
    NotificationComponent,
  ]
})
export class SharedModule { }
