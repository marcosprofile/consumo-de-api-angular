import { Component } from '@angular/core';
import { CarroService } from './carro.service';
import { iCarro } from './iCarros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private carroService: CarroService) {}

  obterTodosCarros() {
    this.carroService.obterTodos()
      .then(carros => console.log(carros))
      .catch(error => console.error(error))
  }

  obterSomenteUm() {
    this.carroService.obterPorId(4)
      .then(carro => console.log(carro))
      .catch(error => console.error(error))
  }

  adicionarCarro() {
    const carro: iCarro = {
      nome: "620r",
      marca: "McLaren"
    };

    this.carroService.adicionar(carro)
      .then(carro => console.log('Adicionado'))
      .catch(error => console.error(error));
  }

  atualizar() {
    const carro: iCarro = {
      id: 9,
      nome: "Cayenne",
      marca: "Porsche"
    };

    this.carroService.atualizar(carro)
      .then(carro => console.log("Atualizado", carro))
      .catch(error => console.error(error));
  }

  remover() {
    this.carroService.delete(9)
      .then(res => console.log("Removido", res))
      .catch(error => console.error(error));
  }
}
