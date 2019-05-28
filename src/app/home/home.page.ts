import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
// tslint:disable-next-line: no-trailing-whitespace
    public authservice: AuthService, 
    public actionSheetController: ActionSheetController,
    private modal: ModalController) { }

  Onlogout() {
    this.authservice.logout();
  }

}
