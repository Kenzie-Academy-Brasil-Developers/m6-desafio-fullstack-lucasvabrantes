import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
    @ApiProperty({
        description: "Nome do contato",
        type: String,
        default: "Dollynho",
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: "E-mail do contato",
        type: String,
        default: "dollynho@guarana.com",
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "Número de telefone do contato",
        type: String,
        default: "11999995555",
    })
    @IsString()
    @IsNotEmpty()
    phone: string;
}
