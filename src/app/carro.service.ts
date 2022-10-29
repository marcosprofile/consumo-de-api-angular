import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { iCarro } from './iCarros';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) { }

  obterTodos() {
    return this.httpClient.get<iCarro[]>(`${API_PATH}Carros`).toPromise();
  }

  obterPorId(id: number) {
    return this.httpClient.get<iCarro>(`${API_PATH}Carros/${id}`).toPromise();
  }

  adicionar(carro: iCarro) {
    return this.httpClient.post<iCarro>(`${API_PATH}Carros`, carro).toPromise();
  }

  atualizar(carro: iCarro) {
    return this.httpClient.put<iCarro>(`${API_PATH}Carros/${carro.id}`, carro).toPromise();
  }

  delete(carroId: number) {
    return this.httpClient.delete(`${API_PATH}Carros/${carroId}`).toPromise();
  }
}
