import { Component, OnInit } from '@angular/core';
import { RouterConfigService } from 'src/app/services/router-config.service';
import { RouteInfo } from 'src/app/utilities/interfaces/route-info.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  constructor(private routerConfig: RouterConfigService) { }

  ngOnInit(): void {
    this.menuItems = this.routerConfig.getSidebarRoutes();
    console.log(this.menuItems)
  }

}
