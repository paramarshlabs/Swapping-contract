import { NextResponse } from 'next/server';

// NOTE: Imports will be available after running "Generate Bindings"
// import { Client, networks } from '@/bindings/src';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'World';

    // Placeholder response until bindings are generated
    return NextResponse.json({
      result: ['Hello', name],
      success: true,
      note: 'This is a placeholder. Generate bindings to enable real contract calls.'
    });

  } catch (error) {
    console.error('Contract call error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', success: false },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { params } = body;

    return NextResponse.json({
      success: true,
      note: 'POST handler placeholder. Implement after generating bindings.',
      receivedParams: params
    });

  } catch (error) {
    console.error('Contract call error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', success: false },
      { status: 500 }
    );
  }
}