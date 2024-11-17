// app/api/products/check-code/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db/mongodb";
import Product from "@/models/product";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const type = searchParams.get('type');

    if (!code || !type) {
      return NextResponse.json(
        { success: false, error: 'Código y tipo son requeridos' },
        { status: 400 }
      );
    }

    await connectDB();

    const query = type === 'box' 
      ? { boxCode: code.toUpperCase() }
      : { productCode: code.toUpperCase() };

    const exists = await Product.exists(query);

    return NextResponse.json({ 
      success: true, 
      exists: !!exists 
    });
    
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}