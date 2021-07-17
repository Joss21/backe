import { Restaurant, RestaurantDocument } from './schema/restaurant.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RestaurantInput } from './model/restaurant.input';

@Injectable()
export class RestaurantService {
    constructor(@InjectModel('Restaurant') private readonly restaurantModel:Model<RestaurantDocument>){
        
    }

    async getRestaurants():Promise<Restaurant[]>{
        return await this.restaurantModel.find();
    }

    async getRestaurantByID(id: String):Promise<Restaurant>{
        return await this.restaurantModel.findById(id);
    }
    async createRestaurant(restaurantDto:RestaurantInput):Promise<Restaurant>{
        const restaurant = new this.restaurantModel(restaurantDto);
        return restaurant.save()
    }
    async deleteRestaurant(id: string): Promise<any> {
        const restaurantDeleted =await this.restaurantModel.findByIdAndDelete(id);
        return restaurantDeleted;
        
    }
    async updateRestaurant(id: string, restaurantDto: RestaurantInput):Promise<Restaurant>{
        const restaurantUpdate = await this.restaurantModel.findByIdAndUpdate(
            id,
            restaurantDto,
            { new : true},
        );
        restaurantUpdate.save();
        return restaurantUpdate;
    }
}
