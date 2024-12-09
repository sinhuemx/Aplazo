import { Directive, ElementRef, EventEmitter, inject, Output, } from '@angular/core';
import * as i0 from "@angular/core";
/**
 *
 * idea from
 * https://plainenglish.io/blog/creating-an-angular-directive-to-detect-clicking-outside-an-object-afd6c07212ef
 */
export class AplazoClickOutsideDirective {
    constructor() {
        this.#elementRef = inject(ElementRef);
        this.clickOutside = new EventEmitter();
    }
    #elementRef;
    __onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.#elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoClickOutsideDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoClickOutsideDirective, isStandalone: true, selector: "[aplzClickOutside]", outputs: { clickOutside: "clickOutside" }, host: { listeners: { "document:click": "__onClick($event, $event.target)" } }, exportAs: ["clickOutside"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoClickOutsideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzClickOutside]',
                    exportAs: 'clickOutside',
                    standalone: true,
                    host: {
                        '(document:click)': '__onClick($event, $event.target)',
                    },
                }]
        }], propDecorators: { clickOutside: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOztBQUV2Qjs7OztHQUlHO0FBU0gsTUFBTSxPQUFPLDJCQUEyQjtJQVJ4QztRQVNXLGdCQUFXLEdBQTRCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7S0FZekQ7SUFkVSxXQUFXLENBQStDO0lBSW5FLFNBQVMsQ0FBQyxLQUFpQixFQUFFLGFBQTBCO1FBQ3JELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sYUFBYSxHQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDOytHQWRVLDJCQUEyQjttR0FBM0IsMkJBQTJCOzs0RkFBM0IsMkJBQTJCO2tCQVJ2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLGtDQUFrQztxQkFDdkQ7aUJBQ0Y7OEJBSVcsWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGluamVjdCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICpcclxuICogaWRlYSBmcm9tXHJcbiAqIGh0dHBzOi8vcGxhaW5lbmdsaXNoLmlvL2Jsb2cvY3JlYXRpbmctYW4tYW5ndWxhci1kaXJlY3RpdmUtdG8tZGV0ZWN0LWNsaWNraW5nLW91dHNpZGUtYW4tb2JqZWN0LWFmZDZjMDcyMTJlZlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBsekNsaWNrT3V0c2lkZV0nLFxyXG4gIGV4cG9ydEFzOiAnY2xpY2tPdXRzaWRlJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ19fb25DbGljaygkZXZlbnQsICRldmVudC50YXJnZXQpJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuICByZWFkb25seSAjZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSBpbmplY3QoRWxlbWVudFJlZik7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIF9fb25DbGljayhldmVudDogTW91c2VFdmVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID1cclxuICAgICAgdGhpcy4jZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG4gICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=