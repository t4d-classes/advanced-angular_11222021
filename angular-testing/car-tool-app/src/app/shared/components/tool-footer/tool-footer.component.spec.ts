import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFooterComponent } from './tool-footer.component';

describe('ToolFooterComponent', () => {

  let component: ToolFooterComponent;
  let fixture: ComponentFixture<ToolFooterComponent>;
  const organizationName = 'Test Company';
  const privacyPolicyUrl = 'http://policy';
  const termsOfUseUrl = 'http://terms-of-use';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ToolFooterComponent);
  
    component = fixture.componentInstance;

    // inputs/outputs should be public for unit testing
    component.organizationName = organizationName;
    component.privacyPolicyUrl = privacyPolicyUrl;
    component.termsOfUseUrl = termsOfUseUrl;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('company name pass through', () => {

    const spanElement = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    const expectedSpanContent = `${new Date().getFullYear()} ${organizationName}`;

    expect(spanElement.textContent).toBe(expectedSpanContent);

    // tests when the privacy policy ngIf is true
    const privacyPolicyAnchorElement = fixture.nativeElement
      .querySelector('#privacy-policy-link') as HTMLAnchorElement;

    const expectedPrivacyPolicyUrlHref = `${privacyPolicyUrl}/`;

    expect(privacyPolicyAnchorElement.href).toBe(expectedPrivacyPolicyUrlHref);

    const termsOfUseAnchorElement = fixture.nativeElement
      .querySelector('#terms-of-use-link') as HTMLAnchorElement;

    const expectedTermsOfUseUrlHref = `${termsOfUseUrl}/`;

    expect(termsOfUseAnchorElement.href).toBe(expectedTermsOfUseUrlHref);
  });

  // when an component template needs to check when the condition is both
  // true and false
  it('no privacy policy url', () => {

    // a new fixure can be retrieved, new inputs can be specified
    fixture = TestBed.createComponent(ToolFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  // this test will test when ngIf on the privacy policy url is false
    const anchorElements = fixture.nativeElement
      .querySelectorAll('#privacy-policy-link') as NodeList;

    expect(anchorElements.length).toBe(0);
  });

  it('no terms of use url', () => {

    fixture = TestBed.createComponent(ToolFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const anchorElements = fixture.nativeElement
      .querySelectorAll('#terms-of-use-link') as NodeList;

    expect(anchorElements.length).toBe(0);

  });

});
