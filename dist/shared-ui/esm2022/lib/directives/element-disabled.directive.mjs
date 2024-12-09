import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AplazoElementDisabledDirective {
    constructor() {
        this.disabled = false;
    }
    get nativeDisabled() {
        return this.disabled ? '' : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementDisabledDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementDisabledDirective, isStandalone: true, selector: "[aplazoElementDisabled]", inputs: { disabled: "disabled" }, host: { properties: { "class.disabled": "this.disabled", "attr.disabled": "this.nativeDisabled" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementDisabledDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplazoElementDisabled]',
                    standalone: true,
                }]
        }], propDecorators: { disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }, {
                type: Input
            }], nativeDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1kaXNhYmxlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL2VsZW1lbnQtZGlzYWJsZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLDhCQUE4QjtJQUozQztRQU9FLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FNbEI7SUFKQyxJQUNjLGNBQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDOytHQVJVLDhCQUE4QjttR0FBOUIsOEJBQThCOzs0RkFBOUIsOEJBQThCO2tCQUoxQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFJQyxRQUFRO3NCQUZQLFdBQVc7dUJBQUMsZ0JBQWdCOztzQkFDNUIsS0FBSztnQkFJUSxjQUFjO3NCQUQzQixXQUFXO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBsYXpvRWxlbWVudERpc2FibGVkXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwbGF6b0VsZW1lbnREaXNhYmxlZERpcmVjdGl2ZSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKVxyXG4gIHByb3RlY3RlZCBnZXQgbmF0aXZlRGlzYWJsZWQoKTogJycgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=