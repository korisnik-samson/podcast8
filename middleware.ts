import { clerkMiddleware, ClerkMiddlewareAuth, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/']);

export default clerkMiddleware((auth: ClerkMiddlewareAuth, req: NextRequest) => {
    // Restrict creation of podcasts and other content to public or outside users
    if (isPublicRoute(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};