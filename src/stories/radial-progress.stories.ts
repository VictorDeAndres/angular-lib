import { storiesOf, moduleMetadata } from '@storybook/angular';

import { RadialProgressComponent } from './../../projects/radial-progress/src/lib/radial-progress.component';

storiesOf('Ng-library/Charts/Progress-Bar', module)
  .addDecorator(
    moduleMetadata({
      declarations: [RadialProgressComponent],
    }),
  )
  .add('default', () => {
    return {
      template: `<ngl-radial-progress [graphData]="{foo: 'bar'}"></ngl-radial-progress>`,
      props: {},
    };
  });

