import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


//import {ServicioPage} from "../servicio/servicio.page"



@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.page.html',
  styleUrls: ['./home-empresa.page.scss'],
})
export class HomeEmpresaPage implements OnInit {

<<<<<<< HEAD
=======
//llama homeservicio de home-empresa.page.html
//homeroot: any;

  constructor() { 
     //definer los componentes
    //this.homeroot=ServicioPage;
  }



>>>>>>> master
  ngOnInit() {
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
