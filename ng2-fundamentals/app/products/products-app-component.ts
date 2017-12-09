import {Component} from '@angular/core'
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    selector :'my-products',
    templateUrl :'./product-list.component.html',
    providers : [ProductService]
})

export class ProductComponent{
    constructor (private _productService: ProductService){}
    pageTitle : string = "Product List";
    products: any[] =  [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 6,
            "productName": "Cream",
            "productCode": "TBX-0068",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => this.products = products)
    }
}