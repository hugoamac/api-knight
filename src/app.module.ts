import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      user: 'root',
      pass: 'root',
      dbName: 'appdb',
    }),
    V1Module,
  ],
})
export class AppModule {}
