import { createReducer } from '@ngrx/store';

import { Color } from './models/colors';

const initialColors: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
];

export const colorsReducer = createReducer<Color[]>(initialColors);
