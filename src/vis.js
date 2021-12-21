import * as vl from 'vega-lite-api';

export const viz = vl.markLine({size: 3, opacity: 1})
.encode(
    vl.x().fieldT('timestamp'),
    vl.y().fieldQ('temperature'),
    vl.tooltip().fieldN('temperature')
);