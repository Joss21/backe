import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  name?: string;

  @Prop()
  price: number;

  @Prop()
  description?: string;

  @Prop()
  image?: string;
}


export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
