import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Secret key for JWT verification; ideally, store this in environment variables
const JWT_SECRET = process.env.JWT_SECRET;

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token'); // Get the token from cookies

  if (!token) {
    // If token doesn't exist, redirect to login or return an unauthorized response
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Parse and verify the JWT
    const decoded = jwt.verify(token.value, JWT_SECRET||"");

    // Attach the decoded payload to the request headers or cookies
    req.headers.set('x-user-data', JSON.stringify(decoded));

    return NextResponse.next();
  } catch (err) {
    // Token is invalid or expired
    console.error('JWT verification failed:', err);
    return NextResponse.json({ message: 'Token Validation Failed' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/notification/:path*'], // Specify paths to apply middleware to
};
