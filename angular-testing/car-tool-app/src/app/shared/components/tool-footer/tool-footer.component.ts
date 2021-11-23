import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-footer',
  templateUrl: './tool-footer.component.html',
  styleUrls: ['./tool-footer.component.css']
})
export class ToolFooterComponent {

  @Input()
  copyrightYear = new Date().getFullYear();

  @Input()
  organizationName = 'A Cool Company, Inc.';

  @Input()
  privacyPolicyUrl = '';

  @Input()
  termsOfUseUrl = '';

}
