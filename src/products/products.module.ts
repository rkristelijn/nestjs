import { Module } from '@nestjs/common';
// import { DatabaseModule } from '@src/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { productsProviders } from './products.providers';
import { ProductsService } from './products.service';
import { ProductSchema } from './products.schema';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
