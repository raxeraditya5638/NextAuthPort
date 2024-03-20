import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name) {
      console.log("enter your name");
      return NextResponse.json(
        { message: "user not enter name" },
        { status: 400 }
      );
    }
    if (!email) {
      console.log("enter your email");
      return NextResponse.json(
        { message: "user not enter email" },
        { status: 400 }
      );
    }
    if (!password) {
      console.log("enter your password");
      return NextResponse.json(
        { message: "user not enter password" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
