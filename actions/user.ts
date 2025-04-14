'use server'

import dbConnect from "@/lib/mongodb"
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export const createNewUser = async (formData:FormData) => {    
    try {
        
        await dbConnect();

        // console.log('form data', formData);
        const existing = await User.findOne({ email:formData.get('email') });
        // console.log(existing);
        
        if (existing) throw new Error('Email already exists.');

        await new Promise(resolve => setTimeout(resolve,500));

        const user = await User.create({
            name:formData.get('name'),
            email:formData.get('email'),
        })

        revalidatePath('/');

        console.log('user',user);
        
        
    } catch (error) {
        return {
            error:error
        }
    }
}



export const getUsers = async () => {
    try {
        await dbConnect();

        const users = await User.find({});

        return users;

    } catch (error) {
        
    }
}


export const deleteUser = async (formData:FormData) => {    
    try {

        console.log(formData.get('id'));
        
        
        await dbConnect();

        await new Promise(resolve => setTimeout(resolve,500));

        await User.findByIdAndDelete(formData.get('id') );

        revalidatePath('/');
        
    } catch (error) {
        return {
            error:error
        }
    }
}