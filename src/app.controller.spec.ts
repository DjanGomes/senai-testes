import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Bloco de testes (reune um conjunto de testes unitário) => tests suites
describe('AppController', () => {
  let appController: AppController; // <- Variável que vai armazenar o controller testado

  beforeEach(async () => {
    // <- Executado antes de cada teste
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // <- Define qual controller vai ser testado
      providers: [AppService], // <- Injeta o serviço que o controller depende
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // Bloco de testes (reune um conjunto de testes unitário) => tests suites
  describe('root', () => {
    // declara um único teste unitário - tests case
    it('deve retornar "Olá mundo!"', () => {
      // asserções do resultado (ajuda a validar se o resultado é o que estamos esperando)
      expect(appController.getHello()).toEqual('Olá mundo!'); // <- Testa se o método getHello() retorna a string correta
    });
  });

  // Bloco de testes (reune um conjunto de testes unitário) => tests suites
  describe('operações matemáticas', () => {
    // declara um único teste unitário - tests case
    it('somar 5 + 3 = 8', () => {
      // asserções do resultado (ajuda a validar se o resultado é o que estamos esperando)
      expect(appController.getSomar('5', '3')).toBe(8);
    });

    // declara um único teste unitário - tests case
    it('diminuir 5 - 3 = 2', () => {
      // asserções do resultado (ajuda a validar se o resultado é o que estamos esperando)
      expect(appController.getDiminuir('5', '3')).toBe(2);
    });

    // declara um único teste unitário - tests case
    it('multiplicar 5 * 3 = 15', () => {
      // asserções do resultado (ajuda a validar se o resultado é o que estamos esperando)
      expect(appController.getMultiplicar('5', '3')).toBe(15);
    });

    // declara um único teste unitário - tests case
    it('dividir 6 / 3 = 2', () => {
      // asserções do resultado (ajuda a validar se o resultado é o que estamos esperando)
      expect(appController.getDividir('6', '3')).toBe(2);
    });

    // declara um único teste unitário - tests case
    it('dividir por zero deve lançar BadRequestException', () => {
      expect(() => appController.getDividir('6', '0')).toThrow(
        BadRequestException,
      );
    });
  });
});
