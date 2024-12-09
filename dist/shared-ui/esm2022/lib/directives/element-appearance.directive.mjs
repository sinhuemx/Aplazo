import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export const ELEMENT_APPEARANCES = ['solid', 'stroked', 'basic'];
export class AplazoElementAppearanceDirective {
    set aplzAppearance(value) {
        if (value == null || !ELEMENT_APPEARANCES.includes(value)) {
            this.#appearance = 'aplazo-element-appearance--basic';
            return;
        }
        switch (value) {
            case 'solid':
                this.#appearance = 'aplazo-element-appearance--solid';
                break;
            case 'stroked':
                this.#appearance = 'aplazo-element-appearance--stroked';
                break;
            case 'basic':
            default:
                this.#appearance = 'aplazo-element-appearance--basic';
        }
    }
    get class() {
        return this.#appearance;
    }
    #appearance = 'aplazo-element-appearance--basic';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementAppearanceDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementAppearanceDirective, isStandalone: true, selector: "[aplzAppearance]", inputs: { aplzAppearance: "aplzAppearance" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementAppearanceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzAppearance]',
                    standalone: true,
                }]
        }], propDecorators: { aplzAppearance: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1hcHBlYXJhbmNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC11aS9zcmMvbGliL2RpcmVjdGl2ZXMvZWxlbWVudC1hcHBlYXJhbmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQVUsQ0FBQztBQU8xRSxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLElBQ0ksY0FBYyxDQUFDLEtBQStCO1FBQ2hELElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsa0NBQWtDLENBQUM7WUFFdEQsT0FBTztRQUNULENBQUM7UUFFRCxRQUFRLEtBQUssRUFBRSxDQUFDO1lBQ2QsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsa0NBQWtDLENBQUM7Z0JBQ3RELE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxvQ0FBb0MsQ0FBQztnQkFDeEQsTUFBTTtZQUNSLEtBQUssT0FBTyxDQUFDO1lBQ2I7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsV0FBVyxHQUNULGtDQUFrQyxDQUFDOytHQTNCMUIsZ0NBQWdDO21HQUFoQyxnQ0FBZ0M7OzRGQUFoQyxnQ0FBZ0M7a0JBSjVDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUdLLGNBQWM7c0JBRGpCLEtBQUs7Z0JBc0JGLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBFTEVNRU5UX0FQUEVBUkFOQ0VTID0gWydzb2xpZCcsICdzdHJva2VkJywgJ2Jhc2ljJ10gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIEVsZW1lbnRBcHBlYXJhbmNlID0gdHlwZW9mIEVMRU1FTlRfQVBQRUFSQU5DRVNbbnVtYmVyXTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwbHpBcHBlYXJhbmNlXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwbGF6b0VsZW1lbnRBcHBlYXJhbmNlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKVxyXG4gIHNldCBhcGx6QXBwZWFyYW5jZSh2YWx1ZTogRWxlbWVudEFwcGVhcmFuY2UgfCBudWxsKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAhRUxFTUVOVF9BUFBFQVJBTkNFUy5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy4jYXBwZWFyYW5jZSA9ICdhcGxhem8tZWxlbWVudC1hcHBlYXJhbmNlLS1iYXNpYyc7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICdzb2xpZCc6XHJcbiAgICAgICAgdGhpcy4jYXBwZWFyYW5jZSA9ICdhcGxhem8tZWxlbWVudC1hcHBlYXJhbmNlLS1zb2xpZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0cm9rZWQnOlxyXG4gICAgICAgIHRoaXMuI2FwcGVhcmFuY2UgPSAnYXBsYXpvLWVsZW1lbnQtYXBwZWFyYW5jZS0tc3Ryb2tlZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Jhc2ljJzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLiNhcHBlYXJhbmNlID0gJ2FwbGF6by1lbGVtZW50LWFwcGVhcmFuY2UtLWJhc2ljJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBjbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLiNhcHBlYXJhbmNlO1xyXG4gIH1cclxuICAjYXBwZWFyYW5jZTogYGFwbGF6by1lbGVtZW50LWFwcGVhcmFuY2UtLSR7RWxlbWVudEFwcGVhcmFuY2V9YCA9XHJcbiAgICAnYXBsYXpvLWVsZW1lbnQtYXBwZWFyYW5jZS0tYmFzaWMnO1xyXG59XHJcbiJdfQ==