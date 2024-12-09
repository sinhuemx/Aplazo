import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export const ELEMENT_COLORS = [
    'light',
    'dark',
    'aplazo',
    'accent',
    'success',
    'danger',
    'warning',
    'info',
    'disabled',
];
export class AplazoElementColorDirective {
    set aplzColor(value) {
        if (value == null || !ELEMENT_COLORS.includes(value)) {
            this.#color = 'aplazo-element-color--light';
            return;
        }
        switch (value) {
            case 'dark':
                this.#color = 'aplazo-element-color--dark';
                break;
            case 'aplazo':
                this.#color = 'aplazo-element-color--aplazo';
                break;
            case 'accent':
                this.#color = 'aplazo-element-color--accent';
                break;
            case 'success':
                this.#color = 'aplazo-element-color--success';
                break;
            case 'danger':
                this.#color = 'aplazo-element-color--danger';
                break;
            case 'warning':
                this.#color = 'aplazo-element-color--warning';
                break;
            case 'info':
                this.#color = 'aplazo-element-color--info';
                break;
            case 'disabled':
                this.#color = 'aplazo-element-color--disabled';
                break;
            case 'light':
            default:
                this.#color = 'aplazo-element-color--light';
        }
    }
    get class() {
        return this.#color;
    }
    #color = 'aplazo-element-color--light';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementColorDirective, isStandalone: true, selector: "[aplzColor]", inputs: { aplzColor: "aplzColor" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzColor]',
                    standalone: true,
                }]
        }], propDecorators: { aplzColor: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL2VsZW1lbnQtY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFOUQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHO0lBQzVCLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0lBQ04sVUFBVTtDQUNGLENBQUM7QUFPWCxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLElBQ0ksU0FBUyxDQUFDLEtBQTBCO1FBQ3RDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUE2QixDQUFDO1lBRTVDLE9BQU87UUFDVCxDQUFDO1FBRUQsUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUNkLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsOEJBQThCLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLCtCQUErQixDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsOEJBQThCLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRywrQkFBK0IsQ0FBQztnQkFDOUMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0NBQWdDLENBQUM7Z0JBQy9DLE1BQU07WUFDUixLQUFLLE9BQU8sQ0FBQztZQUNiO2dCQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsNkJBQTZCLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU0sR0FDSiw2QkFBNkIsQ0FBQzsrR0E3Q3JCLDJCQUEyQjttR0FBM0IsMkJBQTJCOzs0RkFBM0IsMkJBQTJCO2tCQUp2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBR0ssU0FBUztzQkFEWixLQUFLO2dCQXdDRixLQUFLO3NCQURSLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRUxFTUVOVF9DT0xPUlMgPSBbXHJcbiAgJ2xpZ2h0JyxcclxuICAnZGFyaycsXHJcbiAgJ2FwbGF6bycsXHJcbiAgJ2FjY2VudCcsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdkYW5nZXInLFxyXG4gICd3YXJuaW5nJyxcclxuICAnaW5mbycsXHJcbiAgJ2Rpc2FibGVkJyxcclxuXSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgRWxlbWVudENvbG9yID0gdHlwZW9mIEVMRU1FTlRfQ09MT1JTW251bWJlcl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcGx6Q29sb3JdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvRWxlbWVudENvbG9yRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKVxyXG4gIHNldCBhcGx6Q29sb3IodmFsdWU6IEVsZW1lbnRDb2xvciB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICFFTEVNRU5UX0NPTE9SUy5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy4jY29sb3IgPSAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLWxpZ2h0JztcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ2RhcmsnOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1kYXJrJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYXBsYXpvJzpcclxuICAgICAgICB0aGlzLiNjb2xvciA9ICdhcGxhem8tZWxlbWVudC1jb2xvci0tYXBsYXpvJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYWNjZW50JzpcclxuICAgICAgICB0aGlzLiNjb2xvciA9ICdhcGxhem8tZWxlbWVudC1jb2xvci0tYWNjZW50JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgdGhpcy4jY29sb3IgPSAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLXN1Y2Nlc3MnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkYW5nZXInOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1kYW5nZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICB0aGlzLiNjb2xvciA9ICdhcGxhem8tZWxlbWVudC1jb2xvci0td2FybmluZyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1pbmZvJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGlzYWJsZWQnOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1kaXNhYmxlZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLiNjb2xvciA9ICdhcGxhem8tZWxlbWVudC1jb2xvci0tbGlnaHQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNsYXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbG9yO1xyXG4gIH1cclxuICAjY29sb3I6IGBhcGxhem8tZWxlbWVudC1jb2xvci0tJHtFbGVtZW50Q29sb3J9YCA9XHJcbiAgICAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLWxpZ2h0JztcclxufVxyXG4iXX0=