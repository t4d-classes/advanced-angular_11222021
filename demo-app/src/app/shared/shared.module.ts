import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';



@NgModule({
  declarations: [
    ToolHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolHeaderComponent,
  ],
})
export class SharedModule { }
