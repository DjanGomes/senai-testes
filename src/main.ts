/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const config = new DocumentBuilder()
    .setTitle('Minha API')
    .setDescription('Documentação da API com Swagger')
    .setVersion('1.0')
    .build();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const document = SwaggerModule.createDocument(app, config);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  SwaggerModule.setup('api', app, document); // <- endpoint será http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
