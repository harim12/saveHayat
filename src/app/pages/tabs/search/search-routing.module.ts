import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: 'step-one',
        children: [
          
          {
            path: '',
            loadChildren: () =>
              import('./step-one/step-one.module').then(m => m.StepOnePageModule)
          }
        ]
      },
      
      {
        path: 'step-two',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./step-two/step-two.module').then(m => m.StepTwoPageModule)
          }
        ]
      },
      
      {
        path: 'step-three',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./step-three/step-three.module').then(m => m.StepThreePageModule)
          }
        ]
      },
      {
        path: 'step-four',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./step-four/step-four.module').then(m => m.StepFourPageModule)
          }
        ]
      },
      {
        path: 'step-five',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./step-five/step-five.module').then(m => m.StepFivePageModule)
          }
        ]
      },
      {
        path: 'step-six',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./step-six/step-six.module').then(m => m.StepSixPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'step-one',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/step-one',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
