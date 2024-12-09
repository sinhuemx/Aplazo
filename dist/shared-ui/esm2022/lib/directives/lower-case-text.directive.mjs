/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export class AplazoLowercaseDirective {
    #elementRef = inject(ElementRef);
    #ngControl = inject(NgControl, {
        self: true,
        optional: true,
    });
    sanitizeValue(event) {
        const input = this.#elementRef.nativeElement;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        // Convertir a minúsculas
        const newValue = input.value.toLowerCase();
        // Solo actualizar si el valor ha cambiado
        if (newValue !== input.value) {
            // Actualizar valor en el input
            input.value = newValue;
            // Restaurar posición del cursor
            input.setSelectionRange(start, end);
            // Propagar el cambio al control del formulario
            if (this.#ngControl?.control) {
                this.#ngControl.control.setValue(newValue, {
                    emitEvent: false,
                    emitModelToViewChange: false,
                });
                // Disparar evento de input para asegurar la sincronización
                input.dispatchEvent(new Event('input'));
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoLowercaseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoLowercaseDirective, isStandalone: true, selector: "input[aplazoLowercase]", host: { listeners: { "input": "sanitizeValue($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoLowercaseDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[aplazoLowercase]',
                    host: {
                        '(input)': 'sanitizeValue($event)',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93ZXItY2FzZS10ZXh0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC11aS9zcmMvbGliL2RpcmVjdGl2ZXMvbG93ZXItY2FzZS10ZXh0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFTM0MsTUFBTSxPQUFPLHdCQUF3QjtJQUMxQixXQUFXLEdBQWlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRCxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUN0QyxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDbkMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUUvQix5QkFBeUI7UUFDekIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzQywwQ0FBMEM7UUFDMUMsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLCtCQUErQjtZQUMvQixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUV2QixnQ0FBZ0M7WUFDaEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVwQywrQ0FBK0M7WUFDL0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO29CQUN6QyxTQUFTLEVBQUUsS0FBSztvQkFDaEIscUJBQXFCLEVBQUUsS0FBSztpQkFDN0IsQ0FBQyxDQUFDO2dCQUVILDJEQUEyRDtnQkFDM0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzsrR0FsQ1Usd0JBQXdCO21HQUF4Qix3QkFBd0I7OzRGQUF4Qix3QkFBd0I7a0JBUHBDLFNBQVM7bUJBQUM7b0JBQ1QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsdUJBQXVCO3FCQUNuQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5ICovXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgc2VsZWN0b3I6ICdpbnB1dFthcGxhem9Mb3dlcmNhc2VdJyxcclxuICBob3N0OiB7XHJcbiAgICAnKGlucHV0KSc6ICdzYW5pdGl6ZVZhbHVlKCRldmVudCknLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGxhem9Mb3dlcmNhc2VEaXJlY3RpdmUge1xyXG4gIHJlYWRvbmx5ICNlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+ID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xyXG4gIHJlYWRvbmx5ICNuZ0NvbnRyb2wgPSBpbmplY3QoTmdDb250cm9sLCB7XHJcbiAgICBzZWxmOiB0cnVlLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHNhbml0aXplVmFsdWUoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy4jZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3Qgc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZDtcclxuXHJcbiAgICAvLyBDb252ZXJ0aXIgYSBtaW7DunNjdWxhc1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFNvbG8gYWN0dWFsaXphciBzaSBlbCB2YWxvciBoYSBjYW1iaWFkb1xyXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAvLyBBY3R1YWxpemFyIHZhbG9yIGVuIGVsIGlucHV0XHJcbiAgICAgIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAvLyBSZXN0YXVyYXIgcG9zaWNpw7NuIGRlbCBjdXJzb3JcclxuICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAvLyBQcm9wYWdhciBlbCBjYW1iaW8gYWwgY29udHJvbCBkZWwgZm9ybXVsYXJpb1xyXG4gICAgICBpZiAodGhpcy4jbmdDb250cm9sPy5jb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy4jbmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHtcclxuICAgICAgICAgIGVtaXRFdmVudDogZmFsc2UsXHJcbiAgICAgICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBEaXNwYXJhciBldmVudG8gZGUgaW5wdXQgcGFyYSBhc2VndXJhciBsYSBzaW5jcm9uaXphY2nDs25cclxuICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19