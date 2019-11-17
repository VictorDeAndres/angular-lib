
# @ng-library/circular-graphs

Set of circular graphs for angular.

- Radial Progress Bar graph


## Table of Contents

- [Installation](##Installation)
- [Documentation](###Documentation)
    - [Radial Progress Bar](###Radial-progress-bar)
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



## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)