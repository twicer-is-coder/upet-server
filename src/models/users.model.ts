
import { Schema, model } from 'mongoose';

interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: string,
    password: string,
}

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    password: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
