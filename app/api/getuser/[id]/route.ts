import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,context:{params:any}) {

    const {searchParams} = new URL(req.url)
    
    const param =  context.params.id


    return NextResponse.json({
        id:param,
        q:searchParams.get("userID")
    })
    
}