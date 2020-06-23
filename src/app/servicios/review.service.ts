import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Review } from '../entidades/review';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});


  constructor(private http:HttpClient) { }

  getReviews():Observable<any>{
    console.log("llamando a rest:"+this.urlBase+'/reviews');
    return this.http.get(this.urlBase+'/reviews').pipe(
      map(response =>response as Review[])
    );
  }

  crearReview(review:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/registrarReview', review, {headers:this.httpHeaders});
  }
}
