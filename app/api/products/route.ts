import { NextResponse } from "next/server";
import  connectDB  from "@/app/lib/db/mongodb";
import  Product from "@/models/product";

export async function POST(req: Request) {
    try {
      await connectDB();
      
      const product = await req.json();
      const newProduct = await Product.create(product);
      
      return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
  }
