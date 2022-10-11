import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const body = req.body;
    console.log(body);

    const prisma = new PrismaClient();
    const updateUser = await prisma.user.update({
        where: {
            name: body.name,
        },
        data: {
            bio: body.bio,
        },
    });

    res.status(200).json({ msg: "sucsesss" });
}
