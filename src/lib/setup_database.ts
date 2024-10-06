import prisma from "./prisma"

export const setup_database = async () => {
    // await prisma.$executeRaw`DROP TABLE IF EXISTS users`
    const user = prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(220) NOT NULL
    )
`
    const doctor = prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS doctors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(220) NOT NULL,
    email VARCHAR(220) NOT NULL
    )
`
    await prisma.$transaction([
        user,
        doctor
    ])
}