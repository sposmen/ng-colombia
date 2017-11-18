import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CitiSearchComponent} from './citi-search/citi-search.component';
import {SearchComponent} from './search/search.component';
import {FlightComponent} from './flight/flight.component';
import {PromotionComponent} from './promotion/promotion.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBE4zxQ6uHlINXqwU03Xk51aQgFPVKS_SY',
  authDomain: 'angularairline.firebaseapp.com',
  databaseURL: 'https://angularairline.firebaseio.com',
  projectId: 'angularairline',
  storageBucket: '',
  messagingSenderId: '241089522066'
};

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'flight/:from/:to/:passenger', component: FlightComponent},
  {path: 'promociones', component: PromotionComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    CitiSearchComponent,
    SearchComponent,
    FlightComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
