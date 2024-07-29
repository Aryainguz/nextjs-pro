import { NextResponse } from "next/server";

export async function middleware(req: Request) {


  const token = req.headers.get('authorization')

  console.log(token)

  if (!token) {
    return NextResponse.json({
        message:"Unauthorized",
        success:false
    },{
        status:404
    });
  } else if (token.split(" ")[1] !== process.env.API_SECRET) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/api/:path*", // Match all API routes
};
