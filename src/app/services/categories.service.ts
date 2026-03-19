import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@env";
import { ICategories } from "@models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  private readonly _http = inject(HttpClient);
  private env = environment;

  /**
   * Obtiene la lista de categorias
   * @returns Observable<ICategories[]>
   */
  getListCategories(): Observable<ICategories[]> {
    const { env, _http } = this;
    const urlEndpoint = `${env.url}/${env.endpoints.categories.listCategories}`;

    return _http.get<ICategories[]>(urlEndpoint);
  }
}
