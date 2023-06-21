import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule, HttpClientModule), provideAnimations(), provideToastr({
    timeOut: 4000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),]
})
  .catch(err => console.error(err));
