import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Invalid email/password.");
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException("Invalid email/password.");
    }

    return {
      token: this.jwtService.sign({ email: email }, { subject: user.id }),
    };
  }
}
