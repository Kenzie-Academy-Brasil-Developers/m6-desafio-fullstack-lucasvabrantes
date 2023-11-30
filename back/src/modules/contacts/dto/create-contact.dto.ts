import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}
