import { CommonModule } from "@angular/common";
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  output,
  signal,
} from "@angular/core";
import { ICategories } from "@models";
import { CategoriesService } from "@services";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "Categories",
  templateUrl: "./categories.html",
  styleUrl: "./categories.scss",
  imports: [CommonModule],
})
export class Categories implements OnInit, OnDestroy {
  private readonly _categoriesService = inject(CategoriesService);
  private readonly _unSubscribe$ = new Subject<void>();
  listCategories = signal<ICategories[]>([]);
  onSelectCategories = output<string>();

  ngOnInit(): void {
    this._handleListCategories();
  }

  ngOnDestroy(): void {
    this._unSubscribe$.next();
    this._unSubscribe$.complete();
  }

  /**
   * Escucha el evento de seleccion
   * @param data:Event
   */
  handleSelectCategorie(data: Event): void {
    const target = data.target as HTMLSelectElement;
    const dataSelect = target.value;
    this._handleEmitSelection(dataSelect);
  }

  /**
   * Obtiene el listado de categorías
   */
  private _handleListCategories(): void {
    const { _categoriesService, _unSubscribe$ } = this;

    _categoriesService
      .getListCategories()
      .pipe(takeUntil(_unSubscribe$))
      .subscribe((response) => this._setDataCategories(response));
  }

  /**
   * Setea los valores de las categorías
   * @param data:ICategories[]
   */
  private _setDataCategories(data: ICategories[]): void {
    this.listCategories.set(data);
  }

  /**
   * Emite la categoría seleccionada
   * @param data:string
   */
  private _handleEmitSelection(data: string): void {
    this.onSelectCategories.emit(data);
  }
}
