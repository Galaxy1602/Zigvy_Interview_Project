import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cors
  app.enableCors();

  app.use(express.static('.'));

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Zigvy Project')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(8080).then(() => {
    console.log(`🚀 Server ready at 8080`);
  });
}
bootstrap();
