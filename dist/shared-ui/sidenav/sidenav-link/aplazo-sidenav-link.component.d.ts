import { OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class AplazoSidenavLinkComponent implements OnInit, OnDestroy {
    #private;
    set id(value: string);
    get id(): string;
    /** Internal reference to handle the classes of the host
     * @ignore
     */
    get class(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoSidenavLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AplazoSidenavLinkComponent, "a[aplzSidenavLink]", never, { "id": { "alias": "id"; "required": false; }; }, {}, never, ["*"], true, [{ directive: typeof i1.RouterLinkActive; inputs: {}; outputs: {}; }]>;
}
