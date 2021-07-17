import { Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class RestaurantInput {
    
    @Field(type => Int,{nullable: true})
    price?: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    description?: string;

    @Field({nullable: true})
    image?: string;
}