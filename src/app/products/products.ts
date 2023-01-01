
import { ObjectId } from "mongoose";

export interface Products {
  _id: ObjectId;
  name: string;
  desc: string;
  image: string;
 
}