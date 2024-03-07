import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de ORM Prisma",
            duration: 100,
            description: "Curso do ORM Prisma "
        }

    })

    console.log(result);
    }

    main()

