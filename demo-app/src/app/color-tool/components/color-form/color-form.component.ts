import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NewColor } from '../../models/colors';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm!: FormGroup;

  @Output()
  submitColor = new EventEmitter<NewColor>()

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value);
  }

}
