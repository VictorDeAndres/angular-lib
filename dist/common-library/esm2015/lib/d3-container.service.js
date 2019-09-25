/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as d3 from 'd3';
export class D3Container {
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
        this._svgContainer = d3.select(`#${this._uid}`)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZDMtY29udGFpbmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24tbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kMy1jb250YWluZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFPdEIsWUFDRSxXQUF1QjtRQUd2QiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRXBELHFCQUFxQjtRQUNyQixXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXpDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQU9ELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFPRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBT0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQU9ELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBT08sV0FBVztRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjs7Ozs7O0lBckVDLG9DQUFzQjs7Ozs7SUFDdEIsMkJBQXFCOzs7OztJQUNyQiw4QkFBd0I7Ozs7O0lBQ3hCLDZCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5leHBvcnQgY2xhc3MgRDNDb250YWluZXIge1xuXG4gIHByaXZhdGUgX3N2Z0NvbnRhaW5lcjtcbiAgcHJpdmF0ZSBfdWlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBwcml2YXRlIHZhcmlhYmxlc1xuICAgIHRoaXMuX3VpZCA9IHRoaXMuZ2VuZXJhdGVVSUQoKTtcbiAgICB0aGlzLl9oZWlnaHQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLl93aWR0aCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICAvLyBBZGQgSWQgdG8gRWxlbWVudDtcbiAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkID0gdGhpcy5fdWlkO1xuXG4gICAgLy8gQ3JlYXRlIHN2ZyBjb250YWluZXJcbiAgICB0aGlzLl9zdmdDb250YWluZXIgPSBkMy5zZWxlY3QoYCMke3RoaXMuX3VpZH1gKVxuICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgIC5hdHRyKCdpZCcsIGBzdmctJHt0aGlzLl91aWR9YClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLl93aWR0aCk7XG4gIH1cblxuICAvKipcbiAgICogc3ZnQ29udGFpbmVyXG4gICAqIHJldHVybiBzdmcgY29udGFpbmVyXG4gICAqIEByZXR1cm5zIEhUTUxFbGVtZW50XG4gICAqL1xuICBnZXQgc3ZnQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fc3ZnQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIHVpZFxuICAgKiByZXR1cm4gdWlkIG9mIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIGdldCB1aWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlaWdodFxuICAgKiByZXR1cm4gaGVpZ2h0IG9mIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICovXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIHdpZHRoXG4gICAqIHJldHVybiB3aWR0aCBvZiBjb250YWluZXJcbiAgICogQHJldHVybnMgbnVtYmVyXG4gICAqL1xuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJhdGVVSURcbiAgICogR2VuZXJhdGUgbmV3IFVJRC4gVGhlIHVpZCBpcyBtYWtlIHdpdGggRGF0ZS5ub3cgYW5kIHBsdXMgcmFuZG9tIG51bWJlciBhbmQgdGhlbiByZXBsYWNlIGl0IHRvIHN0cmluZy5cbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlVUlEKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpLnJlcGxhY2UoJy4nLCAnLScpO1xuICB9XG59Il19