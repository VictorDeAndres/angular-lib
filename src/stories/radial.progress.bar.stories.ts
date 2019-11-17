import { storiesOf, moduleMetadata } from '@storybook/angular';

import { RadialProgressBarComponent } from '../../projects/circular-graphs/src/lib/progress-bar/radial-progress-bar.component';

export const RadialProgressData = {
  value: 55,
  color: 'blue'
};

export const RadialProgressDataText = {
  value: 48,
  showValue: true
};

storiesOf('Circular Graphs/Radial Progress Bar', module)
  .addDecorator(
    moduleMetadata({
      declarations: [RadialProgressBarComponent],
    }),
  )

  .add('with out text', () => {
    return {
      template: `<ngl-radial-progress-bar
        style="width: 200px; height: 100px; display: block;"
        [graphData]="RadialProgressData"></ngl-radial-progress-bar>`,
      props: {
        RadialProgressData
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  })

  .add('with text', () => {
    return {
      template: `<ngl-radial-progress-bar
        style="width: 200px; height: 100px; display: block;"
        [graphData]="RadialProgressDataText"></ngl-radial-progress-bar>`,
      props: {
        RadialProgressDataText
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  });

