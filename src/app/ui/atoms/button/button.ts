import { Component, input } from "@angular/core";
import { VariantColor } from "@enums";

@Component({
  selector: "ButtonStatus",
  templateUrl: "./button.html",
  styleUrl: "./button.scss",
})
export class Button {
  variant = input<VariantColor>();
}
