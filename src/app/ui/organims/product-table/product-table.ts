import { Component, input, output, signal } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { IProduct, IProductParams } from "@models";
import { CommonModule } from "@angular/common";
import { Button } from "../../atoms/button/button";
import { StatusProduct, VariantColor } from "@enums";

@Component({
  selector: "ProductTable",
  templateUrl: "./product-table.html",
  styleUrl: "./product-table.scss",
  imports: [MatTableModule, MatPaginatorModule, CommonModule, Button],
})
export class ProductTable {
  private DEFAULT_PAGE_SIZE = 10;
  private _configPaginate = signal<IProductParams>({
    skip: 0,
    limit: 0,
    order: "",
  });

  dataTable = input.required<IProduct[]>();
  totals = input.required<number>();
  onChangeSizePage = output<IProductParams>();
  pageSize = signal(this.DEFAULT_PAGE_SIZE);
  displayedColumns: string[] = [
    "thumbnail",
    "title",
    "sku",
    "brand",
    "category",
    "price",
    "discountPercentage",
    "stock",
    "status",
  ];

  variant = VariantColor;
  status = StatusProduct;
  handlePage(page: PageEvent): void {
    const FACTOR = 10;
    this._configPaginate.update((param) => {
      param.skip = page.pageIndex * FACTOR;
      param.limit = page.pageSize;

      return param;
    });
    this.onChangeSizePage.emit(this._configPaginate());
  }
}
