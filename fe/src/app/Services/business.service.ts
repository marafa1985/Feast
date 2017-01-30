import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
import { MenuItem,Brand } from './business';


let employee: Object = {
    ID: 1,
    FirstName: "John",
    LastName: "Heart",
    CompanyName: "Super Mart of the West",
    Position: "CEO",
    OfficeNo: "901",
    BirthDate: new Date(1964, 2, 16),
    HireDate: new Date(1995, 0, 15),
    Address: "351 S Hill St.",
    City: "Los Angeles",
    State: "CA",
    Zipcode: "90013",
    Phone: "+1(213) 555-9392",
    Email: "jheart@dx-email.com",
    Skype: "jheart_DX_skype",
    Title:'ff'
};

@Injectable()
export class MenuService {
  private serviceUrl = 'http://localhost:3000/api/';
  constructor(private http: Http) { }


  getmenuitems(): Observable<any[]> {
    return this.http.get(this.serviceUrl + 'getappmenu')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBrandList(): Observable<any[]> {
    return this.http.get(this.serviceUrl + 'brandList')
      .map(this.extractData)
      .catch(this.handleError);
  }
  
getBrandByID(brandID): Observable<any[]> {
    return this.http.get(this.serviceUrl + 'brandbyID/' + brandID)
      .map(this.extractData)
      .catch(this.handleError);
  }

//Parse Reponse of each request to json
private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}