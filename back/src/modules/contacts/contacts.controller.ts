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
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("contacts")
@Controller("contacts")
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Post("")
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    create(@Body() createContactDto: CreateContactDto, @Request() req) {
        return this.contactsService.create(createContactDto, req.user.id);
    }

    @Get("")
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.contactsService.findAll();
    }
    @Get(":id")
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findOne(@Param("id") id: string) {
        return this.contactsService.findOne(id);
    }

    @Patch(":id")
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(
        @Body() updateContactDto: UpdateContactDto,
        @Param("id") id: string
    ) {
        return this.contactsService.update(updateContactDto, id);
    }

    @Delete(":id")
    @HttpCode(204)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    remove(@Param("id") id: string) {
        return this.contactsService.remove(id);
    }
}
