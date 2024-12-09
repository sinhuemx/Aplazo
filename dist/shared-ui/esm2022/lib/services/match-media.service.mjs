/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { combineLatest, fromEvent, map, of, shareReplay, startWith, } from 'rxjs';
import * as i0 from "@angular/core";
/** Simple service to match screen media queries
 *
 * Only works in the browser, so it's important to use it only in components.
 *
 * The screen sizes are the same as in tailwind screens preset.
 * and we have an entity that describes the screen sizes within entities/screens.ts
 *
 * inspired by:
 * https://admin.indepth.dev/responsive-angular/
 *
 */
export class AplazoMatchMediaService {
    constructor() {
        this.#platformId = inject(PLATFORM_ID);
        this.#window = inject(DOCUMENT).defaultView;
        this.matchXsScreen$ = this.match$('screen and (min-width: 375px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 375px)')));
        this.matchSmScreen$ = this.match$('screen and (min-width: 540px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 540px)')));
        this.matchMdScreen$ = this.match$('screen and (min-width: 720px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 720px)')));
        this.matchLgScreen$ = this.match$('screen and (min-width: 960px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 960px)')));
        this.matchXlScreen$ = this.match$('screen and (min-width: 1140px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 1140px)')));
        this.match2xlScreen$ = this.match$('screen and (min-width: 1320px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 1320px)')));
        /** Stream with the size of the screen
         * @description
         * The screen sizes are the same as in tailwind screens preset.
         * @example
         * this.aplazoMatchMediaService.screenSize$.subscribe((size) => {
         *  console.log(size); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
         * });
         */
        this.screenSize$ = () => {
            if (!isPlatformBrowser(this.#platformId) || this.#window == null) {
                return of('xs');
            }
            return combineLatest({
                xs: this.matchMedia('screen and (min-width: 375px)'),
                sm: this.matchMedia('screen and (min-width: 540px)'),
                md: this.matchMedia('screen and (min-width: 720px)'),
                lg: this.matchMedia('screen and (min-width: 960px)'),
                xl: this.matchMedia('screen and (min-width: 1140px)'),
                '2xl': this.matchMedia('screen and (min-width: 1320px)'),
                '3xl': this.matchMedia('screen and (min-width: 1440px)'),
                '4xl': this.matchMedia('screen and (min-width: 1680px)'),
                '5xl': this.matchMedia('screen and (min-width: 1920px)'),
            }).pipe(map((sizes) => Object.entries(sizes)
                .map(([size, matches]) => (matches ? size : null))
                .filter(Boolean)
                .pop() ?? 'xs'));
        };
    }
    #platformId;
    #window;
    syncMatch(mediaQueryList) {
        return this.#window?.matchMedia(mediaQueryList).matches ?? false;
    }
    match$(mediaQueryList) {
        return this.#window == null
            ? of({ matches: false })
            : fromEvent(this.#window.matchMedia(mediaQueryList), 'change').pipe(map((matchEvent) => {
                return { matches: matchEvent.matches };
            }), shareReplay(1));
    }
    matchMedia(mediaQueryList) {
        return fromEvent(this.#window.matchMedia(mediaQueryList), 'change').pipe(startWith(this.#window.matchMedia(mediaQueryList)), map((evt) => evt.matches));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC11aS9zcmMvbGliL3NlcnZpY2VzL21hdGNoLW1lZGlhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUVMLGFBQWEsRUFDYixTQUFTLEVBQ1QsR0FBRyxFQUNILEVBQUUsRUFDRixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sTUFBTSxDQUFDOztBQUdkOzs7Ozs7Ozs7O0dBVUc7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBRHBDO1FBRVcsZ0JBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsWUFBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFFaEQsbUJBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1FBQ0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1FBQ0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMs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QUM7WUFDekMsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7SUFDUixDQUFDO0lBRU8sVUFBVSxDQUFDLGNBQWdDO1FBQ2pELE9BQU8sU0FBUyxDQUNkLElBQUksQ0FBQyxPQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUN4QyxRQUFRLENBQ1QsQ0FBQyxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQ25ELEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUMxQixDQUFDO0lBQ0osQ0FBQzsrR0FsRlUsdUJBQXVCO21IQUF2Qix1QkFBdUIsY0FEVixNQUFNOzs0RkFDbkIsdUJBQXVCO2tCQURuQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cclxuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE9ic2VydmFibGUsXHJcbiAgY29tYmluZUxhdGVzdCxcclxuICBmcm9tRXZlbnQsXHJcbiAgbWFwLFxyXG4gIG9mLFxyXG4gIHNoYXJlUmVwbGF5LFxyXG4gIHN0YXJ0V2l0aCxcclxufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWVkaWFRdWVyeVNjcmVlbiB9IGZyb20gJy4uL2VudGl0aWVzL3NjcmVlbnMnO1xyXG5cclxuLyoqIFNpbXBsZSBzZXJ2aWNlIHRvIG1hdGNoIHNjcmVlbiBtZWRpYSBxdWVyaWVzXHJcbiAqXHJcbiAqIE9ubHkgd29ya3MgaW4gdGhlIGJyb3dzZXIsIHNvIGl0J3MgaW1wb3J0YW50IHRvIHVzZSBpdCBvbmx5IGluIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIFRoZSBzY3JlZW4gc2l6ZXMgYXJlIHRoZSBzYW1lIGFzIGluIHRhaWx3aW5kIHNjcmVlbnMgcHJlc2V0LlxyXG4gKiBhbmQgd2UgaGF2ZSBhbiBlbnRpdHkgdGhhdCBkZXNjcmliZXMgdGhlIHNjcmVlbiBzaXplcyB3aXRoaW4gZW50aXRpZXMvc2NyZWVucy50c1xyXG4gKlxyXG4gKiBpbnNwaXJlZCBieTpcclxuICogaHR0cHM6Ly9hZG1pbi5pbmRlcHRoLmRldi9yZXNwb25zaXZlLWFuZ3VsYXIvXHJcbiAqXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvTWF0Y2hNZWRpYVNlcnZpY2Uge1xyXG4gIHJlYWRvbmx5ICNwbGF0Zm9ybUlkID0gaW5qZWN0KFBMQVRGT1JNX0lEKTtcclxuICByZWFkb25seSAjd2luZG93ID0gaW5qZWN0KERPQ1VNRU5UKS5kZWZhdWx0VmlldztcclxuXHJcbiAgbWF0Y2hYc1NjcmVlbiQgPSB0aGlzLm1hdGNoJCgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCknKS5waXBlKFxyXG4gICAgc3RhcnRXaXRoKHRoaXMuI3dpbmRvdz8ubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCknKSlcclxuICApO1xyXG4gIG1hdGNoU21TY3JlZW4kID0gdGhpcy5tYXRjaCQoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpJykucGlwZShcclxuICAgIHN0YXJ0V2l0aCh0aGlzLiN3aW5kb3c/Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpJykpXHJcbiAgKTtcclxuICBtYXRjaE1kU2NyZWVuJCA9IHRoaXMubWF0Y2gkKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KScpLnBpcGUoXHJcbiAgICBzdGFydFdpdGgodGhpcy4jd2luZG93Py5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KScpKVxyXG4gICk7XHJcbiAgbWF0Y2hMZ1NjcmVlbiQgPSB0aGlzLm1hdGNoJCgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknKS5waXBlKFxyXG4gICAgc3RhcnRXaXRoKHRoaXMuI3dpbmRvdz8ubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknKSlcclxuICApO1xyXG4gIG1hdGNoWGxTY3JlZW4kID0gdGhpcy5tYXRjaCQoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE0MHB4KScpLnBpcGUoXHJcbiAgICBzdGFydFdpdGgodGhpcy4jd2luZG93Py5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNDBweCknKSlcclxuICApO1xyXG4gIG1hdGNoMnhsU2NyZWVuJCA9IHRoaXMubWF0Y2gkKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMjBweCknKS5waXBlKFxyXG4gICAgc3RhcnRXaXRoKHRoaXMuI3dpbmRvdz8ubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzIwcHgpJykpXHJcbiAgKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB3aXRoIHRoZSBzaXplIG9mIHRoZSBzY3JlZW5cclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgc2NyZWVuIHNpemVzIGFyZSB0aGUgc2FtZSBhcyBpbiB0YWlsd2luZCBzY3JlZW5zIHByZXNldC5cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHRoaXMuYXBsYXpvTWF0Y2hNZWRpYVNlcnZpY2Uuc2NyZWVuU2l6ZSQuc3Vic2NyaWJlKChzaXplKSA9PiB7XHJcbiAgICogIGNvbnNvbGUubG9nKHNpemUpOyAvLyAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcyeGwnIHwgJzN4bCcgfCAnNHhsJyB8ICc1eGwnXHJcbiAgICogfSk7XHJcbiAgICovXHJcbiAgc2NyZWVuU2l6ZSQ6ICgpID0+IE9ic2VydmFibGU8c3RyaW5nPiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy4jcGxhdGZvcm1JZCkgfHwgdGhpcy4jd2luZG93ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG9mKCd4cycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoe1xyXG4gICAgICB4czogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KScpLFxyXG4gICAgICBzbTogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KScpLFxyXG4gICAgICBtZDogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KScpLFxyXG4gICAgICBsZzogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KScpLFxyXG4gICAgICB4bDogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNDBweCknKSxcclxuICAgICAgJzJ4bCc6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzIwcHgpJyksXHJcbiAgICAgICczeGwnOiB0aGlzLm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KScpLFxyXG4gICAgICAnNHhsJzogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCknKSxcclxuICAgICAgJzV4bCc6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpJyksXHJcbiAgICB9KS5waXBlKFxyXG4gICAgICBtYXAoXHJcbiAgICAgICAgKHNpemVzKSA9PlxyXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2l6ZXMpXHJcbiAgICAgICAgICAgIC5tYXAoKFtzaXplLCBtYXRjaGVzXSkgPT4gKG1hdGNoZXMgPyBzaXplIDogbnVsbCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgLnBvcCgpID8/ICd4cydcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBzeW5jTWF0Y2gobWVkaWFRdWVyeUxpc3Q6IE1lZGlhUXVlcnlTY3JlZW4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLiN3aW5kb3c/Lm1hdGNoTWVkaWEobWVkaWFRdWVyeUxpc3QpLm1hdGNoZXMgPz8gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBtYXRjaCQobWVkaWFRdWVyeUxpc3Q6IE1lZGlhUXVlcnlTY3JlZW4pOiBPYnNlcnZhYmxlPHsgbWF0Y2hlczogYm9vbGVhbiB9PiB7XHJcbiAgICByZXR1cm4gdGhpcy4jd2luZG93ID09IG51bGxcclxuICAgICAgPyBvZih7IG1hdGNoZXM6IGZhbHNlIH0pXHJcbiAgICAgIDogZnJvbUV2ZW50PE1lZGlhUXVlcnlMaXN0RXZlbnQ+KFxyXG4gICAgICAgICAgdGhpcy4jd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeUxpc3QpLFxyXG4gICAgICAgICAgJ2NoYW5nZSdcclxuICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKG1hdGNoRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWF0Y2hlczogbWF0Y2hFdmVudC5tYXRjaGVzIH07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWF0Y2hNZWRpYShtZWRpYVF1ZXJ5TGlzdDogTWVkaWFRdWVyeVNjcmVlbikge1xyXG4gICAgcmV0dXJuIGZyb21FdmVudDxNZWRpYVF1ZXJ5TGlzdEV2ZW50PihcclxuICAgICAgdGhpcy4jd2luZG93IS5tYXRjaE1lZGlhKG1lZGlhUXVlcnlMaXN0KSxcclxuICAgICAgJ2NoYW5nZSdcclxuICAgICkucGlwZShcclxuICAgICAgc3RhcnRXaXRoKHRoaXMuI3dpbmRvdyEubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5TGlzdCkpLFxyXG4gICAgICBtYXAoKGV2dCkgPT4gZXZ0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=