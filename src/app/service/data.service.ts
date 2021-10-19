import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

//Construtor para utilizar interface de requisição http para consumir a API desenvolvida
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/customer/'); //Lista os registros cadastrados (cliente)
  }

  addCustomer(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addCustomer', data); //Adiciona novo registro (cliente)
  }

  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteCustomer/'+id); //Deleta registro (cliente)
  }

  updateCustomer(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateCustomer/'+id, data); //Edita registro (cliente)
  }
}
