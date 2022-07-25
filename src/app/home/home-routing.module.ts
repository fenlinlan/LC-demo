import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'money',
        loadChildren: () => import('./money/money.module').then(m => m.MoneyPageModule)
      },
      {
        path: 'story',
        loadChildren: () => import('./story/story.module').then(m => m.StoryPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./booking/booking.module').then(m => m.BookingPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.SchedulePageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
