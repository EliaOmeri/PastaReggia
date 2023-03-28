import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  images: any[] | undefined;
  url = "http://localhost:3000/images-al";




  getImages() {
    return this.http.get(this.url) as Observable<any>;
  }

  getImagesByCategory(category: string) {
    return this.http.get(this.url + '/?category=' + category) as Observable<any>
  }

  getBySubcategory(subcategory: string) {
    return this.http.get(this.url + '/?subcategory=' + subcategory) as Observable<any>
  }
  getImagesBySubcategory2Al(subcategory: string) {
    return this.http.get(this.url + '/?subcategory2=' + subcategory) as Observable<any>
  }



}