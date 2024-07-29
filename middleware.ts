import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function middleware(req:NextApiRequest){
    console.log("Middleware");
    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*", // Match all API routes
}