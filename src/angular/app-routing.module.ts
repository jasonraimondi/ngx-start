import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { HeroModule } from './Hero/hero.module';
import { NotFoundComponent } from './NotFound/not-found.component';

export const appRoutes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => HeroModule
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})

export class AppRoutingModule {
}
