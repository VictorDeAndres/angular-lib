import { storiesOf, moduleMetadata } from '@storybook/angular';

import { DoughnutComponent } from '../../projects/circular-graphs/src/lib/doughnut/doughnut.component';

export const DoughnutData = {
  values: [32, 24, 21, 46],
  colors: ['red', 'blue', 'yellow', 'green']
};

export const DoughnutDataRandomColors = {
  values: [32, 24, 21, 46],
  colors: ['red']
};

storiesOf('Circular Graphs/Doughnut', module)
  .addDecorator(
    moduleMetadata({
      declarations: [DoughnutComponent],
    }),
  )

  .add('default', () => {
    return {
      template: `<ngl-doughnut
        style="width: 300px; height: 200px; display: block;"
        [graphData]="DoughnutData"></ngl-doughnut>`,
      props: {
        DoughnutData
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  })

  .add('random colors', () => {
    return {
      template: `<ngl-doughnut
        style="width: 300px; height: 200px; display: block;"
        [graphData]="DoughnutDataRandomColors"></ngl-doughnut>`,
      props: {
        DoughnutDataRandomColors
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  });


