import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { forkJoin } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CategoryProduct } from 'src/app/interface/category-product';
import { Product } from 'src/app/interface/product';
import { CategoriesService } from 'src/app/services/categories.service';

const jsonFileNames = [
  'businessDescriptionBakery.json',
  'businessDescriptionRestoration.json',
  'businessDescriptionHoreca.json',
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private products: Product[] = [];

  categorias: CategoryProduct[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedCategoryId: number | null = null;
  isSelectedCategory: boolean = false;

  faSearch = faMagnifyingGlass;

  constructor(
    private router: Router,
    private http: HttpClient,
    private categoryService: CategoriesService,
    library: FaIconLibrary
  ) {
    library.addIcons(faMagnifyingGlass);
    this.loadAllProducts();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categorias = response;
    });
  }

  loadAllProducts() {
    const requests = jsonFileNames.map((fileName) => {
      return this.http.get<Product[]>(`/assets/json/business/${fileName}`);
    });

    forkJoin(requests)
      .pipe(
        concatMap((results) => {
          this.products = results.reduce((acc, data) => acc.concat(data), []);
          return this.products;
        })
      )
      .subscribe();
  }

  goToCategory(id: number): void {
    if (this.selectedCategoryId === id) {
      this.selectedCategoryId = null;
      this.isSelectedCategory = false;
    } else {
      this.selectedCategoryId = id;
      this.isSelectedCategory = true;
      const categoryRoute = `/products/${this.getCategoryRoute(id)}`;
      this.router.navigate([categoryRoute]);
    }
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

  onSearchChanges() {
    if (this.searchTerm === '') {
      this.filteredProducts = [];
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  filterProducts() {
    if (this.searchTerm.length >= 2) {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = [];
    }
  }
}
