
import { Schema, model } from 'mongoose';
import {IUser} from '../../types/user'

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    password: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
