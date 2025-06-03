import { Injectable } from '@nestjs/common';

@Injectable() // <- Torna a classe injetável (pode ser usada em outros lugares)
export class AppService {
  getHello(): string {
    return 'Olá mundo!'; // <- Retorna uma string simples
  }

  getSomar(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }

  getDiminuir(valor1: number, valor2: number): number {
    return valor1 - valor2;
  }

  getMultiplicar(valor1: number, valor2: number): number {
    return valor1 * valor2;
  }

  getDividir(valor1: number, valor2: number): number {
    if (valor2 === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return valor1 / valor2;
  }
}
