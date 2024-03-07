import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.update({
        where:{
            id: "292c2c44-1174-414d-9673-94853ac72cd7"
        },
        data:{
            name: "Curso de Prisma.js com Fatify",
            duration: 200,
            description: "Uma excelente aula sobre programação"
        }
    })

    console.log(result)
}

main()