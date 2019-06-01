import { Component, OnInit } from '@angular/core';
import {Geolocation } from '@ionic-native/geolocation/ngx';
import {  LoadingController } from '@ionic/angular';

declare var google;

//toda la parte nativa se trae para angular  con ngx desde ionic 4


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {

  mapRef = null;

  constructor(
    private geolocation: Geolocation,
    private loadCtrl: LoadingController
  ) {

  }
  
  //se crea un metodo encargado de cargar el mapa
  ngOnInit(){
     this.loadMap();
  }
  async loadMap(){
    //muestra el loading
    const loading = await this.loadCtrl.create();
    loading.present();
 //  fin muestra el loading
    const myLatLng= await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom:12
    }); 
      //muestra que se carga el mapa load
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () =>{
      loading.dismiss(); //se apaga el load
      this.addMarker(myLatLng.lat, myLatLng.lng);
    });

  }
    //crear el marker con metodos
    private addMarker(lat: number, lng: number){
     const marker = new google.maps.Marker({
       position:{ lat, lng },
       map: this.mapRef,

     });
   }
  //metodo
   private async getLocation(){
     const rta = await this.geolocation.getCurrentPosition();
     return {
       lat: rta.coords.latitude,
       lng: rta.coords.longitude
     };
   }
  

}