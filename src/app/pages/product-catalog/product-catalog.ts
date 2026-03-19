import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { IProduct, IProductParams } from "@models";
import { ProductService } from "@services";
import { ProductTable, Toollbar } from "@ui";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "ProductCatalog",
  templateUrl: "./product-catalog.html",
  styleUrl: "./product-catalog.html",
  imports: [Toollbar, ProductTable],
})
export class ProductCatalog implements OnInit, OnDestroy {
  private readonly _unSubscribe$ = new Subject<void>();
  private readonly _productService = inject(ProductService);
  private readonly DEFAULT_LIMIT = 30;
  private readonly DEFAULT_SKIP = 0;
  dataProducts = signal<IProduct[]>([]);
  totalsProduct = signal(0);
  limitProduct = signal(this.DEFAULT_LIMIT);
  skipProduct = signal(this.DEFAULT_SKIP);
  productParams = signal<IProductParams>({
    limit: 10,
    order: "asc",
    search: "",
    skip: 0,
    sortBy: "",
  });

  ngOnInit(): void {
    this._getListProducts();
  }

  ngOnDestroy(): void {}

  handleSearch(value: string | undefined): void {
    this.productParams.update((param) => {
      param.search = value;

      return param;
    });

    this._getListProducts();
  }

  /**
   * Actualiza el tamaño y numero de pagina
   * @param  page:IProductParams
   */
  handlePaginate(page: IProductParams): void {
    this.productParams.update((param) => {
      ((param.skip = page.skip), (param.limit = page.limit));

      return param;
    });
    this._getListProducts();
  }

  private _getListProducts(): void {
    const { _productService, _unSubscribe$ } = this;

    _productService
      .getProducts(this.productParams())
      .pipe(takeUntil(_unSubscribe$))
      .subscribe((response) => {
        this._setDataProduct(response.products);
        this._setTotals(response.total);
      });
  }

  private _setDataProduct(data: IProduct[]): void {
    this.dataProducts.set(data);
  }

  private _setTotals(totals: number): void {
    this.totalsProduct.set(totals);
  }
}
