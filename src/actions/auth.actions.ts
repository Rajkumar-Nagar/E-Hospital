"use server"

import { signIn } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"

interface User {
    name: string,
    email?: string,
    password: string,
    age: string,
    phoneNumber: string
    address: string,
    gender: string
}

export const createUser = async (data: User) => {
    const { name, email, password, age, phoneNumber, address, gender } = data;
    if (!name || !password || !age || !phoneNumber || !address || !gender) {
        return { error: "All fields are required" }
    }
    const hexID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {

        const userExists: User[] = await prisma.$queryRaw`
        SELECT * FROM users
        WHERE phoneNumber = ${phoneNumber}
        `;

        if (userExists[0]) {
            return { error: "Phone Number already exists" };
        }

        const [user]: User[] = await prisma.$queryRaw`
        INSERT INTO users ( name, email, password, dob, phoneNumber, gender, address)
        VALUES ( ${name}, ${email}, ${hashedPassword}, ${new Date()}, ${phoneNumber}, ${gender}, ${address})
        RETURNING * 
        `;

        await signIn('credentials', {
            phoneNumber,
            password,
            redirect: false
        }).catch((error) => {
            console.log(error)
        })

        return { user };
    } catch (error) {
        console.log(error)
        return { error: 'Internal Server Error' };
    }
}

export const loginUser = async (data: {
    phoneNumber: string,
    password: string
}) => {
    const { phoneNumber, password } = data;

    if (!phoneNumber || !password) {
        return {
            error: "Phone number and password are required"
        }
    }

    const user: User[] = await prisma.$queryRaw`
    SELECT * FROM users
    WHERE phoneNumber = ${phoneNumber}
    `;

    if (!user[0]) {
        return {
            error: "User not found"
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
        return {
            error: "Invalid credentials"
        }
    }

    await signIn('credentials', {
        phoneNumber,
        password,
        redirect: false
    }).catch((error) => {
        console.log(error)
    })

    return { user: user[0] };
}

