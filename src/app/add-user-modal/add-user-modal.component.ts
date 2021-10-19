import { DataService } from './../service/data.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent {
  customerData = new Customer();  // Classe que instancia cliente
  input = new FormControl('', Validators.required); // valida inputs obrigatórios
  constructor(
    private modalCtrl: ModalController,  // controlador do modal
    private dataService: DataService, // faz chamada do serviço addCustomer
    private router: Router
  ) {}

  // função para fechar o modal de adicionar cliente
  dismissModal() {
    this.modalCtrl.dismiss();
  }

  // função encarrecada de inserir os dados e enviar requisição para o serviço
  insertData() {
    this.dataService.addCustomer(this.customerData).subscribe((res) => {
    window.location.reload(); // atualiza página com novos registros
    });
  }
}
