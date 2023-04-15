import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { TabsPageModule } from './pages/tabs/tabs.module';


const redirectUnauthorizedToLogin = ()=>redirectLoggedInTo(['']);
const redirectLoggedInToHome = ()=>redirectLoggedInTo(['home'])


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/first-page/first-page.module').then( m => m.FirstPagePageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
 
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'first-page',
    loadChildren: () => import('./pages/first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path : 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m =>m.TabsPageModule )

  }



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
