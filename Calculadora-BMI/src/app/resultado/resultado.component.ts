import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi:number = 0;
  sexo:string = '';
  resultado:string = '';
  interpretacion:string = '';
  estilo:string = '';

  constructor(private route:ActivatedRoute) {
    route.queryParams.subscribe(params=>{
      this.bmi = params.valor;
      this.sexo = params.sexo;
    });
  }

  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado(){
    switch (true) {
      case this.bmi >= 25 && this.bmi < 30:
        this.estilo = "amarillo";
        this.resultado = "Exceso de peso";
        this.interpretacion = `${this.sexo='m'?'Amigo':'Amiga'} tienes un peso corporal superior al normal. Intenta hacer más ejercicio y alimentate bien.`;
        break;
      case this.bmi >= 18.5 && this.bmi < 25:
        this.estilo = "verde";
        this.resultado = "Normal";
        this.interpretacion = `${this.sexo='m'?'Amigo':'Amiga'} tienes un peso corporal normal. ¡Buen Trabajo!`;
        break;
      case this.bmi >= 30 && this.bmi < 40:
        this.estilo = "naranja";
        this.resultado = "Obesidad";
        this.interpretacion = `${this.sexo='m'?'Amigo':'Amiga'} tienes una acumulación anormal o excesiva de grasa que puede ser perjudicial para la salud, acudir al Médico`;
        break;
      case this.bmi >= 40:
        this.estilo = "rojo";
        this.resultado = "Obesidad Morbida";
        this.interpretacion = `${this.sexo='m'?'Amigo':'Amiga'} es posible que sufras de una enfermedad de tipo crónico que aparece en el momento en el que existe un exceso de tejido adiposo, consulta a tu Médico.`;
        break;
      default:
        this.estilo = "azul";
        this.resultado = "Bajo Peso";
        this.interpretacion = `${this.sexo='m'?'Amigo':'Amiga'} tienes peso corporal más bajo de lo normal`;
        break;
    }
  }

}
