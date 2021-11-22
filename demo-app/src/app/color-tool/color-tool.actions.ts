import { createAction, props } from '@ngrx/store';

import { NewColor } from './models/colors';

export const appendColor = createAction(
  '[Color Tool] Append Color', props<{color: NewColor}>());
