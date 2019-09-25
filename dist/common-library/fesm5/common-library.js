import { select } from 'd3';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var D3Container = /** @class */ (function () {
    function D3Container(_elementRef) {
        // Initialize private variables
        this._uid = this.generateUID();
        this._height = _elementRef.nativeElement.clientHeight;
        this._width = _elementRef.nativeElement.clientWidth;
        // Add Id to Element;
        _elementRef.nativeElement.id = this._uid;
        // Create svg container
        this._svgContainer = select("#" + this._uid)
            .append('svg')
            .attr('id', "svg-" + this._uid)
            .attr('height', this._height)
            .attr('width', this._width);
    }
    Object.defineProperty(D3Container.prototype, "svgContainer", {
        /**
         * svgContainer
         * return svg container
         * @returns HTMLElement
         */
        get: /**
         * svgContainer
         * return svg container
         * @return {?} HTMLElement
         */
        function () {
            return this._svgContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3Container.prototype, "uid", {
        /**
         * uid
         * return uid of container
         * @returns string
         */
        get: /**
         * uid
         * return uid of container
         * @return {?} string
         */
        function () {
            return this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3Container.prototype, "height", {
        /**
         * height
         * return height of container
         * @returns number
         */
        get: /**
         * height
         * return height of container
         * @return {?} number
         */
        function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3Container.prototype, "width", {
        /**
         * width
         * return width of container
         * @returns number
         */
        get: /**
         * width
         * return width of container
         * @return {?} number
         */
        function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * generateUID
     * Generate new UID. The uid is make with Date.now and plus random number and then replace it to string.
     * @returns string
     */
    /**
     * generateUID
     * Generate new UID. The uid is make with Date.now and plus random number and then replace it to string.
     * @private
     * @return {?} string
     */
    D3Container.prototype.generateUID = /**
     * generateUID
     * Generate new UID. The uid is make with Date.now and plus random number and then replace it to string.
     * @private
     * @return {?} string
     */
    function () {
        return (Date.now() + Math.random()).toString(36).replace('.', '-');
    };
    return D3Container;
}());
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
