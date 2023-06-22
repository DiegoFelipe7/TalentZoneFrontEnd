import { importProvidersFrom, isDevMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { APP_REDUCER } from './app/app.state';
import { ProductEffect } from './app/module/products/store/product.effect';
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule, HttpClientModule), provideAnimations(), provideToastr({
    timeOut: 4000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }), provideStore(APP_REDUCER), provideEffects([ProductEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
})
  .catch(err => console.error(err));
