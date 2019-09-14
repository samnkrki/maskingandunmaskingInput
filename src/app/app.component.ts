import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "calendar-nepali";
  public myModel: string;
  public modelWithValue: string;
  public formControlInput: FormControl = new FormControl();
  public mask: Array<string | RegExp>;
  formGroup: FormGroup;

  priceMask = Object.freeze({
    mask: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  });

  constructor(public formBuilder: FormBuilder) {
    this.mask = [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
    this.myModel = "123456789";
    this.modelWithValue = "5554441234";
    this.formControlInput.setValue("5555551234");
  }

  unmask(val) {
    return val.replace(/\D+/g, "");
  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      maskedInput: "",
    });
  }
}
