// Tipos para formatos de imagen
export type ImageFormat = "jpeg" | "png" | "webp" | "gif" | "bmp" | "tiff";

// Configuración de conversión
export interface ConversionOptions {
  format: ImageFormat;
  quality?: number; // 0-100
  width?: number;
  height?: number;
  maintainAspectRatio?: boolean;
}

// Información del archivo
export interface FileInfo {
  id: string;
  originalName: string;
  size: number;
  format: ImageFormat;
  dimensions: {
    width: number;
    height: number;
  };
  uploadedAt: Date;
}

// Respuesta de conversión
export interface ConversionResult {
  success: boolean;
  fileInfo: FileInfo;
  downloadUrl?: string;
  error?: string;
  processingTime?: number;
}

// Estado de procesamiento
export type ProcessingStatus = "pending" | "processing" | "completed" | "error";

export interface ProcessingState {
  status: ProcessingStatus;
  progress: number; // 0-100
  message?: string;
}

// Configuración de calidad por formato
export const QUALITY_PRESETS = {
  jpeg: { low: 60, medium: 80, high: 95 },
  png: { low: 6, medium: 4, high: 1 }, // Nivel de compresión PNG
  webp: { low: 50, medium: 75, high: 90 },
} as const;

// Formatos soportados
export const SUPPORTED_FORMATS: ImageFormat[] = [
  "jpeg",
  "png",
  "webp",
  "gif",
  "bmp",
  "tiff",
];

// Límites de archivo
export const FILE_LIMITS = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  MAX_RESOLUTION: 8192, // 8K
  SUPPORTED_MIME_TYPES: [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/bmp",
    "image/tiff",
  ],
} as const;
