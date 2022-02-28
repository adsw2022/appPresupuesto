import { Egreso } from './egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso('Alquiler Casa', 150),
    new Egreso('Ropa', 125),
    new Egreso('Transporte', 140),
    new Egreso('Supermercado', 350)
  ];
  eliminar(egreso:Egreso){
    const indice:number= this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}
