import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeModule } from '#features/home/home.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'news', loadChildren: './features/news/news.module#NewsModule' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
