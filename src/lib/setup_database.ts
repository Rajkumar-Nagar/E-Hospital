import prisma from "./prisma"

export const setup_database = async () => {
    const user = prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(220) NOT NULL
     )
`
    await prisma.$transaction([
        user
    ])
}