import { User } from "@/models/userSchema";
import connectDB from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  await connectDB();

  const userExists = await User.findOne({
    email: "jhondoe@gmail.com",
    name: "Jhon Doe",
  });

  if (userExists) {
    return NextResponse.json(
      {
        message: "User already exists",
        success: false,
      },
      {
        status: 400,
      }
    );
  }

  await User.create({
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
  });

  return NextResponse.json(
    {
      message: "User created",
      success: true,
    },
    {
      status: 201,
    }
  );
}
