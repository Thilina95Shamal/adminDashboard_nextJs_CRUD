"use server"

import { revalidatePath } from "next/cache";
import { User } from "./models";
import connectToDB from "./utils";
import { permanentRedirect } from "next/navigation";
import bcrypt from "bcrypt"

export const addUser = async (formData)=>{
    const {username,email,password,phone,address,isAdmin,isActive} = 
    Object.fromEntries(formData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt)

        
        const newUser = new User({
            username,email,password:hashPassword,phone,address,isAdmin,isActive
        });
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create User")
        
    }
    //This is best used when the view and the addition are in the same page
    revalidatePath("/dashboard/users")
    //redirect path to /users
    permanentRedirect("/dashboard/users")

}


export const deleteUser = async (formData)=>{
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete User")
        
    }
    //This is best used when the view and the addition are in the same page
    revalidatePath("/dashboard/users")

}

export const updateUser = async (formData)=>{
    const {id,username,email,password,phone,address,isAdmin,isActive} = 
    Object.fromEntries(formData);

    try {
        connectToDB();        
        const updateUserFields = {
            username,email,password,phone,address,isAdmin,isActive
        }
        
        Object.keys(updateUserFields).forEach((key) => 
            (updateUserFields[key] ==="" || undefined) && delete updateUserFields[key]
        );

        await User.findByIdAndUpdate(id,updateUserFields)

    } catch (err) {
        console.log(err);
        throw new Error("Failed to create User")
        
    }
    //This is best used when the view and the addition are in the same page
    revalidatePath("/dashboard/users")
    //redirect path to /users
    permanentRedirect("/dashboard/users")

}