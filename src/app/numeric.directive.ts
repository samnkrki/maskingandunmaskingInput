import { Directive, ElementRef, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[appNumeric]",
})
export class NumericDirective implements OnInit {
  constructor(private elementRef: ElementRef, private model: NgControl) {}

  ngOnInit(): void {
    console.log(this.model);
    this.model.control.valueChanges.subscribe(() => {
      const newValue = this.elementRef.nativeElement.value.replace(/\D/g, "");
      console.log(newValue);
      this.model.control.setValue(newValue, {
        emitEvent: false,
        emitModelToViewChange: false,
        emitViewToModelChange: false,
      });
    });
  }
}
