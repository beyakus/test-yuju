import { Component, input, OnDestroy, OnInit, output } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { debounce, debounceTime, Subject, takeUntil } from "rxjs";

@Component({
  selector: "YujuInput",
  templateUrl: "./input.html",
  styleUrl: "./input.scss",
  imports: [MatInputModule, ReactiveFormsModule],
})
export class YujuInput implements OnInit, OnDestroy {
  placeholder = input<string>();
  searchControl = new FormControl();
  onSearchValue = output<string | undefined>();
  private readonly _unSubcribe$ = new Subject<void>();

  ngOnInit(): void {
    this._listenChangeControl();
  }

  ngOnDestroy(): void {
    this._unSubcribe$.next();
    this._unSubcribe$.complete();
  }

  /**
   * Escucha los cambios del input cada 400ms
   */
  private _listenChangeControl(): void {
    const { _unSubcribe$, searchControl } = this;

    searchControl.valueChanges
      .pipe(debounceTime(400), takeUntil(_unSubcribe$))
      .subscribe((data) => this._handleEmitValue(data));
  }

  /**
   * Emite el valor de busqueda
   * @param data:string|undefined
   */
  private _handleEmitValue(data: string | undefined): void {
    this.onSearchValue.emit(data);
  }
}
