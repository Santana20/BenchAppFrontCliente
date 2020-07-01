import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../entidades/review';
import { ReviewService } from '../servicios/review.service';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/servicio-auth/auth.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
   review:Observable<Review>;
   reviewMicro:Observable<Review>
   reviews:Review= new Review();

   
  constructor(private authService : AuthService,private reviewService:ReviewService, private router:Router) { }

  ngOnInit(): void {
    this.getListadoReviewMicroservice()
    this.reloadData()
  }

  reloadData()
  {
    console.log("cargando listar!");
    this.reviewService.getReviews().subscribe(review=>this.review=review);
  }

  save(){
    console.log(this.review);
    this.reviewService.crearReview(this.reviews).subscribe(
      data=>this.router.navigate([])
    );
  }

  getListadoReviewMicroservice(){
    console.log('cargando!');
    this.reviewService.getReviewMicroservices().subscribe(reviewMicro=>this.reviewMicro=reviewMicro);
  }

  isAuthenticated() : boolean
   {
     return this.authService.isAuthenticated();
   }
}
