import { ElementRef } from '@angular/core';
export declare class D3Container {
    private _svgContainer;
    private _uid;
    private _height;
    private _width;
    constructor(_elementRef: ElementRef);
    /**
     * svgContainer
     * return svg container
     * @returns HTMLElement
     */
    readonly svgContainer: HTMLElement;
    /**
     * uid
     * return uid of container
     * @returns string
     */
    readonly uid: string;
    /**
     * height
     * return height of container
     * @returns number
     */
    readonly height: number;
    /**
     * width
     * return width of container
     * @returns number
     */
    readonly width: number;
    /**
     * generateUID
     * Generate new UID. The uid is make with Date.now and plus random number and then replace it to string.
     * @returns string
     */
    private generateUID;
}
