import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroComponent }  from './hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';
import {DashboardComponent} from "./dashboard.component";
import {HttpComponent} from "./http.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroRoutingModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    HttpComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class HeroModule { }
