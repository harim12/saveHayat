import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingagainaaignPage } from './testingagainaaign.page';

const routes: Routes = [
  {
    path: '',
    component: TestingagainaaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingagainaaignPageRoutingModule {}
