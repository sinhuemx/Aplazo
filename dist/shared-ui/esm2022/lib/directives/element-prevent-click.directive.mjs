import { Directive, HostListener, inject } from '@angular/core';
import { AplazoElementDisabledDirective } from './element-disabled.directive';
import * as i0 from "@angular/core";
export class AplazoElementPreventClickDirective {
    #disabledDirective = inject(AplazoElementDisabledDirective, {
        optional: true,
        self: true,
    });
    onClick(e) {
        if (this.#disabledDirective?.disabled) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementPreventClickDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementPreventClickDirective, isStandalone: true, selector: "[aplazoElementPreventClick]", host: { listeners: { "click": "onClick($event)", "dblclick": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementPreventClickDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplazoElementPreventClick]',
                    standalone: true,
                }]
        }], propDecorators: { onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }, {
                type: HostListener,
                args: ['dblclick', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1wcmV2ZW50LWNsaWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC11aS9zcmMvbGliL2RpcmVjdGl2ZXMvZWxlbWVudC1wcmV2ZW50LWNsaWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBTTlFLE1BQU0sT0FBTyxrQ0FBa0M7SUFDcEMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixFQUFFO1FBQ25FLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDLENBQUM7SUFJSCxPQUFPLENBQUMsQ0FBUTtRQUNkLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQzsrR0FiVSxrQ0FBa0M7bUdBQWxDLGtDQUFrQzs7NEZBQWxDLGtDQUFrQztrQkFKOUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBU0MsT0FBTztzQkFGTixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7c0JBQ2hDLFlBQVk7dUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGxhem9FbGVtZW50RGlzYWJsZWREaXJlY3RpdmUgfSBmcm9tICcuL2VsZW1lbnQtZGlzYWJsZWQuZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwbGF6b0VsZW1lbnRQcmV2ZW50Q2xpY2tdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvRWxlbWVudFByZXZlbnRDbGlja0RpcmVjdGl2ZSB7XHJcbiAgcmVhZG9ubHkgI2Rpc2FibGVkRGlyZWN0aXZlID0gaW5qZWN0KEFwbGF6b0VsZW1lbnREaXNhYmxlZERpcmVjdGl2ZSwge1xyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICBzZWxmOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLiNkaXNhYmxlZERpcmVjdGl2ZT8uZGlzYWJsZWQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=