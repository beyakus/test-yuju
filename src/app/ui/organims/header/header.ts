import { Component, output } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { YujuInput } from "../../atoms/input/input";
import { Categories } from "../../molecules/categories/categories";
import { Sort } from "../../molecules/sort/sort";

@Component({
  selector: "Toolbar",
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
  imports: [MatToolbarModule, YujuInput, Categories, Sort],
})
export class Toollbar {
  onSearch = output<string | undefined>();
  onSelectCategorie = output<string>();
}
