import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddUserModalComponent } from 'src/app/add-user-modal/add-user-modal.component';
import { UpdateModalComponent } from 'src/app/update-modal/update-modal.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements OnInit {


  public columns: any;
  public rows: any;

  //Cria as colunas da tabela e retorna os dados da requisição através do rows
  constructor(private dataService: DataService, private modalCtrl: ModalController) {
    this.columns = [
      { name: 'Id' },
      { name: 'Nome' },
      { name: 'Email' },
      { name: 'Telefone' },
      { name: 'Data de Nascimento', prop: 'dt_nascimento'},
      { name: 'Ações'}
    ];
  }

  ngOnInit() {

    this.getCostumerData();

  }

//função encarregada e exibir registro de clientes ja cadastrados
  public getCostumerData(){
    this.dataService.getData().subscribe(res => {
      this.rows = res;
    });
  }

// função para abrir o modal de cadastro de novo cliente
async openModal(){
   const modal = await this.modalCtrl.create({
     component: AddUserModalComponent
   });

   await modal.present();
}


// função para abrir modal de edição de cliente já cadastrado
async updateOpenModal(row){

  //console.log(this.rows[id]);
  const modal = await this.modalCtrl.create({
    component: UpdateModalComponent,
    componentProps: {id: row.id, nome: row.nome, // habilita retorno dos dados para o modal
    // eslint-disable-next-line @typescript-eslint/naming-convention
    email: row.email, telefone: row.telefone}
  });


  await modal.present();
}

// função para deletar cliente
deleteData(id){
  this.dataService.deleteData(id).subscribe(res =>{
    this.getCostumerData();
  });
}








}
