'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CadastroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'client' as 'client' | 'professional',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validações
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      // Simula cadastro (sem autenticação real)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redireciona para o dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError('Erro ao realizar cadastro. Tente novamente.');
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
              Criar Conta
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Comece sua jornada estética com IA
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#d4af37]/30 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors text-white"
                  placeholder="Seu nome completo"
                />
              </div>

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

              {/* Tipo de Usuário */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Tipo de Conta
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: 'client' })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.userType === 'client'
                        ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]'
                        : 'border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-2xl mb-1">👤</div>
                    <div className="font-semibold">Cliente</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: 'professional' })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.userType === 'professional'
                        ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]'
                        : 'border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-2xl mb-1">🧑‍⚕️</div>
                    <div className="font-semibold">Profissional</div>
                  </button>
                </div>
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
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

              {/* Confirmar Senha */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#d4af37]/30 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors text-white"
                  placeholder="Repita sua senha"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Criando conta...' : 'Criar Conta'}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-[#d4af37] hover:underline font-semibold">
                  Fazer Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
