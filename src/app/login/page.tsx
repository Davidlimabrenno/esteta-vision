'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simula login (sem autenticação real)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redireciona para o dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold text-[#d4af37]">Esteta Vision</h1>
          </Link>
        </div>
      </header>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-center mb-2 text-[#d4af37]">
              Bem-vindo de volta
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Acesse sua conta Esteta Vision
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#d4af37]/30 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors text-white"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#d4af37]/30 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors text-white"
                  placeholder="Sua senha"
                />
              </div>

              {/* Esqueci a senha */}
              <div className="text-right">
                <Link href="#" className="text-sm text-[#d4af37] hover:underline">
                  Esqueci minha senha
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            {/* Cadastro Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Não tem uma conta?{' '}
                <Link href="/cadastro" className="text-[#d4af37] hover:underline font-semibold">
                  Criar Conta
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
              <p className="text-center text-sm text-gray-500">
                Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
