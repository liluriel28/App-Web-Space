import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumoApis';

  ships: String[] | any[]= [];

  constructor(private http:HttpClient){};

  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/ships').subscribe(( ships:any )=>{
      this.ships = ships;
    })


  }
}
