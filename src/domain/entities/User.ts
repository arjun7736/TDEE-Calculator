import mongoose from "mongoose";

export class User{
    constructor(
        public readonly _id: mongoose.Types.ObjectId,
        public readonly name: string,
        public readonly email: string,
        public readonly isAdmin:boolean,
        public readonly isBlocked:boolean,
        public readonly password?: string,
    ){}
}
