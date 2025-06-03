import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

// DECORATOR
@Controller() // Rota base "/"
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // GET /
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('somar')
  getSomar(
    @Query('valor1') valor1: string,
    @Query('valor2') valor2: string,
  ): number {
    this.validarNumeros(Number(valor1), Number(valor2));
    return this.appService.getSomar(Number(valor1), Number(valor2));
  }

  @Get('diminuir')
  getDiminuir(
    @Query('valor1') valor1: string,
    @Query('valor2') valor2: string,
  ): number {
    this.validarNumeros(Number(valor1), Number(valor2));
    return this.appService.getDiminuir(Number(valor1), Number(valor2));
  }

  @Get('multiplicar')
  getMultiplicar(
    @Query('valor1') valor1: string,
    @Query('valor2') valor2: string,
  ): number {
    this.validarNumeros(Number(valor1), Number(valor2));
    return this.appService.getMultiplicar(Number(valor1), Number(valor2));
  }

  @Get('dividir')
  getDividir(
    @Query('valor1') valor1: string,
    @Query('valor2') valor2: string,
  ): number {
    this.validarNumeros(Number(valor1), Number(valor2));
    if (Number(valor2) === 0) {
      throw new BadRequestException('Divisão por zero não é permitida.');
    }
    return this.appService.getDividir(Number(valor1), Number(valor2));
  }

  // Método auxiliar para validar se os parâmetros são números válidos
  private validarNumeros(valor1: number, valor2: number) {
    if (isNaN(valor1) || isNaN(valor2)) {
      throw new BadRequestException(
        'Parâmetros "valor1" e "valor2" devem ser números válidos.',
      );
    }
  }
}
