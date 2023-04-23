import { AuthGuard } from './guards/auth.guard';
import { ProductoComponent } from './pages/products/producto/producto.component';
import { FormularioComponent } from './pages/gestion/formulario/formulario.component';
import { SimuladorComponent } from './pages/gestion/simulador/simulador.component';
import { ListaProductosComponent } from './pages/products/lista-productos/lista-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';


const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"productos", component: ListaProductosComponent},
  { path:"gestion", component: FormularioComponent, canActivate: [AuthGuard]},
  { path:"gestion", component: SimuladorComponent, canActivate: [AuthGuard]},
  { path: "productos/:id", component: ProductoComponent},
  { path:"profile", component: ProfileComponent, canActivate: [AuthGuard]},
  { path:"login", component: LoginComponent, canActivate: [AuthGuard]},
  { path:"register", component: RegisterComponent, canActivate: [AuthGuard]},  
  { path:"logout", component: LogoutComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }