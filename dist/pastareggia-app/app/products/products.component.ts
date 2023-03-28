import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  images: any[] = [];
  filteredImages: any[] | undefined;
  query: string = '';
  selectedCategory = '';



  constructor(
    private service: ImagesService,
    private http: HttpClient
  ) { }


  getImages() {
    this.service.getImages().subscribe((image: any[]) => {
      this.filteredImages = image;
      this.images = image;
    });
  }

  getImagesByCategory(category: string) {
    this.service.getImagesByCategory(category).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }

  getImagesBySubCategory2Al(subcategory: string) {
    this.service.getImagesBySubcategory2Al(subcategory).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }


  getImagesBySubcategory2Lang(albanianCategory: string) {
  
      this.getImagesBySubCategory2Al(albanianCategory)
    
  }


  getImagesByCategoryLang(albanianCategory: string) {
    
      this.getImagesByCategory(albanianCategory)
    
  }


  getImagesBySubcategoryLang(albanianCategory: string) {
  
      this.getImagesBySubcategory(albanianCategory)
    
  }
  getAllImages() {
 
      this.service.getImages().subscribe((image: any[]) => {
        this.filteredImages = image;
        this.images = image;
      });
    
  }
  getImagesBySubcategory(subcategory: string) {
    this.service.getBySubcategory(subcategory).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }


  searchImages() {
    if (this.query === '') {
      this.getAllImages();
    } else {
      this.filteredImages = this.images.filter(image =>
        image.title.toLowerCase().includes(this.query.toLowerCase()) ||
        image.description.toLowerCase().includes(this.query.toLowerCase())
      );
      console.log(this.query);
    }
  }
  
  ngOnInit() {
    this.getAllImages()
  }
}