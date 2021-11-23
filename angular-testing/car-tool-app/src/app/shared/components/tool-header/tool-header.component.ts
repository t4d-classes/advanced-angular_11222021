import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent {

  @Input()
  headerText = 'Tool Header';

}
