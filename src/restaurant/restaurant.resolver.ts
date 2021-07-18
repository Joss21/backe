import { Restaurant } from './model/restaurant.model';
import { RestaurantInput} from './model/restaurant.input';
import { RestaurantService } from './restaurant.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(of => Restaurant)
export class RestaurantResolver {
    constructor(private restaurantService:RestaurantService){}

    @Query(returns=>[Restaurant])
    async restaurants(){
        return await this.restaurantService.getRestaurants();
    }

    @Query(returns=>Restaurant)
    async restaurant(@Args('id') id:string){
        return await this.restaurantService.getRestaurantByID(id);
    }
    @Mutation(returns=>Restaurant)
    async createRestaurant(@Args('restaurant') restaurant:RestaurantInput){
        return await this.restaurantService.createRestaurant(restaurant);
    }
    @Mutation(returns=>Restaurant)
    async editRestaurant(@Args('id') id: string,@Args('restaurant') restaurant: RestaurantInput){
        return await this.restaurantService.updateRestaurant(id, restaurant);
        }
    @Mutation(returns=>Restaurant)
    async deleteRestaurant(@Args('id') id :string){
        return await this.restaurantService.deleteRestaurant(id);
    }
}

