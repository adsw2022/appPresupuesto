import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 500),
    new Ingreso('Venta Carro', 2500),
    new Ingreso('Pension',150)
  ];
  eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}
