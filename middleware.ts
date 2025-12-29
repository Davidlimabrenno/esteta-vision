import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Rotas públicas
  const publicRoutes = ['/', '/login', '/cadastro'];
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

  // Verificar se tem token de sessão simulado (localStorage não funciona no middleware)
  // Como removemos Supabase, vamos permitir acesso livre ao dashboard
  // Se quiser proteger rotas, pode adicionar lógica de cookies aqui

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
