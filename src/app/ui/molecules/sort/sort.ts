import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { IProduct } from "@models";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "Sort",
  templateUrl: "./sort.html",
  styleUrl: "./sort.scss",
  imports: [],
})
export class Sort implements OnInit, OnDestroy {
  dataSort = signal<IProduct[]>([]);
  private readonly _unSubscribe$ = new Subject<void>();
  //private readonly _sortService = inject(SortService);
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._unSubscribe$.next();
    this._unSubscribe$.complete();
  }

  handleSelectSort(event: Event): void {}
}
