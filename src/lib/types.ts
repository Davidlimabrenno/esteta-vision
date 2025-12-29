export type UserType = 'client' | 'professional';

export type AreaFocus = 'face' | 'capilar' | 'corporal';

export type LeadStatus = 'interessado' | 'prospect' | 'convertido';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  created_at: string;
}

export interface Professional {
  id: string;
  user_id: string;
  specialty: string;
  city: string;
  clinic_name: string;
  focus?: AreaFocus[];
}

export interface Evaluation {
  id: string;
  user_id: string;
  area_focus: AreaFocus;
  sub_area: string;
  concerns: string[];
  photos: string[];
  ai_preview_url?: string;
  ai_comparison_url?: string;
  ai_analysis?: AIAnalysis;
  created_at: string;
}

export interface AIAnalysis {
  improvements: string[];
  recommended_procedures: string[];
  intensity: 'leve' | 'moderado' | 'avançado';
  basic_care: string[];
  contraindications: string[];
  expected_results: string;
  estimated_ticket?: string;
  professional_message?: string;
}

export interface Lead {
  id: string;
  evaluation_id: string;
  professional_id: string;
  status: LeadStatus;
  notes?: string;
  created_at: string;
}

// Opções de queixas por área
export const FACE_CONCERNS = [
  'Nariz',
  'Mandíbula',
  'Lábios',
  'Olheiras',
  'Malar',
  'Têmporas',
  'Papada',
  'Rugas leves'
];

export const CAPILAR_CONCERNS = [
  'Rarefação',
  'Entradas',
  'Redução de densidade',
  'Falhas',
  'Linha frontal irregular'
];

export const CORPORAL_CONCERNS = [
  'Flacidez',
  'Celulite',
  'Gordura localizada',
  'Contorno abdominal',
  'Glúteo (projeção e firmeza)',
  'Coxas',
  'Braços'
];
