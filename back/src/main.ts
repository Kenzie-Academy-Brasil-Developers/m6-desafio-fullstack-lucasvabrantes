import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true }),
        new ValidationPipe({
            transform: true,
            transformOptions: { groups: ["transform"] },
        })
    );

    const config = new DocumentBuilder()
        .setTitle("Phonebook")
        .setDescription(
            "An API in which the user can register, as well your contacts. Protected Routes for each user"
        )
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
