import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MyService {
    barcode = 'Nareman';
    shop_id = 27;
    constructor(private http: HttpClient) { }

    addrecord(product: any) {
        const httpOptions = {
            headers: new HttpHeaders({'X-APP-Token': 'a~rR-*Zd9t~H8wm@CmPd', 'X-User-Token': '-nRLLfMyh1CHTtw6f2Qf'})
          };

        console.log(JSON.stringify(httpOptions.headers.getAll('X-APP-Token')));
        console.log(httpOptions.headers.get('X-APP-Token'));
        return this.http.post('https://www.nasnav.com:443//ipa-employee/ver/sion/one/products.json?barcode=883974958450&shop_id=27',
        product , httpOptions);
    }
}
