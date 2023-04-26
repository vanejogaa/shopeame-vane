import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { productInterface } from 'src/app/models/item-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {

  products_url: string = "http://localhost:3000/newProducts"

  constructor(private http: HttpClient) { }


  //intentar poner aquí interfaz:
  public itemData = {
    id: "",
    name: "",
    price: "", 
    description: "",
    stars: "",
    image: ""
  }

  public getProducts(): Observable<productInterface[]>{
    return this.http.get<productInterface[]>(this.products_url);
  }

  public postItem(item:any) {
    return this.http.post(this.products_url,item);
  }

  public getItem(id:number) {
    return this.http.get(`${this.products_url}/${id}`)
  } //Función que añade a la url el id del array

  public removeItem(id:number) {
    return this.http.delete(`${this.products_url}/${id}`);
  }

  public editItem(item:any) {
    this.products_url = item;
  }

  public patchItem(item:any) {
    return this.http.put(this.products_url,item);
  }

}
