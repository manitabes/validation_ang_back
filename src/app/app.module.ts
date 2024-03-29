import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CardComponent } from './component/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './component/alert/alert.component';
import { CompteComponent } from './page/compte/compte.component';
import { TestComponent } from './test/test/test.component';
import { ProfilComponent } from './page/profil/profil.component';
 import { Page404Component } from './page/page404/page404.component';
import { CategoriesMenuComponent } from './component/categories-menu/categories-menu.component';
 import { RechercheComponent } from './component/recherche/recherche.component';
 import { MessagesComponent } from './page/messages/messages.component';
 import { BienvenueComponent } from './page/accueil/bienvenue/bienvenue.component';
 import { SuggestionCardComponent } from './component/suggestion-card/suggestion-card.component';
import { CommentaireComponent } from './component/commentaire/commentaire.component';
import {AnnonceComponent} from './page/annonce/annonce.component';
import {CreerAnnonceComponent} from './page/creer-annonce/creer-annonce.component';
import {CategorieComponent} from './page/categorie/categorie.component';
import {AbonneComponent} from './page/abonnes/abonne.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    CardComponent,
    AccueilComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    CompteComponent,
    TestComponent,
    ProfilComponent,
     Page404Component,
    CategoriesMenuComponent,
     RechercheComponent,
    MessagesComponent,
     BienvenueComponent,
     SuggestionCardComponent,
    CommentaireComponent,
    AnnonceComponent,
    CreerAnnonceComponent,
    CategorieComponent,
    AbonneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
