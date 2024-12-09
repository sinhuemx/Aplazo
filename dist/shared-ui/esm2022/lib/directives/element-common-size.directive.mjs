import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export const COMMON_SIZE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
export class AplazoCommonSizeDirective {
    set size(value) {
        if (value == null || !COMMON_SIZE.includes(value)) {
            this.#classSize = '';
            return;
        }
        switch (value) {
            case 'xs':
                this.#classSize = 'aplazo-element-size--xs';
                break;
            case 'sm':
                this.#classSize = 'aplazo-element-size--sm';
                break;
            case 'md':
                this.#classSize = 'aplazo-element-size--md';
                break;
            case 'lg':
                this.#classSize = 'aplazo-element-size--lg';
                break;
            case 'xl':
                this.#classSize = 'aplazo-element-size--xl';
                break;
            case '2xl':
                this.#classSize = 'aplazo-element-size--2xl';
                break;
            default:
                this.#classSize = '';
        }
    }
    get class() {
        return this.#classSize;
    }
    #classSize = '';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoCommonSizeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoCommonSizeDirective, isStandalone: true, selector: "[aplzCommonSize]", inputs: { size: "size" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoCommonSizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzCommonSize]',
                    standalone: true,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1jb21tb24tc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL2VsZW1lbnQtY29tbW9uLXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFOUQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQVUsQ0FBQztBQU8xRSxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLElBQ0ksSUFBSSxDQUFDLEtBQXdCO1FBQy9CLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixPQUFPO1FBQ1QsQ0FBQztRQUVELFFBQVEsS0FBSyxFQUFFLENBQUM7WUFDZCxLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQztnQkFDNUMsTUFBTTtZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQztnQkFDNUMsTUFBTTtZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQUM7Z0JBQzdDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVSxHQUE4QyxFQUFFLENBQUM7K0dBcENoRCx5QkFBeUI7bUdBQXpCLHlCQUF5Qjs7NEZBQXpCLHlCQUF5QjtrQkFKckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBR0ssSUFBSTtzQkFEUCxLQUFLO2dCQWdDRixLQUFLO3NCQURSLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTU9OX1NJWkUgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJzJ4bCddIGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBDb21tb25TaXplID0gdHlwZW9mIENPTU1PTl9TSVpFW251bWJlcl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcGx6Q29tbW9uU2l6ZV0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGxhem9Db21tb25TaXplRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKVxyXG4gIHNldCBzaXplKHZhbHVlOiBDb21tb25TaXplIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUNPTU1PTl9TSVpFLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLiNjbGFzc1NpemUgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAneHMnOlxyXG4gICAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICdhcGxhem8tZWxlbWVudC1zaXplLS14cyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgICB0aGlzLiNjbGFzc1NpemUgPSAnYXBsYXpvLWVsZW1lbnQtc2l6ZS0tc20nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgdGhpcy4jY2xhc3NTaXplID0gJ2FwbGF6by1lbGVtZW50LXNpemUtLW1kJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICdhcGxhem8tZWxlbWVudC1zaXplLS1sZyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgICB0aGlzLiNjbGFzc1NpemUgPSAnYXBsYXpvLWVsZW1lbnQtc2l6ZS0teGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICcyeGwnOlxyXG4gICAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICdhcGxhem8tZWxlbWVudC1zaXplLS0yeGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xhc3NTaXplO1xyXG4gIH1cclxuICAjY2xhc3NTaXplOiBgYXBsYXpvLWVsZW1lbnQtc2l6ZS0tJHtDb21tb25TaXplfWAgfCAnJyA9ICcnO1xyXG59XHJcbiJdfQ==