import prisma from "../../lib/prisma"


export default async function handler(req, res) {
    const body = req.body;
    console.log(body);
    if (!body.name) {
      return res.status(500).json({msg: 'Name was not found'});
    }

    await prisma.court.create({data: body})

    res.status(200).json({msg: "sucsesss"});
  }