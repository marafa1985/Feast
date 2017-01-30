import { Component, OnInit } from '@angular/core';

import { MenuService } from '../Services/business.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  menuItem: any[];
  mainmodule: string[];
  newmwnu;
  errorMessage: string;
  constructor(private modulemenuService: MenuService) { }

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  getmainModule(menu: any[]): void {
    this.newmwnu = menu;
     //console.log(this.newmwnu);
  }
  ngOnInit(): void {
    this.modulemenuService.getmenuitems().subscribe(
      menu => this.getmainModule(menu),
      error => this.errorMessage = <any>error
    );

  }
}
