import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryPage } from './story.page';

const routes: Routes = [
  {
    path: '',
    component: StoryPage
  },  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'traffic',
    loadChildren: () => import('./traffic/traffic.module').then( m => m.TrafficPageModule)
  },
  {
    path: 'gods',
    loadChildren: () => import('./gods/gods.module').then( m => m.GodsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryPageRoutingModule {}
