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

  },
  {
    path: 'order-blood',
    loadChildren: () => import('./pages/order-blood/order-blood.module').then( m => m.OrderBloodPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'my-donations',
    loadChildren: () => import('./pages/my-donations/my-donations.module').then( m => m.MyDonationsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path:'notification',
    loadChildren:()=> import('./pages/notifications/notifications.module').then(m=>m.NotificationsPageModule)
  },  {
    path: 'my-requests',
    loadChildren: () => import('./pages/my-requests/my-requests.module').then( m => m.MyRequestsPageModule)
  }





  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
