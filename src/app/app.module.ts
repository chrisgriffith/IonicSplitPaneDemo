import { NgModule, ErrorHandler, Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MainPage } from '../pages/main/main';
import { SideNavPage } from '../pages/side-nav/side-nav';
import { SideNav2Page } from '../pages/side-nav2/side-nav2';
import { View1Page } from '../pages/view1/view1';

@Component({
 templateUrl: 'app.html'
})
export class myApp {
 root = MainPage;
 sideRoot = SideNavPage;
}

@NgModule({
 declarations: [
 myApp,
 MainPage,
 SideNavPage,
 SideNav2Page,
 View1Page
 ],
 imports: [
 IonicModule.forRoot(myApp)
 ],
 bootstrap: [IonicApp],
 entryComponents: [
 myApp,
 MainPage,
 SideNavPage,
 SideNav2Page,
 View1Page
 ],
 providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}