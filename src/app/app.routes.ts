import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/product-catalog/product-catalog").then(
        (m) => m.ProductCatalog,
      ),
  },
];
