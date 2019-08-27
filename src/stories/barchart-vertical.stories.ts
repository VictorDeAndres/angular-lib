import { storiesOf, moduleMetadata } from '@storybook/angular';

import { VerticalbarsComponent } from './../../projects/verticalbars/src/lib/verticalbars.component';

storiesOf('Ng-library/Charts/VerticalBars', module)
  .addDecorator(
    moduleMetadata({
      declarations: [VerticalbarsComponent],
    }),
  )
  .add('with axis', () => {
    return {
      template: `<ngl-verticalbars
      style="height: 400px; width: 600px; display: block;"
      [graphData]="{
        'axis': {
          'padding': {
            'horizontal': 30,
            'vertical': 20
          },
          'x': {
            'scaleband': 'band',
            'fontSize': 12
          },
          'y': {
            'min': 0,
            'max': 100,
            'scaleband': 'linear',
            'guides': true,
            'fontSize': 12
          }
        },
        'domain': ['Foo', 'Bar', 'Alfa', 'Bravo', 'Charlie'],
        'values': [
          [20, 45, 63.5, 30, 54],
          [10, 15, 43.5, 62, 90],
          [32, 74, 32, 18,45, 60]
        ]
      }"
    ></ngl-verticalbars>`,
      props: {},
    };
  })
  .add('with axis rotate band', () => {
    return {
      template: `<ngl-verticalbars
      style="height: 400px; width: 600px; display: block;"
      [graphData]="{
        'axis': {
          'padding': {
            'horizontal': 30,
            'vertical': 45
          },
          'x': {
            'scaleband': 'band',
            'fontSize': 12,
            'rotate': true
          },
          'y': {
            'min': 0,
            'max': 100,
            'scaleband': 'linear',
            'guides': true,
            'ticks': 5,
            'fontSize': 12
          }
        },
        'domain': ['Foo', 'Bar', 'Alfa', 'Bravo', 'Charlie'],
        'values': [
          [20, 45, 63.5, 30, 54]
        ]
      }"
    ></ngl-verticalbars>`,
      props: {},
    };
  });


