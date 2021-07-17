import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './schema/restaurant.schema';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Restaurant', schema: RestaurantSchema}]),
    ],
    providers: [RestaurantService, RestaurantResolver]
})
export class RestaurantModule {}
