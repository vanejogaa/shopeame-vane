import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListaProductosComponent } from './products/lista-productos/lista-productos.component';
import { ProductoComponent } from './products/producto/producto.component';
import { FormularioComponent } from './gestion/formulario/formulario.component';
import { SimuladorComponent } from './gestion/simulador/simulador.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListaProductosComponent,
    ProductoComponent,
    FormularioComponent,
    SimuladorComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    RegisterComponent,

  ],

  exports: [
    HomeComponent,
    ListaProductosComponent,
    ProductoComponent,
    FormularioComponent,
    SimuladorComponent,

  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PagesModule { }
