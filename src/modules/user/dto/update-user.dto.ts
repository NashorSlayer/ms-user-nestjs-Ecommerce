import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    email: string
    address: string
    password: string
    firstName: string
    lastName: string
    image: string
}
