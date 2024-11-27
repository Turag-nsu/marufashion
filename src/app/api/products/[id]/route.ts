import { NextRequest, NextResponse } from 'next/server';
import { getProductById, updateProduct, deleteProduct } from '@/lib/api/products';
import { ObjectId } from 'mongodb';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
  }

  try {
    const product = await getProductById(id);
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const updatedProduct = await updateProduct(id, body);
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
  }

  try {
    await deleteProduct(id);
    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
