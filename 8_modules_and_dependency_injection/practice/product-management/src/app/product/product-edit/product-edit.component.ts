import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editForm = new FormGroup({
      id: new FormControl(this.findByIdProduct().id),
      name: new FormControl(this.findByIdProduct().name, [Validators.required, Validators.minLength(4)]),
      price: new FormControl(this.findByIdProduct().price, [Validators.required, Validators.min(4)]),
      description: new FormControl(this.findByIdProduct().description, [Validators.required, Validators.minLength(10)])
    }
  );

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
  }

  editProduct() {
    let product = this.editForm.value;
    this.productService.updateProduct(product);
    this.router.navigateByUrl('/product/list');
  }

  getId() {
    return +this.activatedRoute.snapshot.params.id;
  }

  findByIdProduct() {
    return this.productService.findById(this.getId());
  }
}
