import {Injectable} from '@angular/core';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor() {
  }

  getAll() {
    return this.categories;
  }

  saveCategory(category) {
    this.categories.push(category);
  }

  findById(id: number) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        return this.categories[i];
      }
    }
  }

  updateCategory(category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === category.id) {
        this.categories[i] = category;
      }
    }
  }

  removeCategory(id: number) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories.splice(i, 1);
      }
    }
  }
}
