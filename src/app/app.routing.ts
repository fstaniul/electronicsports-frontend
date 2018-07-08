import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeModule } from '#features/home/home.module';
import { JustRouterComponent } from '#shared/shared/just-router/just-router.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: JustRouterComponent,
    children: [{ path: 'home', loadChildren: () => HomeModule }, { path: 'news', loadChildren: './features/news/news.module#NewsModule' }],
  },
  {
    path: 'sign',
    loadChildren: './features/sign-in-up/sign-in-up.module#SignInUpModule',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
