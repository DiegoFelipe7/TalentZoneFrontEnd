import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('save product', (done: DoneFn) => {
    const product = {
      id: "1345488",
      name: "diego",
      inInventory: 500,
      enabled: true,
      min: 10,
      max: 200
    };
    service.saveProduct(product).subscribe(savedProduct => {
      expect(savedProduct).toBeDefined();
      expect(savedProduct.name).toBe(product.name);
      done();
    })
  });

  it(' retrieve products', (done: DoneFn) => {
    service.getProducts().subscribe(products => {
      console.log(products.length)
      expect(products).toBeDefined();
      expect(products.length).toBeGreaterThan(0);
      done()
    });
  });



  it(' update a product', (done: DoneFn) => {
    const productId = '1345488';
    const product = {
      id: productId,
      name: "diego",
      inInventory: 500,
      enabled: true,
      min: 15,
      max: 200
    };
    service.updateProduct(product, productId).subscribe(updated => {
      expect(updated).toBeDefined();
      expect(updated.id).toBe(productId);
      expect(updated.name).toBe(product.name);
      done();
    });
  });
  /*   it(' retrieve a product by ID', (done: DoneFn) => {
      const productId = '1345488';
      service.getProductId(productId).subscribe(product => {
        console.log(product)
        expect(product).toBeDefined();
        expect(product.id).toBe(productId);
        done();
      });
    }); */
  it(' remove a product', (done: DoneFn) => {
    const productId = '1345488';
    service.removeProduct(productId).subscribe(response => {
      expect(response).toBeDefined();
      expect(response.type).toBe("Success");
      done();
    });
  });
});
