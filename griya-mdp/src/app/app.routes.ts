import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Component } from '@angular/core';
import { Profil } from './profil/profil';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';

export const routes: Routes = [
  // mengatur halaman utama aplikasi
  {
    path: '',
    component: HomeComponent,
    //title : "Home Page"
  },
  {
    path: 'profile',
    component: Profil,
    //title : " Profil Page"
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
