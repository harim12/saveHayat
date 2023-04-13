import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingagainPage } from './testingagain.page';

const routes: Routes = [
  {
    path: '',
    component: TestingagainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingagainPageRoutingModule {}
