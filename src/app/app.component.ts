import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appMenu = [
    {title:'Our Menu', url:'/home',icon:'list'},
    {title:'Reservation', url:'/home',icon:'add-circle-outline'},
    {title:'Our Deals', url:'/home',icon:'notifications'},
    {title:'Locations', url:'/home',icon:'egg'},
    {title:'My Basket', url:'/home',icon:'basket'},
    {title:'Feedback', url:'/home',icon:'checkmark-circle-outline'},
    {title:'Edit Profile', url:'/home',icon:'person-add'}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
