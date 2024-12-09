import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { AplazoElementAppearanceDirective, AplazoElementColorDirective, AplazoElementDisabledDirective, AplazoElementPreventClickDirective, AplazoCommonSizeDirective } from '@apz/shared-ui';
import * as i0 from "@angular/core";
import * as i1 from "@apz/shared-ui";
export class AplazoButtonComponent {
    #buttonClassnames = {
        base: 'aplazo-base-button',
        fullWidth: '',
        rounded: '',
    };
    set class(value) {
        if (value == null || value === '') {
            this.#class = null;
            return;
        }
        this.#class = value;
    }
    get class() {
        const classes = new Set([
            ...Object.values(this.#buttonClassnames).filter(Boolean),
        ]);
        if (this.#class != null) {
            this.#class.split(' ').forEach((c) => classes.add(c));
        }
        return Array.from(classes).join(' ');
    }
    #class = null;
    set fullWidth(value) {
        if (value == null || value === false) {
            this.#buttonClassnames.fullWidth = '';
            return;
        }
        this.#buttonClassnames.fullWidth = 'btn-full-width';
    }
    set rounded(value) {
        if (value == null || value === false) {
            this.#buttonClassnames.rounded = '';
            return;
        }
        this.#buttonClassnames.rounded = 'btn-rounded';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: AplazoButtonComponent, isStandalone: true, selector: "button[aplzButton], a[aplzButton]", inputs: { class: "class", fullWidth: "fullWidth", rounded: "rounded" }, host: { properties: { "class": "this.class" } }, hostDirectives: [{ directive: i1.AplazoElementAppearanceDirective, inputs: ["aplzAppearance", "aplzAppearance"] }, { directive: i1.AplazoElementColorDirective, inputs: ["aplzColor", "aplzColor"] }, { directive: i1.AplazoElementDisabledDirective, inputs: ["disabled", "disabled"] }, { directive: i1.AplazoElementPreventClickDirective }, { directive: i1.AplazoCommonSizeDirective, inputs: ["size", "size"] }], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [".aplazo-base-button{display:flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;white-space:nowrap;font-weight:700;text-transform:uppercase}.aplazo-base-button:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: .3 }.aplazo-base-button:disabled{cursor:not-allowed}.aplazo-base-button:is(.btn-full-width){width:100%}.aplazo-base-button:is(.btn-rounded){border-radius:9999px}.aplazo-base-button:not(.btn-rounded){border-radius:.5rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[aplzButton], a[aplzButton]', standalone: true, imports: [
                        NgClass,
                        AplazoElementAppearanceDirective,
                        AplazoElementColorDirective,
                        AplazoElementDisabledDirective,
                        AplazoElementPreventClickDirective,
                        AplazoCommonSizeDirective
                    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: ` <ng-content></ng-content> `, hostDirectives: [
                        {
                            directive: AplazoElementAppearanceDirective,
                            inputs: ['aplzAppearance']
                        },
                        {
                            directive: AplazoElementColorDirective,
                            inputs: ['aplzColor']
                        },
                        {
                            directive: AplazoElementDisabledDirective,
                            inputs: ['disabled']
                        },
                        {
                            directive: AplazoElementPreventClickDirective
                        },
                        {
                            directive: AplazoCommonSizeDirective,
                            inputs: ['size']
                        }
                    ], styles: [".aplazo-base-button{display:flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;white-space:nowrap;font-weight:700;text-transform:uppercase}.aplazo-base-button:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: .3 }.aplazo-base-button:disabled{cursor:not-allowed}.aplazo-base-button:is(.btn-full-width){width:100%}.aplazo-base-button:is(.btn-rounded){border-radius:9999px}.aplazo-base-button:not(.btn-rounded){border-radius:.5rem}\n"] }]
        }], propDecorators: { class: [{
                type: HostBinding,
                args: ['class']
            }, {
                type: Input
            }], fullWidth: [{
                type: Input
            }], rounded: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBsYXpvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtdWkvYnV0dG9uL3NyYy9hcGxhem8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGdDQUFnQyxFQUNoQywyQkFBMkIsRUFDM0IsOEJBQThCLEVBQzlCLGtDQUFrQyxFQUNsQyx5QkFBeUIsRUFDMUIsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBNkN4QixNQUFNLE9BQU8scUJBQXFCO0lBQ3ZCLGlCQUFpQixHQUEyQjtRQUNuRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFDO0lBRUYsSUFFSSxLQUFLLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBUztZQUM5QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN6RCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELE1BQU0sR0FBa0IsSUFBSSxDQUFDO0lBRTdCLElBQ0ksU0FBUyxDQUFDLEtBQTBCO1FBQ3RDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDdEMsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUNXLE9BQU8sQ0FBQyxLQUEwQjtRQUMzQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDakQsQ0FBQzsrR0EvQ1UscUJBQXFCO21HQUFyQixxQkFBcUIsOG1CQXhCdEIsNkJBQTZCOzs0RkF3QjVCLHFCQUFxQjtrQkFyQ2pDLFNBQVM7K0JBQ0UsbUNBQW1DLGNBQ2pDLElBQUksV0FDUDt3QkFDUCxPQUFPO3dCQUNQLGdDQUFnQzt3QkFDaEMsMkJBQTJCO3dCQUMzQiw4QkFBOEI7d0JBQzlCLGtDQUFrQzt3QkFDbEMseUJBQXlCO3FCQUMxQixpQkFDYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFlBQ3JDLDZCQUE2QixrQkFDdkI7d0JBQ2Q7NEJBQ0UsU0FBUyxFQUFFLGdDQUFnQzs0QkFDM0MsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7eUJBQzNCO3dCQUNEOzRCQUNFLFNBQVMsRUFBRSwyQkFBMkI7NEJBQ3RDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQzt5QkFDdEI7d0JBQ0Q7NEJBQ0UsU0FBUyxFQUFFLDhCQUE4Qjs0QkFDekMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO3lCQUNyQjt3QkFDRDs0QkFDRSxTQUFTLEVBQUUsa0NBQWtDO3lCQUM5Qzt3QkFDRDs0QkFDRSxTQUFTLEVBQUUseUJBQXlCOzRCQUNwQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUJBQ2pCO3FCQUNGOzhCQVlHLEtBQUs7c0JBRlIsV0FBVzt1QkFBQyxPQUFPOztzQkFDbkIsS0FBSztnQkFzQkYsU0FBUztzQkFEWixLQUFLO2dCQVdLLE9BQU87c0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQXBsYXpvRWxlbWVudEFwcGVhcmFuY2VEaXJlY3RpdmUsXHJcbiAgQXBsYXpvRWxlbWVudENvbG9yRGlyZWN0aXZlLFxyXG4gIEFwbGF6b0VsZW1lbnREaXNhYmxlZERpcmVjdGl2ZSxcclxuICBBcGxhem9FbGVtZW50UHJldmVudENsaWNrRGlyZWN0aXZlLFxyXG4gIEFwbGF6b0NvbW1vblNpemVEaXJlY3RpdmVcclxufSBmcm9tICdAYXB6L3NoYXJlZC11aSc7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uQ2xhc3NuYW1lc0NvbmZpZyB7XHJcbiAgYmFzZTogc3RyaW5nO1xyXG4gIGZ1bGxXaWR0aDogc3RyaW5nO1xyXG4gIHJvdW5kZWQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdidXR0b25bYXBsekJ1dHRvbl0sIGFbYXBsekJ1dHRvbl0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmdDbGFzcyxcclxuICAgIEFwbGF6b0VsZW1lbnRBcHBlYXJhbmNlRGlyZWN0aXZlLFxyXG4gICAgQXBsYXpvRWxlbWVudENvbG9yRGlyZWN0aXZlLFxyXG4gICAgQXBsYXpvRWxlbWVudERpc2FibGVkRGlyZWN0aXZlLFxyXG4gICAgQXBsYXpvRWxlbWVudFByZXZlbnRDbGlja0RpcmVjdGl2ZSxcclxuICAgIEFwbGF6b0NvbW1vblNpemVEaXJlY3RpdmVcclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxyXG4gIGhvc3REaXJlY3RpdmVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGRpcmVjdGl2ZTogQXBsYXpvRWxlbWVudEFwcGVhcmFuY2VEaXJlY3RpdmUsXHJcbiAgICAgIGlucHV0czogWydhcGx6QXBwZWFyYW5jZSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkaXJlY3RpdmU6IEFwbGF6b0VsZW1lbnRDb2xvckRpcmVjdGl2ZSxcclxuICAgICAgaW5wdXRzOiBbJ2FwbHpDb2xvciddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkaXJlY3RpdmU6IEFwbGF6b0VsZW1lbnREaXNhYmxlZERpcmVjdGl2ZSxcclxuICAgICAgaW5wdXRzOiBbJ2Rpc2FibGVkJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRpcmVjdGl2ZTogQXBsYXpvRWxlbWVudFByZXZlbnRDbGlja0RpcmVjdGl2ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZGlyZWN0aXZlOiBBcGxhem9Db21tb25TaXplRGlyZWN0aXZlLFxyXG4gICAgICBpbnB1dHM6IFsnc2l6ZSddXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9hcGxhem8tYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwbGF6b0J1dHRvbkNvbXBvbmVudCB7XHJcbiAgcmVhZG9ubHkgI2J1dHRvbkNsYXNzbmFtZXM6IEJ1dHRvbkNsYXNzbmFtZXNDb25maWcgPSB7XHJcbiAgICBiYXNlOiAnYXBsYXpvLWJhc2UtYnV0dG9uJyxcclxuICAgIGZ1bGxXaWR0aDogJycsXHJcbiAgICByb3VuZGVkOiAnJyxcclxuICB9O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBASW5wdXQoKVxyXG4gIHNldCBjbGFzcyh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuI2NsYXNzID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI2NsYXNzID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBjbGFzcygpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBuZXcgU2V0PHN0cmluZz4oW1xyXG4gICAgICAuLi5PYmplY3QudmFsdWVzKHRoaXMuI2J1dHRvbkNsYXNzbmFtZXMpLmZpbHRlcihCb29sZWFuKSxcclxuICAgIF0pO1xyXG4gICAgaWYgKHRoaXMuI2NsYXNzICE9IG51bGwpIHtcclxuICAgICAgdGhpcy4jY2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjKSA9PiBjbGFzc2VzLmFkZChjKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oY2xhc3Nlcykuam9pbignICcpO1xyXG4gIH1cclxuICAjY2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmdWxsV2lkdGgodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLiNidXR0b25DbGFzc25hbWVzLmZ1bGxXaWR0aCA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jYnV0dG9uQ2xhc3NuYW1lcy5mdWxsV2lkdGggPSAnYnRuLWZ1bGwtd2lkdGgnO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHJvdW5kZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLiNidXR0b25DbGFzc25hbWVzLnJvdW5kZWQgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI2J1dHRvbkNsYXNzbmFtZXMucm91bmRlZCA9ICdidG4tcm91bmRlZCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==