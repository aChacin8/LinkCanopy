import mongoose, { Schema } from "mongoose";

interface IUser {
    name: string,
    email: string,
    password: string
} //La interface funciona como espejo

const userSchema = new Schema ({ 
    name: {
        type: String,
        required: true, 
        trim: true//Si un usario agrega un nombre con espacios en blanco, elimina estos
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
})

const User = mongoose.model<IUser>('User',userSchema) //El modelo de Usuarios con el generic
export default User