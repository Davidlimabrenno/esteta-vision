'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function GerarPreviaContent() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get('tipo') || 'facial';
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [procedimento, setProcedimento] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<string>('');

  const procedimentos = {
    facial: ['Harmonização facial', 'Rinomodelação', 'Toxina botulínica', 'Bioestimuladores', 'Skinbooster', 'Preenchimentos'],
    capilar: ['Bioestimuladores capilares', 'Drug delivery', 'Mesoterapia', 'Microinfusão', 'Laser capilar', 'Densidade capilar'],
    corporal: ['Bioestimulador corporal', 'Radiofrequência', 'Ultrassom', 'Criolipólise', 'Tecnologias avançadas', 'Protocolos combinados']
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !procedimento) return;

    setLoading(true);
    
    try {
      // Simula processamento de IA (2-3 segundos)
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Em produção, aqui você chamaria a API de IA real
      setResultado(previewUrl); // Por enquanto, mostra a imagem original
      
    } catch (error) {
      console.error('Erro ao processar:', error);
      alert('Erro ao gerar prévia. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/dashboard">
            <h1 className="text-2xl font-bold text-[#d4af37]">← Voltar ao Dashboard</h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#f4e4c1] via-[#d4af37] to-[#b8860b] bg-clip-text text-transparent">
            Gerar Prévia - {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </h1>

          {!resultado ? (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-2xl p-8">
              {/* Upload de Imagem */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-[#d4af37]">
                  1. Upload da Foto do Cliente
                </label>
                <div className="border-2 border-dashed border-[#d4af37]/30 rounded-xl p-8 text-center hover:border-[#d4af37] transition-all duration-300">
                  {previewUrl ? (
                    <div className="space-y-4">
                      <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedFile(null);
                          setPreviewUrl('');
                        }}
                        className="text-[#d4af37] hover:underline"
                      >
                        Trocar imagem
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-gray-400 mb-4">Clique para fazer upload ou arraste a imagem</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold rounded-lg cursor-pointer hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
                      >
                        Selecionar Imagem
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Seleção de Procedimento */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-[#d4af37]">
                  2. Selecione o Procedimento
                </label>
                <select
                  value={procedimento}
                  onChange={(e) => setProcedimento(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-[#d4af37]/30 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors text-white"
                  required
                >
                  <option value="">Escolha um procedimento...</option>
                  {procedimentos[tipo as keyof typeof procedimentos].map((proc) => (
                    <option key={proc} value={proc}>{proc}</option>
                  ))}
                </select>
              </div>

              {/* Botão de Gerar */}
              <button
                type="submit"
                disabled={!selectedFile || !procedimento || loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black"></div>
                    Processando com IA... (2-3 min)
                  </span>
                ) : (
                  '🚀 Gerar Prévia com IA'
                )}
              </button>
            </form>
          ) : (
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#d4af37]/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#d4af37] text-center">
                ✨ Prévia Gerada com Sucesso!
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-300">Antes</h3>
                  <img src={previewUrl} alt="Antes" className="w-full rounded-lg border-2 border-[#d4af37]/30" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">Depois (Prévia IA)</h3>
                  <img src={resultado} alt="Depois" className="w-full rounded-lg border-2 border-[#d4af37]" />
                </div>
              </div>

              <div className="bg-black/50 border border-[#d4af37]/20 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-[#d4af37]">Procedimento: {procedimento}</h3>
                <p className="text-gray-400">Tipo: {tipo.charAt(0).toUpperCase() + tipo.slice(1)}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setResultado('');
                    setSelectedFile(null);
                    setPreviewUrl('');
                    setProcedimento('');
                  }}
                  className="flex-1 px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                >
                  Nova Prévia
                </button>
                <button
                  onClick={() => {
                    alert('Funcionalidade de compartilhamento em desenvolvimento!');
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
                >
                  Compartilhar com Cliente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GerarPreviaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d4af37]"></div>
      </div>
    }>
      <GerarPreviaContent />
    </Suspense>
  );
}
