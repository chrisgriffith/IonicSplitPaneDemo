import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { View1Page } from '../view1/view1';

@Component({
 selector: 'page-main',
 templateUrl: 'main.html'
})
export class MainPage {

constructor(public navCtrl: NavController, public navParams: NavParams) { }

ionViewDidLoad() {
 console.log('ionViewDidLoad MainPage');
 }

goNewView() {
 this.navCtrl.push(View1Page);
 }
}