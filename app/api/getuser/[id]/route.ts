import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest,context:{params:any}) {

    const body = await req.json()


    const {searchParams} = new URL(req.url)
    
    const param =  context.params.id


    return NextResponse.json({
        id:param,
        q:searchParams.get("userID"),
        body:body
    })
    
}