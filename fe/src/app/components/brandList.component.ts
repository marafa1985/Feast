import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/business.service';

@Component({
  templateUrl: 'brandList.component.html'
})
export class BrandListComponent implements OnInit {

  public fullPath: string;
  public brandList: any[];
  public errorMessage: string;
  constructor(private modulemenuService: MenuService) {
    this.fullPath = "app/images/brand/"
  } 

  getmainModule(postedbrandlist: any[]): void {
    this.brandList = postedbrandlist;
    console.log(this.brandList);
  }

  ngOnInit(): void {
    this.modulemenuService.getBrandList().subscribe(
      postedbrandlist => this.getmainModule(postedbrandlist),
      error => this.errorMessage = <any>error
    );
  }
}