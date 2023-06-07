import { Component } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  public habitacion1:any={
    nombre:"hab1",
    foto:"../../assets/hab1.webp",
    precio:200
  }

  public habitacion2:any={
    nombre:"hab2",
    foto:"../../assets/hab2.jpg",
    precio:200
  }

  public habitacion3:any={
    nombre:"hab3",
    foto:"../../assets/hab3.jpg",
    precio:200
  }

  public habitaciones:any[]=[]

  public constructor(){

    this.habitaciones.push(this.habitacion1)
    this.habitaciones.push(this.habitacion2)
    this.habitaciones.push(this.habitacion3)

  }


}
