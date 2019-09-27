

# @Angular-lib/Common Library
Common libraries for @angular-lib projects.


## Table of Contents

- [Installation](##Installation)
- [Libraries](##Libraries)
  - [Wrapper Component D3](###wrapper-component-d3)
- [License](##License)



## Installation
Install @angular-lib as a development dependency:

```bash
npm install @angular-lib/common-library --save-dependencies
```
	

## Libraries

### Wrapper Component D3 
Create a new svg element to binding angular-lib d3 components and created data visualizations.

#### Methods:
---
#### svgContainer()
---
> **Parameters:** None.
>
> **Return:** HTML Element
>
> Return created HTML Element with unique id when instance the class.

#### uid()
---
> **Parameters:** None
>
> **Return:** String. 
>
> Return a string with unique id to identificate the created element.


##### Usage:

```javascript
...
import { WrapperComponentD3 } from '@angular-lib/common-library'; 
...
private _WrapperComponentD3:  WrapperComponentD3;

constructor(
    private elementRef: ElementRef
) { }

ngOnInit() {
    // Create D3 Container
    // Generate new svg element with the measures of elementRef.
    this._WrapperComponentD3 = new WrapperComponentD3(this.elementRef);

	// Get the uniqueId
	console.info(this._WrapperComponentD3.uid());
}
```

## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
