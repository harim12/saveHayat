import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home-page',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/home-page/home-page.module').then(m => m.HomePagePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'donate',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/donate/donate.module').then(m => m.DonatePageModule)
          }
        ]
      },
      {
        path: 'find-donors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/find-donors/find-donors.module').then(m => m.FindDonorsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home-page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
