import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    email: string
    address: string
    password: string
    lastName: string
    firstName: string
    image: string
}
