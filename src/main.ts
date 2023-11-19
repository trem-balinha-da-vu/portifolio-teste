import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { TelaInicialComponent } from './app/tela-inicial/tela-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {  path: '', component: TelaInicialComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    TabMenuModule

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
