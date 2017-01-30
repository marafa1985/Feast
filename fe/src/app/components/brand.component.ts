import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../Services/business.service';
import { Brand, Employee } from '../Services/business';

@Component({
    templateUrl: 'brand.component.html',
    styleUrls: ['brand.component.css'],
})


export class BrandComponent implements OnInit {
    formItems: any[];
    brandID: number;
    public brand: any[];
    public templeteform:string;
    public errorMessage: string;
    public brandname: string;
    constructor(private service: MenuService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.brandID = params['brandid'];
        });

    }

    getmainModule(postedbrandlist: any[]): void {
        this.brand = postedbrandlist[0];
        this.brandname = this.brand["BrandName"];
        this.formItems = [
            {
                itemType: 'group',
                caption: this.brandname,
                items: [{
                    itemType: 'tabbed',
                    tabPanelOptions: {
                        deferRendering: false
                    },
                    tabs: [{
                        title: 'Brand Information',
                        items: ['BrandName','HotLine']
                    }, {
                        title: 'Skype',
                        items: ['Skype']
                    }, {
                        title: 'Email',
                        items: ['Email']
                    }
                    ]
                }]
            }];

    }

    ngOnInit(): void {
        this.service.getBrandByID(this.brandID).subscribe(
            postedbrandlist => this.getmainModule(postedbrandlist),
            error => this.errorMessage = <any>error
        );
    }
}
