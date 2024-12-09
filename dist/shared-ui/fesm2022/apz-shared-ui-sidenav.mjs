import { NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { Subject, takeUntil, startWith, tap } from 'rxjs';

/* eslint-disable @angular-eslint/no-inputs-metadata-property */
let nextUniqueId = 0;
class AplazoSidenavLinkComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { AplazoSidenavLinkComponent };
//# sourceMappingURL=apz-shared-ui-sidenav.mjs.map
