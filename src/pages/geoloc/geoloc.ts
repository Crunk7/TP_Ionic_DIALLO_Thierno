import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geoloc',
  templateUrl: 'geoloc.html',
})
export class GeolocPage {
  pos: any = {lon: Number, lat: Number};

  constructor(private geolocation: Geolocation) {
    this.pos.lon = null;
    this.pos.lat = null;
  }
  position () {
    /*
    this.geolocation.getCurrentPosition().then((resp) => {
    this.pos.lon = resp.coords.longitude;
    this.pos.lat = resp.coords.latitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });*/
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
       // data can be a set of coordinates, or an error (if an error occurred).
       this.pos.lon = data.coords.latitude;
       this.pos.lat = data.coords.longitude;
    console.log("longitude", this.pos.lon, "latitude", this.pos.lat);
  });
  }
}
