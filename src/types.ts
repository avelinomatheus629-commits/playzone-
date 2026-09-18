export type Platform = 'PS5' | 'PS4' | 'PS5 & PS4';

export type ConsoleModel = 'ps5-pro' | 'ps5-slim-disc' | 'ps5-slim-digital' | 'ps4-slim';

export interface ConsoleItem {
  id: ConsoleModel;
  name: string;
  tagline: string;
  price: number;
  installments: string;
  generation: 'PS5' | 'PS4';
  edition: string;
  image: string;
  features: string[];
  specs: {
    resolution: string;
    targetFps: string;
    storage: string;
    storageType: string;
    rayTracing: boolean | string;
    audio: string;
    discDrive: 'Incluso' | 'Opcional / Removível' | 'Sem leitor (Digital)' | 'Leitor Blu-ray 1080p';
    backwardCompatibility: string;
    weight: string;
  };
  highlightBadge?: string;
  colors?: string[];
}

export interface GameItem {
  id: string;
  title: string;
  developer: string;
  publisher: string;
  platforms: Platform[];
  price: number;
  originalPrice?: number;
  rating: number; // e.g., 4.9
  metascore: number; // e.g., 94
  genre: string;
  releaseYear: number;
  image: string;
  bannerImage: string;
  description: string;
  isExclusive: boolean;
  isFeatured?: boolean;
  ps5Enhancements: string[];
  dualSenseFeatures: string[];
  tags: string[];
}

export interface AccessoryItem {
  id: string;
  name: string;
  category: 'controles' | 'audio' | 'vr-streaming' | 'energia-suporte';
  price: number;
  installments: string;
  compatibility: Platform[];
  rating: number;
  image: string;
  shortDesc: string;
  highlights: string[];
  availableColors?: { name: string; hex: string; previewImage?: string }[];
  badge?: string;
}

export interface CartItem {
  id: string;
  name: string;
  category: 'console' | 'jogo' | 'acessorio';
  price: number;
  quantity: number;
  image: string;
  platformOrColor?: string;
}
