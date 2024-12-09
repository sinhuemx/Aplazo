import { Observable } from 'rxjs';
import { MediaQueryScreen } from '../entities/screens';
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
export declare class AplazoMatchMediaService {
    #private;
    matchXsScreen$: Observable<{
        matches: boolean;
    } | MediaQueryList | undefined>;
    matchSmScreen$: Observable<{
        matches: boolean;
    } | MediaQueryList | undefined>;
    matchMdScreen$: Observable<{
        matches: boolean;
    } | MediaQueryList | undefined>;
    matchLgScreen$: Observable<{
        matches: boolean;
    } | MediaQueryList | undefined>;
    matchXlScreen$: Observable<{
        matches: boolean;
    } | MediaQueryList | undefined>;
    match2xlScreen$: Observable<{
        matches: boolean;
    } | MediaQueryList | undefined>;
    /** Stream with the size of the screen
     * @description
     * The screen sizes are the same as in tailwind screens preset.
     * @example
     * this.aplazoMatchMediaService.screenSize$.subscribe((size) => {
     *  console.log(size); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
     * });
     */
    screenSize$: () => Observable<string>;
    syncMatch(mediaQueryList: MediaQueryScreen): boolean;
    match$(mediaQueryList: MediaQueryScreen): Observable<{
        matches: boolean;
    }>;
    private matchMedia;
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoMatchMediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AplazoMatchMediaService>;
}
