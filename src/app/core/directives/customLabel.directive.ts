import { Directive, ElementRef, OnInit, effect, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[CustomLabel]',
  standalone: true,
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  color = input.required<string>();
  errors = input.required<ValidationErrors>();

  constructor(private el: ElementRef<HTMLElement>) {
    // this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'Hola Capullín';
    this.htmlElement = el;

    effect(() => {
      console.log(this.color(), this.errors());

      this._color = this.color();
      this.setStyle();
      this._errors = this.errors();
      this.setErrorMessage();
    });
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido.';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Mínimo ${current}/${min} caracteres.`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'No tiene formato de correo.';
      return;
    }
  }
}
