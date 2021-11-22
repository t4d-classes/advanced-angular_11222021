import { Car } from "./car-tool/models/cars";
import { Color } from "./color-tool/models/colors";

export interface AppState {
  colors: Color[];
  cars: Car[];
}