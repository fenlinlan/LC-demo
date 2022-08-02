import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodsPage } from './gods.page';

const routes: Routes = [
  {
    path: '',
    component: GodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodsPageRoutingModule {}
