import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: "Nome do usuário",
        type: String,
        default: "Lucas Abrantes",
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: "E-mail do usuário",
        type: String,
        default: "lucas@mail.com",
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "Número de telefone do usuário",
        type: String,
        default: "96991111911",
    })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        description: "Senha do usuário",
        type: String,
    })
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ["transform"],
    })
    password: string;
}
