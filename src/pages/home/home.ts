import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	dato : any;

	constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {
    console.log("Iniciado el sistema");
	}

	ScanearCodigo(){
		this.barcodeScanner.scan().then((barcodeData) => {
			// Success! Barcode data is here
      console.log(barcodeData);
			this.dato = barcodeData;
		}, (err) => {
			// An error occurred
      console.log(err);
		});
	}
}
