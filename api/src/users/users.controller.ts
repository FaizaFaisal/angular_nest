import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import {  UsersService } from './users.service';
import {AuthGuard} from '@nestjs/passport';


@Controller('Users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

   

}


