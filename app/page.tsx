import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();
async function getUserDetails() {
  const user =  await client.user.findFirst();
  return user
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
                
                {userData?.id}
            </div>
        </div>
    </div>
  );
}
