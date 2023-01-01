import {Injectable} from '@nestjs/common';
import {sign} from 'jsonwebtoken';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    // define user service
    constructor(private userService: UsersService) {}

    async signPayload(payload: any) {
        // token to expire in 12 hours
        const token = sign(payload, 'secretKey', { expiresIn: '8h' });
        return token;
    }

    async validateUser(payload: any) {
        return await this.userService.findByPayload(payload);
    }


}

    
