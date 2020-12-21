import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CCategoryComponent } from './pages/categories/components/c-category/c-category.component';
import { RCategoryComponent } from './pages/reports/components/r-category/r-category.component';
import { ReporteComponent } from './pages/reports/components/reporte/reporte.component';
import { InformacionComponent } from './pages/reports/components/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReportsComponent,
    CategoriesComponent,
    NavbarComponent,
    HeaderComponent,
    CCategoryComponent,
    RCategoryComponent,
    ReporteComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
