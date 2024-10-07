import prisma from "./prisma"

const dropTable = async (table: string) => {
    await prisma.$executeRaw`DROP TABLE IF EXISTS ${table}`
}

export const setup_database = async () => {
    // await dropTable(users)
    const user = prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(220) PRIMARY KEY NOT NULL,
    name VARCHAR(220) NOT NULL,
    email VARCHAR(220) NULL,
    password VARCHAR(220) NOT NULL,
    age INTEGER NOT NULL,
    phoneNumber VARCHAR(220) UNIQUE NOT NULL,
    address VARCHAR(220) NOT NULL,
    gender VARCHAR(220) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`
    // await dropTable(doctors)
    const doctor = prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS doctors(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(220) NOT NULL,
    email VARCHAR(220) NOT NULL
    )
`
    await prisma.$transaction([
        user,
        doctor
    ])

    console.log("\n\n\t\t---\tDATABASE SETUP COMPLETE\t\t---\n\n")
}