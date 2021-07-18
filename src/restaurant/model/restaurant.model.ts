import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restaurant{
    @Field(()=>ID,{nullable: true})
    id?: string;

    @Field(()=>Float,{nullable: true})
    price?: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    description?: string;

    @Field({nullable: true})
    image?: string;

    
}
@ObjectType()
export class Lunch{
    @Field(()=>ID,{nullable: true})
    id?: string;

    @Field(()=>Float,{nullable: true})
    price?: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    description?: string;

    @Field({nullable: true})
    image?: string;

    
}
@ObjectType()
export class Dinner{
    @Field(()=>ID,{nullable: true})
    id?: string;

    @Field(()=>Float,{nullable: true})
    price?: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    description?: string;

    @Field({nullable: true})
    image?: string;

    
}
@ObjectType()
export class Drinks{
    @Field(()=>ID,{nullable: true})
    id?: string;

    @Field(()=>Float,{nullable: true})
    price?: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    image?: string;

    
}