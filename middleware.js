import {NextResponse} from 'next/server'

export function middleware(req){
    // if(req.nextUrl.pathname !='/Login'){
    return NextResponse.redirect(new URL('/Login',req.url))
}

export const config = {
    matcher: ["/Aboutus/:path*"]
  };
  