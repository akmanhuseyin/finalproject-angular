import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from 'src/app/models/responseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //Konfigürasyon burada yapılıyor. Fluent validation gibi
      //ilgili form map ediliyor.
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (res) => {
          this.toastrService.success(res.message, 'Başarılı');
        },
        (resErr) => {
          if (resErr.error.Errors.length > 0) {
            for (let i = 0; i < resErr.error.Errors.length; i++) {
              this.toastrService.error(
                resErr.error.Errors[i].ErrorMessage,
                ' Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}

// Formgroup: form tagi gibi
// formcontrol : form içindeki her bir kontrol.
