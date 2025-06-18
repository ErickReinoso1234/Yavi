import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserRole } from '../enum/user-role.enum';
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  username: string;

  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
  })
  password: string;

  @Prop({
    required: true,
    type: String,
    enum: Object.values(UserRole),
  })
  role: UserRole;
}

export const userSchema = SchemaFactory.createForClass(User);
