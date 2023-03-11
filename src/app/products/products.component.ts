import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  lang = sessionStorage.getItem('lang');
  images: any[] = [];
  filteredImages: any[] | undefined;
  query: string = '';
  selectedCategory = '';

  translation: any;

  constructor(
    private service: ImagesService,
    private http: HttpClient
  ) { }

  getTranslation(lang: string) {
    return this.http.get(`assets/i18n/${lang}.json`);
  }
  getImages() {
    this.service.getImages().subscribe((image: any[]) => {
      this.filteredImages = image;
    });

  }

  getImagesIt() {
    this.service.getImagesIt().subscribe((image: any[]) => {
      this.filteredImages = image;
    })
  }
  getImagesByCategory(category: string) {
    this.service.getImagesByCategory(category).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }
  getImagesItByCategory(category: string) {
    this.service.getImagesItByCategory(category).subscribe((image: any[]) => {
      this.filteredImages = image;
    });


  }
  getImagesBySubCategory2Al(subcategory: string) {
    this.service.getImagesBySubcategory2Al(subcategory).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }
  getImagesBySubCategory2It(subcategory: string) {
    this.service.getImagesBySubcategory2It(subcategory).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }

  getImagesBySubcategory2Lang(albanianCategory: string, italianCategory: string) {
    if (this.lang == 'it') {
      this.getImagesBySubCategory2It(italianCategory)
    }
    else {
      this.getImagesBySubCategory2Al(albanianCategory)
    }
  }

  getImagesByCategoryLang(albanianCategory: string, italianCategory: string) {
    if (this.lang == 'it') {
      this.getImagesItByCategory(italianCategory)
    }
    else {
      this.getImagesByCategory(albanianCategory)
    }
  }
  getImagesBySubcategoryLang(albanianCategory: string, italianCategory: string) {
    if (this.lang == 'it') {
      this.getImagesBySubcategoryIt(italianCategory)
    }
    else {
      this.getImagesBySubcategory(albanianCategory)
    }
  }
  getAllImages() {
    if (this.lang == 'it') {
      this.getImagesIt()
    } else {
      this.getImages()
    }
  }
  getImagesBySubcategory(subcategory: string) {
    this.service.getBySubcategory(subcategory).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }
  getImagesBySubcategoryIt(subcategory: string) {
    this.service.getBySubcategoryIt(subcategory).subscribe((image: any[]) => {
      this.filteredImages = image;
    });
  }

  searchImages() {
    this.filteredImages = this.images.filter(image =>
      image.title.toLowerCase().includes(this.query.toLowerCase()) ||
      image.description.toLowerCase().includes(this.query.toLowerCase())
    );
    console.log(this.query)
  }
  ngOnInit() {
    const lang = sessionStorage.getItem('lang') || 'al';
    this.getTranslation(lang).subscribe((data) => {
      this.translation = data;
      this.selectedCategory = this.translation.selectCategory;
    });
    this.getAllImages()
  }
}