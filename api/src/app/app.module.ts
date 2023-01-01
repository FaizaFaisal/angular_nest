import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Naveen:test321@cluster0.lpzr9fw.mongodb.net/Angular_NestJs_DB?retryWrites=true&w=majority',
    ),
    
    ProductsModule,
    UsersModule,
    AuthModule,
    
  ],
  controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {}
