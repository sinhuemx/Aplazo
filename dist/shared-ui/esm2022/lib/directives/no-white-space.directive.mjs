/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export class AplazoNoWhiteSpaceDirective {
    #elementRef = inject(ElementRef);
    #ngControl = inject(NgControl, {
        self: true,
        optional: true,
    });
    sanitizeValue() {
        const input = this.#elementRef.nativeElement;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        // Remover espacios en blanco
        const newValue = input.value.replace(/\s/g, '');
        // Solo actualizar si el valor ha cambiado
        if (newValue !== input.value) {
            // Actualizar valor en el input
            input.value = newValue;
            // Restaurar posición del cursor, ajustando por los espacios removidos
            const offset = input.value.length - newValue.length;
            input.setSelectionRange(Math.max(0, start - offset), Math.max(0, end - offset));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoNoWhiteSpaceDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoNoWhiteSpaceDirective, isStandalone: true, selector: "input[aplazoNoWhiteSpace]", host: { listeners: { "input": "sanitizeValue()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoNoWhiteSpaceDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[aplazoNoWhiteSpace]',
                    host: {
                        '(input)': 'sanitizeValue()',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8td2hpdGUtc3BhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkLXVpL3NyYy9saWIvZGlyZWN0aXZlcy9uby13aGl0ZS1zcGFjZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUzNDLE1BQU0sT0FBTywyQkFBMkI7SUFDN0IsV0FBVyxHQUFpQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0QsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUU7UUFDdEMsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUMsQ0FBQztJQUVILGFBQWE7UUFDWCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ25DLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFFL0IsNkJBQTZCO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVoRCwwQ0FBMEM7UUFDMUMsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLCtCQUErQjtZQUMvQixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUV2QixzRUFBc0U7WUFDdEUsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwRCxLQUFLLENBQUMsaUJBQWlCLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQU0sR0FBRyxNQUFNLENBQUMsRUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBSSxHQUFHLE1BQU0sQ0FBQyxDQUMzQixDQUFDO1lBRUYsK0NBQStDO1lBQy9DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtvQkFDekMsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLHFCQUFxQixFQUFFLEtBQUs7aUJBQzdCLENBQUMsQ0FBQztnQkFFSCwyREFBMkQ7Z0JBQzNELEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7K0dBdENVLDJCQUEyQjttR0FBM0IsMkJBQTJCOzs0RkFBM0IsMkJBQTJCO2tCQVB2QyxTQUFTO21CQUFDO29CQUNULFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLGlCQUFpQjtxQkFDN0I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eSAqL1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHNlbGVjdG9yOiAnaW5wdXRbYXBsYXpvTm9XaGl0ZVNwYWNlXScsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhpbnB1dCknOiAnc2FuaXRpemVWYWx1ZSgpJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvTm9XaGl0ZVNwYWNlRGlyZWN0aXZlIHtcclxuICByZWFkb25seSAjZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PiA9IGluamVjdChFbGVtZW50UmVmKTtcclxuICByZWFkb25seSAjbmdDb250cm9sID0gaW5qZWN0KE5nQ29udHJvbCwge1xyXG4gICAgc2VsZjogdHJ1ZSxcclxuICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBzYW5pdGl6ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLiNlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBzdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3QgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xyXG5cclxuICAgIC8vIFJlbW92ZXIgZXNwYWNpb3MgZW4gYmxhbmNvXHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcblxyXG4gICAgLy8gU29sbyBhY3R1YWxpemFyIHNpIGVsIHZhbG9yIGhhIGNhbWJpYWRvXHJcbiAgICBpZiAobmV3VmFsdWUgIT09IGlucHV0LnZhbHVlKSB7XHJcbiAgICAgIC8vIEFjdHVhbGl6YXIgdmFsb3IgZW4gZWwgaW5wdXRcclxuICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvciwgYWp1c3RhbmRvIHBvciBsb3MgZXNwYWNpb3MgcmVtb3ZpZG9zXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IGlucHV0LnZhbHVlLmxlbmd0aCAtIG5ld1ZhbHVlLmxlbmd0aDtcclxuICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoXHJcbiAgICAgICAgTWF0aC5tYXgoMCwgc3RhcnQhIC0gb2Zmc2V0KSxcclxuICAgICAgICBNYXRoLm1heCgwLCBlbmQhIC0gb2Zmc2V0KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gUHJvcGFnYXIgZWwgY2FtYmlvIGFsIGNvbnRyb2wgZGVsIGZvcm11bGFyaW9cclxuICAgICAgaWYgKHRoaXMuI25nQ29udHJvbD8uY29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuI25nQ29udHJvbC5jb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7XHJcbiAgICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGFyYXIgZXZlbnRvIGRlIGlucHV0IHBhcmEgYXNlZ3VyYXIgbGEgc2luY3Jvbml6YWNpw7NuXHJcbiAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==