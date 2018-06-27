import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewServiceService {
    product = {
    'id': 1260,
    'category_id': 9,
    'price': '0.0'
};
private options = { headers: new HttpHeaders().set('X-APP-Token', 'a~rR-*Zd9t~H8wm@CmPd')
.append('X-User-Token', '-nRLLfMyh1CHTtw6f2Qf')
.append('Content-Type', 'application/json') };


constructor(private http: HttpClient) { }

onClick() {
    const headers = {headers: new HttpHeaders({ 'X-APP-Token': 'a~rR-*Zd9t~H8wm@CmPd',
    'X-User-Token': '-nRLLfMyh1CHTtw6f2Qf',
    'Content-Type': 'application/json'})};
     console.log(headers);
     return this.http.post('https://www.nasnav.com:443//ipa-employee/ver/sion/one/products.json?barcode=883974958450&shop_id=27',
      this.options);
}
}
