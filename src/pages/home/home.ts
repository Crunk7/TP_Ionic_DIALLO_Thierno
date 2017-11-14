import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:String;
  app: any = {nom: String, version: Number};
  base64Image:String;
  affImg:String;

  constructor(public navCtrl: NavController, private camera: Camera, private base64ToGallery: Base64ToGallery) {
    this.app.version = 0.1;
    this.app.nom = "Yo les gens";
    this.base64Image = "";
    this.affImg = "";
  }

  inscription(input:any){
    console.log(input);
    this.app.nom = "Ah ca marche ! ";
}
  takePicture(){
    console.log("done")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = imageData;
     this.affImg = 'data:image/jpeg;base64,' + imageData;


    });
  }

}


/*
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}
this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
*/
