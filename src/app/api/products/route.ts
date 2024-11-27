import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { productSchema, Product } from '@/lib/schemas/productSchema';

// Create or fetch the 'products' collection
const getProductsCollection = async () => {
    // console.log('Starting connection to products collection');
    const db = await getDb();
    // console.log("connected to db");
    const collection = db.collection<Product>('products');
    // console.log('Collection obtained');
    return collection;
  };
  

// Create a new product
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        // console.log('body', body);
        body.price = parseFloat(body.price);
        // console.log('body', body);
        // const validatedData = productSchema.parse(body);
        // console.log('validatedData');
        const productsCollection = await getProductsCollection();
        // console.log('productsCollection', productsCollection);
        const result = await productsCollection.insertOne(body);

        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message || 'Invalid data' },
            { status: 400 }
        );
    }
}

// Fetch all products
export async function GET() {
    try {
        const productsCollection = await getProductsCollection();
        const products = await productsCollection.find().toArray();

        return NextResponse.json(products);
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to fetch products' },
            { status: 500 }
        );
    }
}
