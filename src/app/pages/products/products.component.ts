import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryProduct } from 'src/app/interface/category-product';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  categorias: CategoryProduct[] = [];

  constructor(
    private router: Router,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categorias = response;
    });
  }

  goToCategory(id: number): void {
    const categoryRoute = `/products/${this.getCategoryRoute(id)}`;

    this.router.navigate([categoryRoute]);
  }

  getCategoryRoute(id: number): string {
    switch (id) {
      case 1:
        return 'bread';
      case 2:
        return 'bakery';
      case 3:
        return 'dots';
      case 4:
        return 'dots';
      case 5:
        return 'kitchen';
      case 6:
        return 'pizza';
      case 7:
        return 'lykke';
      default:
        return '';
    }
  }
}
