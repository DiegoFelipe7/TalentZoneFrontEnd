import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../services/products.service";
import { ProductAction } from ".";
import { catchError, concatMap, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect {
    constructor(private actions$: Actions, private producService: ProductsService) {

    }

    product$ = createEffect(() => this.actions$.pipe(
        ofType(ProductAction.GETALLPRODUCTS),
        exhaustMap((action) => this.producService.getProducts().pipe(
            map((ele) => ProductAction.GETALLPRODUCTSUCCEUL({ products: ele })),
            catchError(error => of(ProductAction.GETALLPRODUCTFAILED({ products: [] })))
        ))
    ));
    saveProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductAction.SAVEPRODUCT),
            concatMap((action) => this.producService.saveProduct(action.product).pipe(
                map((ele) => ProductAction.SAVEPRODUCTSUCEFULL({ product: ele })),
                catchError(() => of(ProductAction.REMOVEPRODUCTFAILED({ message: { type: "ERROR", message: "Ocurrio un error" } })))

            ))
        );
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductAction.UPDATEPRODUCT),
            concatMap((action) => this.producService.updateProduct(action.product, action.id).pipe(
                map((ele) => ProductAction.UPDATEPRODUCTSUCEFULL({ product: ele })),
                catchError(() => of(ProductAction.UPDATEPRODUCTFAILED({ message: { type: "ERROR", message: "Ocurrio un error" } })))

            ))
        );
    });

    removeProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductAction.REMOVEPRODUCT),
            mergeMap((action) => this.producService.removeProduct(action.id).pipe(
                map((ele) => ProductAction.REMOVEPRODUCTSUCEFULL({ id: action.id })),
                catchError(() => of(ProductAction.REMOVEPRODUCTFAILED({ message: { type: "ERROR", message: "Ocurrio un error" } })))

            ))
        );
    });


}