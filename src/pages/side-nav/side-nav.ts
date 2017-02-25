import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SideNav2Page } from '../side-nav2/side-nav2';

@Component({
 selector: 'page-side-nav',
 templateUrl: 'side-nav.html'
})

export class SideNavPage {
 pages: Array<{ title: string, component: any }>;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.pages = [
{ title: 'Action Sheets', component: SideNav2Page },
{ title: 'Alerts', component: SideNav2Page },
{ title: 'Badges', component: SideNav2Page },
{ title: 'Buttons', component: SideNav2Page },
{ title: 'Cards', component: SideNav2Page },
{ title: 'Checkbox', component: SideNav2Page },
{ title: 'DateTime', component: SideNav2Page },
{ title: 'FABs', component: SideNav2Page },
{ title: 'Gestures', component: SideNav2Page },
{ title: 'Grid', component: SideNav2Page },
{ title: 'Icons', component: SideNav2Page },
{ title: 'Inputs', component: SideNav2Page },
{ title: 'Lists', component: SideNav2Page },
{ title: 'Loading', component: SideNav2Page },
{ title: 'Menus', component: SideNav2Page },
{ title: 'Modals', component: SideNav2Page },
{ title: 'Navigation', component: SideNav2Page },
{ title: 'Popover', component: SideNav2Page },
{ title: 'Radio', component: SideNav2Page },
{ title: 'Range', component: SideNav2Page },
{ title: 'Searchbar', component: SideNav2Page },
{ title: 'Segment', component: SideNav2Page },
{ title: 'Select', component: SideNav2Page },
{ title: 'Slides', component: SideNav2Page },
{ title: 'Tabs', component: SideNav2Page },
{ title: 'Toast', component: SideNav2Page },
{ title: 'Toggle', component: SideNav2Page },
{ title: 'Toolbar', component: SideNav2Page }
];

}

 displaySubNav(thePage:any) {
  this.navCtrl.push(thePage.component);
 }
}