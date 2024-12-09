/* eslint-disable @angular-eslint/no-inputs-metadata-property */
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, inject, Input, ViewEncapsulation, } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { startWith, Subject, takeUntil, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let nextUniqueId = 0;
export class AplazoSidenavLinkComponent {
    #routerLink = inject(RouterLinkActive, {
        host: true,
        optional: true,
    });
    #destroy = new Subject();
    #classnames = {
        base: 'aplazo-sidenav-link',
        modifier: 'aplazo-sidenav-link--no-selection',
    };
    #uid = `aplz-ui-sidenav-link--${nextUniqueId++}`;
    set id(value) {
        this.#id = value || this.#uid;
    }
    get id() {
        return this.#id;
    }
    #id = this.#uid;
    /** Internal reference to handle the classes of the host
     * @ignore
     */
    get class() {
        return Object.values(this.#classnames).filter(Boolean).join(' ');
    }
    ngOnInit() {
        this.#routerLink?.isActiveChange
            .pipe(takeUntil(this.#destroy), startWith(this.#routerLink.isActive), tap((isActive) => {
            if (isActive) {
                this.#classnames.modifier = 'aplazo-sidenav-link--active';
            }
            else {
                this.#classnames.modifier = 'aplazo-sidenav-link--no-selection';
            }
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.#destroy.next();
        this.#destroy.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoSidenavLinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: AplazoSidenavLinkComponent, isStandalone: true, selector: "a[aplzSidenavLink]", inputs: { id: "id" }, host: { properties: { "class": "this.class" } }, hostDirectives: [{ directive: i1.RouterLinkActive }], ngImport: i0, template: `
    <span class="aplazo-sidenav-link__label aplazo-sidenav-link__label-pretty">
      <ng-content></ng-content>
    </span>
  `, isInline: true, styles: [".aplazo-sidenav-link{position:relative;display:flex;min-height:4rem;width:100%;cursor:pointer;align-items:center;justify-content:flex-start;--tw-bg-opacity: 1;background-color:rgb(var(--light-primary-rgb) / var(--tw-bg-opacity));padding-left:1.25rem;font-size:var(--font-size-base);line-height:var(--line-height-base);letter-spacing:var(--letter-spacing-base);text-transform:capitalize}.aplazo-sidenav-link--no-selection{color:var(--dark-secondary)}.aplazo-sidenav-link--no-selection:hover{background-color:var(--dark-background)}.aplazo-sidenav-link--active{background-color:var(--dark-background);font-weight:500;--tw-text-opacity: 1;color:rgb(var(--dark-primary-rgb) / var(--tw-text-opacity))}.aplazo-sidenav-link--active:before{position:absolute;top:0;left:0;height:100%;width:.375rem;border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;content:var(--tw-content);background-color:var(--aplazo-aplazo)}.aplazo-sidenav-link__label{margin-left:1.25rem;max-width:24ch;padding-right:1.25rem}.aplazo-sidenav-link__label-pretty{text-wrap:pretty}.aplazo-sidenav-link__icon--empty{height:2rem;width:2rem}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoSidenavLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'a[aplzSidenavLink]', standalone: true, imports: [NgIf, RouterModule], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, hostDirectives: [
                        {
                            directive: RouterLinkActive,
                        },
                    ], template: `
    <span class="aplazo-sidenav-link__label aplazo-sidenav-link__label-pretty">
      <ng-content></ng-content>
    </span>
  `, styles: [".aplazo-sidenav-link{position:relative;display:flex;min-height:4rem;width:100%;cursor:pointer;align-items:center;justify-content:flex-start;--tw-bg-opacity: 1;background-color:rgb(var(--light-primary-rgb) / var(--tw-bg-opacity));padding-left:1.25rem;font-size:var(--font-size-base);line-height:var(--line-height-base);letter-spacing:var(--letter-spacing-base);text-transform:capitalize}.aplazo-sidenav-link--no-selection{color:var(--dark-secondary)}.aplazo-sidenav-link--no-selection:hover{background-color:var(--dark-background)}.aplazo-sidenav-link--active{background-color:var(--dark-background);font-weight:500;--tw-text-opacity: 1;color:rgb(var(--dark-primary-rgb) / var(--tw-text-opacity))}.aplazo-sidenav-link--active:before{position:absolute;top:0;left:0;height:100%;width:.375rem;border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;content:var(--tw-content);background-color:var(--aplazo-aplazo)}.aplazo-sidenav-link__label{margin-left:1.25rem;max-width:24ch;padding-right:1.25rem}.aplazo-sidenav-link__label-pretty{text-wrap:pretty}.aplazo-sidenav-link__icon--empty{height:2rem;width:2rem}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBsYXpvLXNpZGVuYXYtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQtdWkvc2lkZW5hdi9zcmMvc2lkZW5hdi1saW5rL2FwbGF6by1zaWRlbmF2LWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdFQUFnRTtBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBR0wsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFMUQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBcUJyQixNQUFNLE9BQU8sMEJBQTBCO0lBQzVCLFdBQVcsR0FBNEIsTUFBTSxDQUFDLGdCQUFnQixFQUFFO1FBQ3ZFLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDLENBQUM7SUFFSCxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUUvQixXQUFXLEdBQUc7UUFDWixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLFFBQVEsRUFBRSxtQ0FBbUM7S0FDOUMsQ0FBQztJQUVGLElBQUksR0FBRyx5QkFBeUIsWUFBWSxFQUFFLEVBQUUsQ0FBQztJQUVqRCxJQUNJLEVBQUUsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsR0FBRyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFeEI7O09BRUc7SUFDSCxJQUNJLEtBQUs7UUFDUCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLGNBQWM7YUFDN0IsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUNwQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNmLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsNkJBQTZCLENBQUM7WUFDNUQsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLG1DQUFtQyxDQUFDO1lBQ2xFLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7K0dBbkRVLDBCQUEwQjttR0FBMUIsMEJBQTBCLDJNQVAzQjs7OztHQUlULGlxQ0FaZSxZQUFZOzs0RkFlakIsMEJBQTBCO2tCQW5CdEMsU0FBUzsrQkFFRSxvQkFBb0IsY0FDbEIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxpQkFDZCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQjt3QkFDZDs0QkFDRSxTQUFTLEVBQUUsZ0JBQWdCO3lCQUM1QjtxQkFDRixZQUNTOzs7O0dBSVQ7OEJBbUJHLEVBQUU7c0JBREwsS0FBSztnQkFhRixLQUFLO3NCQURSLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHkgKi9cclxuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIGluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rQWN0aXZlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIFN1YmplY3QsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcyc7XHJcblxyXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdhW2FwbHpTaWRlbmF2TGlua10nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05nSWYsIFJvdXRlck1vZHVsZV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0RGlyZWN0aXZlczogW1xyXG4gICAge1xyXG4gICAgICBkaXJlY3RpdmU6IFJvdXRlckxpbmtBY3RpdmUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiYXBsYXpvLXNpZGVuYXYtbGlua19fbGFiZWwgYXBsYXpvLXNpZGVuYXYtbGlua19fbGFiZWwtcHJldHR5XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogWycuL2FwbGF6by1zaWRlbmF2LWxpbmsuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvU2lkZW5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcmVhZG9ubHkgI3JvdXRlckxpbms6IFJvdXRlckxpbmtBY3RpdmUgfCBudWxsID0gaW5qZWN0KFJvdXRlckxpbmtBY3RpdmUsIHtcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgI2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAjY2xhc3NuYW1lcyA9IHtcclxuICAgIGJhc2U6ICdhcGxhem8tc2lkZW5hdi1saW5rJyxcclxuICAgIG1vZGlmaWVyOiAnYXBsYXpvLXNpZGVuYXYtbGluay0tbm8tc2VsZWN0aW9uJyxcclxuICB9O1xyXG5cclxuICAjdWlkID0gYGFwbHotdWktc2lkZW5hdi1saW5rLS0ke25leHRVbmlxdWVJZCsrfWA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuI2lkID0gdmFsdWUgfHwgdGhpcy4jdWlkO1xyXG4gIH1cclxuICBnZXQgaWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLiNpZDtcclxuICB9XHJcbiAgI2lkOiBzdHJpbmcgPSB0aGlzLiN1aWQ7XHJcblxyXG4gIC8qKiBJbnRlcm5hbCByZWZlcmVuY2UgdG8gaGFuZGxlIHRoZSBjbGFzc2VzIG9mIHRoZSBob3N0XHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBjbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy4jY2xhc3NuYW1lcykuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy4jcm91dGVyTGluaz8uaXNBY3RpdmVDaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuI2Rlc3Ryb3kpLFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLiNyb3V0ZXJMaW5rLmlzQWN0aXZlKSxcclxuICAgICAgICB0YXAoKGlzQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy4jY2xhc3NuYW1lcy5tb2RpZmllciA9ICdhcGxhem8tc2lkZW5hdi1saW5rLS1hY3RpdmUnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4jY2xhc3NuYW1lcy5tb2RpZmllciA9ICdhcGxhem8tc2lkZW5hdi1saW5rLS1uby1zZWxlY3Rpb24nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiNkZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuI2Rlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19