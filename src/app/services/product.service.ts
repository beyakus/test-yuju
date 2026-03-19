import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@env";
import { ICategories, IProduct, IProductResponse } from "@models";
import { Observable } from "rxjs";
import { IProductParams } from "../models/product-params.interface";
import { convertParamsToQueryParams } from "../utils/query-params";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly _http = inject(HttpClient);
  private env = environment;

  /**
   * Obtiene lista de productos
   * @returns Observable<IProduct>
   */
  getProducts(body: IProductParams): Observable<IProductResponse> {
    const { env, _http } = this;
    const urlProduct = `${env.url}/search`;
    const queryParams = convertParamsToQueryParams(body);

    return _http.get<IProductResponse>(`${urlProduct}?${queryParams}`);
  }
}
