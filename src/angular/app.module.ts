import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './Hero/hero.module';
import { NotFoundComponent } from './NotFound/not-found.component';

import * as config from '../../config/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule,
    HeroModule,
    AppRoutingModule, // must be last @see https://angular.io/guide/router#module-import-order-matters
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  // Diagnostic only: inspect router configuration

  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
