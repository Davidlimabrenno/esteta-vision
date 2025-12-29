'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'facial' | 'capilar' | 'corporal'>('facial');

  const handleGerarPrevia = (tipo: string) => {
    router.push(`/dashboard/gerar?tipo=${tipo}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#d4af37]">Esteta Vision</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <span className="text-gray-400 hidden sm:inline">
              Bem-vindo, Profissional!
            </span>
            <Link 
              href="/"
              className="px-4 sm:px-6 py-2 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300"
            >
              Voltar
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f4e4c1] via-[#d4af37] to-[#b8860b] bg-clip-text text-transparent">
              Área do Profissional
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Selecione a área para gerar prévia com IA
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('facial')}
              className={`px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'facial'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-xl shadow-[#d4af37]/50'
                  : 'bg-gray-900 text-gray-400 border border-[#d4af37]/30 hover:border-[#d4af37]'
              }`}
            >
              <div className="text-2xl mb-1">✨</div>
              Facial
            </button>
            <button
              onClick={() => setActiveTab('capilar')}
              className={`px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'capilar'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-xl shadow-[#d4af37]/50'
                  : 'bg-gray-900 text-gray-400 border border-[#d4af37]/30 hover:border-[#d4af37]'
              }`}
            >
              <div className="text-2xl mb-1">💇‍♀️</div>
              Capilar
            </button>
            <button
              onClick={() => setActiveTab('corporal')}
              className={`px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'corporal'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-xl shadow-[#d4af37]/50'
                  : 'bg-gray-900 text-gray-400 border border-[#d4af37]/30 hover:border-[#d4af37]'
              }`}
            >
              <div className="text-2xl mb-1">💪</div>
              Corporal
            </button>
          </div>

          {/* Content Area */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 md:p-12">
            {activeTab === 'facial' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#d4af37]">Estética Facial</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Procedimentos Disponíveis</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Harmonização facial</li>
                      <li>• Rinomodelação</li>
                      <li>• Toxina botulínica</li>
                      <li>• Bioestimuladores</li>
                      <li>• Skinbooster</li>
                      <li>• Preenchimentos</li>
                    </ul>
                  </div>
                  <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Como Funciona</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. Faça upload da foto do cliente</li>
                      <li>2. Selecione o procedimento desejado</li>
                      <li>3. IA gera prévia em segundos</li>
                      <li>4. Compartilhe com o cliente</li>
                    </ol>
                  </div>
                </div>
                <button 
                  onClick={() => handleGerarPrevia('facial')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  Gerar Prévia Facial
                </button>
              </div>
            )}

            {activeTab === 'capilar' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#d4af37]">Estética Capilar</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Procedimentos Disponíveis</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Bioestimuladores capilares</li>
                      <li>• Drug delivery</li>
                      <li>• Mesoterapia</li>
                      <li>• Microinfusão</li>
                      <li>• Laser capilar</li>
                      <li>• Densidade capilar</li>
                    </ul>
                  </div>
                  <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Como Funciona</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. Faça upload da foto do cliente</li>
                      <li>2. Selecione o tratamento desejado</li>
                      <li>3. IA gera prévia em segundos</li>
                      <li>4. Compartilhe com o cliente</li>
                    </ol>
                  </div>
                </div>
                <button 
                  onClick={() => handleGerarPrevia('capilar')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  Gerar Prévia Capilar
                </button>
              </div>
            )}

            {activeTab === 'corporal' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#d4af37]">Estética Corporal</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Procedimentos Disponíveis</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Bioestimulador corporal</li>
                      <li>• Radiofrequência</li>
                      <li>• Ultrassom</li>
                      <li>• Criolipólise</li>
                      <li>• Tecnologias avançadas</li>
                      <li>• Protocolos combinados</li>
                    </ul>
                  </div>
                  <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Como Funciona</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. Faça upload da foto do cliente</li>
                      <li>2. Selecione o procedimento desejado</li>
                      <li>3. IA gera prévia em segundos</li>
                      <li>4. Compartilhe com o cliente</li>
                    </ol>
                  </div>
                </div>
                <button 
                  onClick={() => handleGerarPrevia('corporal')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  Gerar Prévia Corporal
                </button>
              </div>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-xl p-6 text-center hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2 text-[#d4af37]">Precisão IA</h3>
              <p className="text-gray-400 text-sm">Resultados realistas e profissionais</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-xl p-6 text-center hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-[#d4af37]">Rápido</h3>
              <p className="text-gray-400 text-sm">Prévias geradas em segundos</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-xl p-6 text-center hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-semibold mb-2 text-[#d4af37]">Profissional</h3>
              <p className="text-gray-400 text-sm">Aumente suas conversões</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
