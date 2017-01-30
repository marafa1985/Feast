import { Injectable } from '@angular/core';

export class MenuItem {
  constructor(
    public name: string, 
    public link: string,
    public sub: MenuItem) { };
}

export class Brand {
  constructor(
    public BrandID: number, 
    public LogoUrl: string,
    public HotLine:string,
    public email:string,
    public Enabled:boolean
    ) { };
}

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    CompanyName: string;
    Position: string;
    OfficeNo: string;
    BirthDate: Date;
    HireDate: Date;
    Address: string;
    City: string;
    State: string;
    Zipcode: string;
    Phone: string;
    Email: string;
    Skype: string;
}

