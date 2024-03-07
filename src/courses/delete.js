import { PrismaClient } from "@prisma/client"
    const prisma = new PrismaClient()

    async function main(){
        const result = await prisma.courses.delete({
            where: {
                id: "292c2c44-1174-414d-9673-94853ac72cd7"
            }
        })

        console.log(result)
    }

    main()