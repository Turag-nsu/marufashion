import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    const fileName = `${nanoid()}-${file.name}`;
    const filePath = path.join(uploadsDir, fileName);

    await fs.mkdir(uploadsDir, { recursive: true });
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, new Uint8Array(fileBuffer));

    return NextResponse.json({ filePath: `/uploads/${fileName}` }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}
