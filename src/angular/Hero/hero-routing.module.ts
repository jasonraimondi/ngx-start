import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'heroes/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class HeroRoutingModule { }
