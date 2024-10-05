import prisma from "@/lib/prisma";
import { setup_database } from "@/lib/setup_database";

export default async function Home() {
await setup_database()
  await prisma.$executeRaw`INSERT INTO users ( email) VALUES 
( 'saflsdfj@example.com'),
( "e2")`

  const user = await prisma.$queryRaw`SELECT * from users`
  console.log(user)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <pre>
        {
          JSON.stringify(user,null,2)
        }
      </pre>
    </div>
  );
}
