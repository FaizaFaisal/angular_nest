// import modules
import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { userSchema } from './schema/users.schema';
import { UsersService } from './users.service';


@Module({
    imports: [ MongooseModule.forFeature([{name: 'User', 
    // model definition
    schema: userSchema}])], 
    // provider definition
    providers: [UsersService], 
    // export definitions 
    exports: [UsersService]  
})
export class UsersModule {}