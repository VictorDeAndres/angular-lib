/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as d3 from 'd3';
var D3Container = /** @class */ (function () {
    function D3Container(_elementRef) {
        // Initialize private variables
        this._uid = this.generateUID();
        this._height = _elementRef.nativeElement.clientHeight;
        this._width = _elementRef.nativeElement.clientWidth;
        // Add Id to Element;
        _elementRef.nativeElement.id = this._uid;
        // Create svg container
        this._svgContainer = d3.select("#" + this._uid)
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
export { D3Container };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZDMtY29udGFpbmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24tbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kMy1jb250YWluZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekI7SUFPRSxxQkFDRSxXQUF1QjtRQUd2QiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRXBELHFCQUFxQjtRQUNyQixXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXpDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBTSxDQUFDO2FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLFNBQU8sSUFBSSxDQUFDLElBQU0sQ0FBQzthQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQU9ELHNCQUFJLHFDQUFZO1FBTGhCOzs7O1dBSUc7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBT0Qsc0JBQUksNEJBQUc7UUFMUDs7OztXQUlHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLCtCQUFNO1FBTFY7Ozs7V0FJRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSw4QkFBSztRQUxUOzs7O1dBSUc7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNLLGlDQUFXOzs7Ozs7SUFBbkI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF2RUQsSUF1RUM7Ozs7Ozs7SUFyRUMsb0NBQXNCOzs7OztJQUN0QiwyQkFBcUI7Ozs7O0lBQ3JCLDhCQUF3Qjs7Ozs7SUFDeEIsNkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmV4cG9ydCBjbGFzcyBEM0NvbnRhaW5lciB7XG5cbiAgcHJpdmF0ZSBfc3ZnQ29udGFpbmVyO1xuICBwcml2YXRlIF91aWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG5cbiAgICAvLyBJbml0aWFsaXplIHByaXZhdGUgdmFyaWFibGVzXG4gICAgdGhpcy5fdWlkID0gdGhpcy5nZW5lcmF0ZVVJRCgpO1xuICAgIHRoaXMuX2hlaWdodCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuX3dpZHRoID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIC8vIEFkZCBJZCB0byBFbGVtZW50O1xuICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQgPSB0aGlzLl91aWQ7XG5cbiAgICAvLyBDcmVhdGUgc3ZnIGNvbnRhaW5lclxuICAgIHRoaXMuX3N2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChgIyR7dGhpcy5fdWlkfWApXG4gICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgLmF0dHIoJ2lkJywgYHN2Zy0ke3RoaXMuX3VpZH1gKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuX2hlaWdodClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuX3dpZHRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdmdDb250YWluZXJcbiAgICogcmV0dXJuIHN2ZyBjb250YWluZXJcbiAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGdldCBzdmdDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9zdmdDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogdWlkXG4gICAqIHJldHVybiB1aWQgb2YgY29udGFpbmVyXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgZ2V0IHVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91aWQ7XG4gIH1cblxuICAvKipcbiAgICogaGVpZ2h0XG4gICAqIHJldHVybiBoZWlnaHQgb2YgY29udGFpbmVyXG4gICAqIEByZXR1cm5zIG51bWJlclxuICAgKi9cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogd2lkdGhcbiAgICogcmV0dXJuIHdpZHRoIG9mIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZW5lcmF0ZVVJRFxuICAgKiBHZW5lcmF0ZSBuZXcgVUlELiBUaGUgdWlkIGlzIG1ha2Ugd2l0aCBEYXRlLm5vdyBhbmQgcGx1cyByYW5kb20gbnVtYmVyIGFuZCB0aGVuIHJlcGxhY2UgaXQgdG8gc3RyaW5nLlxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVVSUQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygzNikucmVwbGFjZSgnLicsICctJyk7XG4gIH1cbn0iXX0=