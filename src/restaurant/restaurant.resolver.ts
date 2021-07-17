import { RestaurantInput } from './model/restaurant.input';
import { Breakfast,Dinner,Drinks,Lunch } from './model/restaurant.model';
import { RestaurantService } from './restaurant.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(of => Breakfast)
export class RestaurantResolver {
    constructor(private restaurantService:RestaurantService){}

    @Query(returns=>[Breakfast,Dinner,Drinks,Lunch])
    async restaurants(){
        return await this.restaurantService.getRestaurants();
    }

    @Query(returns=>Breakfast)
    async restaurant(@Args('id') id:string){
        return await this.restaurantService.getRestaurantByID(id);
    }
    @Mutation(returns=>Breakfast)
    async createRestaurant(@Args('restaurant') restaurant:RestaurantInput){
        return await this.restaurantService.createRestaurant(restaurant);
    }
    @Mutation(returns=>Breakfast)
    async editRestaurant(@Args('id') id: string,@Args('restaurant') restaurant: RestaurantInput){
        return await this.restaurantService.updateRestaurant(id, restaurant);
        }
    @Mutation(returns=>Breakfast)
    async deleteRestaurant(@Args('id') id :string){
        return await this.restaurantService.deleteRestaurant(id);
    }
}
