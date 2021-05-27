import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {


  public menuItems: any[]=[];

  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/overview', title: 'Overview', icon: 'nc-chart-pie-36', class: '' },
    { path: '/billing', title: 'Billing', icon: 'nc-bulb-63', class: '' },
    { path: '/settings', title: 'Settings', icon: 'nc-settings-gear-65', class: '' },
    { path: '/support', title: 'Support', icon: 'nc-bookmark-2', class: '' },

];
