
# @ng-library/circular-graphs

Set of circular graphs for angular.

- Radial Progress Bar graph

![](./images/ProgressBar.png?raw=true) ![](./images/ProgressBar_withText.png?raw=true)

- Doughnut graph

![](./images/Doughnut.png?raw=true)

## Table of Contents

- [Installation](##Installation)
- [Documentation](###Documentation)
    - [Radial Progress Bar](###Radial-progress-bar)
        - [Params](###Params)
        - [Usage](###Usage)
    - [Doughnut](###Doughnt)
        - [Params](###Params)
        - [Usage](###Usage)

- [License](##License)



## Installation
Install @ng-library/circular-graphs

```bash
npm i @ng-library/circular-graphs --save
```

## Documentation

### Radial Progress Bar

##### Params

param       | type     | description
------------|----------|----------------------------------------------------
value       | int      | Value of progress bar. Must be between 0 and 100
color ?     | string   | Color of progress bar.
showValue ? | string   | Show the value in percentaje in center of progress bar


##### Usage:

```javascript

@ app.module.ts

...
import { RadialProgressBarModule } from '@angular-lib/circular-graphs'; 
...

@NgModule({
    ...
    imports: [
        ...
        RadialProgressBarModule
    ],
    ...
})
```
```javascript
@ file.component.ts

...
ngOnInit() {
    this.RadialProgressData = {
        value: 48,
        color: 'blue'
        showValue: true
    };
}
...
```
```javascript
@ file.html

<ngl-radial-progress-bar
    style="width: 200px; height: 100px; display: block;"
    [graphData]="RadialProgressData"
></ngl-radial-progress-bar>
```

### Doughnt

##### Params

param       | type          | description
------------|---------------|----------------------------------------------------
values      | array<int>    | Array of values to represent
colors?     | array<string> | Color of segments of doughnt. If there isn't colors are applied random colors



##### Usage:

```javascript

@ app.module.ts

...
import { DoughnutModule } from '@angular-lib/circular-graphs'; 
...

@NgModule({
    ...
    imports: [
        ...
        DoughnutModule
    ],
    ...
})
```
```javascript
@ file.component.ts

...
ngOnInit() {
    this.DoughnutData = {
        values: [32, 24, 21, 46],
        colors: ['red', 'blue', 'yellow', 'green']
    };
}
...
```
```javascript
@ file.html

<ngl-doughnut
    style="width: 200px; height: 100px; display: block;"
    [graphData]="DoughnutData"
></nngl-doughnut>
```


## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)