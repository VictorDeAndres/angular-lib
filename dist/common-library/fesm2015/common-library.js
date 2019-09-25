import { select } from 'd3';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class D3Container {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        // Initialize private variables
        this._uid = this.generateUID();
        this._height = _elementRef.nativeElement.clientHeight;
        this._width = _elementRef.nativeElement.clientWidth;
        // Add Id to Element;
        _elementRef.nativeElement.id = this._uid;
        // Create svg container
        this._svgContainer = select(`#${this._uid}`)
            .append('svg')
            .attr('id', `svg-${this._uid}`)
            .attr('height', this._height)
            .attr('width', this._width);
    }
    /**
     * svgContainer
     * return svg container
     * @return {?} HTMLElement
     */
    get svgContainer() {
        return this._svgContainer;
    }
    /**
     * uid
     * return uid of container
     * @return {?} string
     */
    get uid() {
        return this._uid;
    }
    /**
     * height
     * return height of container
     * @return {?} number
     */
    get height() {
        return this._height;
    }
    /**
     * width
     * return width of container
     * @return {?} number
     */
    get width() {
        return this._width;
    }
    /**
     * generateUID
     * Generate new UID. The uid is make with Date.now and plus random number and then replace it to string.
     * @private
     * @return {?} string
     */
    generateUID() {
        return (Date.now() + Math.random()).toString(36).replace('.', '-');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    D3Container.prototype._svgContainer;
    /**
     * @type {?}
     * @private
     */
    D3Container.prototype._uid;
    /**
     * @type {?}
     * @private
     */
    D3Container.prototype._height;
    /**
     * @type {?}
     * @private
     */
    D3Container.prototype._width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { D3Container };
//# sourceMappingURL=common-library.js.map
