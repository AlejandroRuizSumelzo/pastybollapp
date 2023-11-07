import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product';

const jsonFile = '/assets/json/products/productsDescription.json';

@Component({
  selector: 'app-lykke',
  templateUrl: './lykke.component.html',
  styleUrls: ['./lykke.component.scss'],
})
export class LykkeComponent {
  filteredProducts: Product[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>(jsonFile).subscribe((jsonData: Product[]) => {
      this.filteredProducts = jsonData.filter(
        (product) => product.category === '6'
      );
    });
  }

  filterProducts(
    jsonData: Product[],
    category: string,
    subCategory: string
  ): Product[] {
    const filteredProducts = jsonData.filter((producto) => {
      return (
        producto.category === category && producto.subCategory === subCategory
      );
    });

    // Eliminar duplicados (usando un Set para mantener un registro de productos únicos)
    const uniqueProducts = Array.from(
      new Set(filteredProducts.map((producto) => JSON.stringify(producto)))
    ).map((json) => JSON.parse(json));

    return uniqueProducts;
  }

  showCards(category: string, subCategory: string) {
    this.http.get<Product[]>(jsonFile).subscribe((jsonData: Product[]) => {
      this.filteredProducts = this.filterProducts(
        jsonData,
        category,
        subCategory
      );
    });
  }
}
