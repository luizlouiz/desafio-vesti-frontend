import { DataService } from './../service/data.service';
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Customer } from '../customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent  {
  @Input() id: number;
  @Input() nome: string;
  @Input() email: string;
  @Input() telefone: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  @Input() dt_nascimento: any;
  customerData = new Customer();
  input = new FormControl('', Validators.required);
  constructor(private modalCtrl: ModalController, private dataService: DataService, private router: Router) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  updateData(){
   this.dataService.updateCustomer(this.id, this.customerData).subscribe(res => {
   window.location.reload();
   });
  }

}
