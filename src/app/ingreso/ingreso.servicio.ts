import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 500),
    new Ingreso('Venta Carro', 2500),
  ];
}
