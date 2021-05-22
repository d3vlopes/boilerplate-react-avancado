import {
  Grid,
  Radius,
  Family,
  Weight,
  Sizes,
  Colors,
  Spacings,
  Layers,
  Transition,
} from './enum/default'

export default {
  grid: Grid,
  border: Radius,
  font: {
    family: Family,
    weight: Weight,
    sizes: Sizes,
  },
  colors: Colors,
  spacings: Spacings,
  layers: Layers,
  transition: Transition,
} as const
