import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./products/product/product.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const appRoutes: Routes= [
    {path:', component: HomeComponent'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent, children: [
      {path: ':id', component: ProductsComponent},
      {path: ':id/edit', component: EditProductComponent}
    ]},
    {path:'users', component: UsersComponent, children: [
      {path:':name', component: UserComponent}
    ]},
    {path:'**', component: NotfoundComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    

})
export class AppRoutingModule {
   
      
}