import { Validators } from '@angular/forms';

export const makeInput = (value = '') =>
  ([ value, { validators: [ Validators.required ] } ]);

export const modelInput = (value = '') =>
  ([ value, { validators: [ Validators.required ] } ]);

export const yearInput = (value = 1900) =>
  ([ value, { validators: [
    Validators.required,
    Validators.min(1870),
    Validators.max(2020),
] } ]);

export const colorInput = (value = '') =>
  ([ value, { validators: [ Validators.required ] } ]);

export const priceInput = (value = 0) =>
  ([ value, { validators: [
    Validators.required,
    Validators.min(0),
  ] } ]);
