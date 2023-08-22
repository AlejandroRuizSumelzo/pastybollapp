import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProduct } from '../interface/category-product';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesUrl = './assets/json/categories/categories-products.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(this.categoriesUrl);
  }
}
