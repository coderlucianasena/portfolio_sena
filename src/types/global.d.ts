// Tipos globais para o projeto
declare global {
  // Extensões para elementos HTML
  interface HTMLAttributes<T> {
    'data-slot'?: string;
    'data-sidebar'?: string;
    'data-variant'?: string;
    'data-size'?: string;
  }
}

// Tipos comuns para componentes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Tipos para variantes de componentes
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export type Orientation = 'horizontal' | 'vertical';
export type Align = 'start' | 'center' | 'end';
export type Position = 'popper' | 'item-aligned';
export type Theme = 'light' | 'dark' | 'system';

// Tipos para formulários
export interface FormField {
  name: string;
  value: string;
  required?: boolean;
}

// Tipos para projetos
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Tipos para experiência
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

// Tipos para habilidades
export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export {};
