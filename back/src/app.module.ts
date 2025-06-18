import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://users:GVjQV3zYK1ErvCcF@cluster0.fyweio6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
