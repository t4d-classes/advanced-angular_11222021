import { createReducer, on } from '@ngrx/store';

import { Color } from './models/colors';
import { appendColor } from './color-tool.actions';

const initialColors: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
];

export const colorsReducer = createReducer<Color[]>(
  initialColors,
  on(appendColor, (state, action) => {

    return [
      ...state,
      {
        ...action.color,
        id: Math.max(...state.map(c => c.id), 0) + 1,
      }
    ];

  }));
