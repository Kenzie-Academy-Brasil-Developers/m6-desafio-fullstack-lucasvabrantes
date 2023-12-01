import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty({
        description: "E-mail do usuário",
        type: String,
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "E-mail do contato",
        type: String,
    })
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string;
}
