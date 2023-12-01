import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Request,
    UseGuards,
} from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("contacts")
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @UseGuards(JwtAuthGuard)
    @Post("")
    create(@Body() createContactDto: CreateContactDto, @Request() req) {
        return this.contactsService.create(createContactDto, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get("")
    findAll() {
        return this.contactsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.contactsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":id")
    update(
        @Body() updateContactDto: UpdateContactDto,
        @Param("id") id: string
    ) {
        return this.contactsService.update(updateContactDto, id);
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(204)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.contactsService.remove(id);
    }
}
