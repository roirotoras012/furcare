import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'home/about',
    loadChildren: () => import('./home/about/about.module').then( m => m.AboutPageModule)
  },

  {
    path: 'home/services',
    loadChildren: () => import('./home/services/services.module').then( m => m.ServicesPageModule)
  },

  {
    path: 'home/contact',
    loadChildren: () => import('./home/contact/contact.module').then( m => m.ContactPageModule)
  },

  {
    path: 'home/clients',
    loadChildren: () => import('./home/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  }
















];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
