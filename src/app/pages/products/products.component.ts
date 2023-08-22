import { Component, OnInit } from '@angular/core';
import { CategoryProduct } from 'src/app/interface/category-product';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  categorias: CategoryProduct[] = [];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categorias = response;
      console.log("this.categorias",this.categorias);
    });
  }
}
