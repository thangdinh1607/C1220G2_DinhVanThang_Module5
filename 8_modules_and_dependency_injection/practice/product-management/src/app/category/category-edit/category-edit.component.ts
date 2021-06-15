import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  editForm = new FormGroup(
    {
      id: new FormControl(this.findByIdCategory().id, [Validators.required,Validators.min(0)]),
      name: new FormControl(this.findByIdCategory().name,[Validators.required, Validators.minLength(5)])
    }
  );

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) {
  }

  ngOnInit(): void {
  }

  getId() {
    return +this.activatedRoute.snapshot.params.id;

  }

  findByIdCategory() {
    return this.categoryService.findById(this.getId());
  }
  updateCategory(){
    let category = this.editForm.value;
    this.categoryService.updateCategory(category);
    this.router.navigateByUrl('category/list')
  }
}
