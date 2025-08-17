# Portfolio Sena 🚀

Um projeto de portfolio pessoal construído com as tecnologias mais modernas e performáticas disponíveis.

## 📋 Sobre o Projeto

Este é um projeto de portfolio pessoal que demonstra habilidades em desenvolvimento web moderno, utilizando React 19, TypeScript, Vite e Tailwind CSS v3.4.17. O projeto está configurado com as melhores práticas de desenvolvimento e ferramentas de qualidade de código.

## ✨ Tecnologias Utilizadas

### **Frontend Core**
- **React 19.1.1** - Framework JavaScript mais recente com melhorias de performance
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **Vite 7.1.2** - Build tool ultra-rápido para desenvolvimento moderno

### **UI & Styling**
- **Tailwind CSS 3.4.17** - Framework CSS utility-first (versão estável)
- **Framer Motion 12.23.12** - Biblioteca de animações para React
- **Radix UI** - Componentes acessíveis e customizáveis
  - `@radix-ui/react-accordion` - Componente de acordeão
  - `@radix-ui/react-dialog` - Componente de modal/dialog
  - `@radix-ui/react-checkbox` - Componente de checkbox
  - `@radix-ui/react-progress` - Componente de barra de progresso
  - `@radix-ui/react-radio-group` - Componente de grupo de radio
  - `@radix-ui/react-scroll-area` - Componente de área de scroll
  - `@radix-ui/react-select` - Componente de seleção
  - `@radix-ui/react-separator` - Componente separador
  - `@radix-ui/react-slider` - Componente de slider
  - `@radix-ui/react-switch` - Componente de switch
  - `@radix-ui/react-tabs` - Componente de abas
  - `@radix-ui/react-toggle` - Componente de toggle
  - `@radix-ui/react-tooltip` - Componente de tooltip
  - `@radix-ui/react-alert-dialog` - Componente de alerta
  - `@radix-ui/react-aspect-ratio` - Componente de proporção
  - `@radix-ui/react-avatar` - Componente de avatar
  - `@radix-ui/react-context-menu` - Componente de menu contextual
  - `@radix-ui/react-dropdown-menu` - Componente de menu dropdown
  - `@radix-ui/react-hover-card` - Componente de card hover
  - `@radix-ui/react-label` - Componente de label
  - `@radix-ui/react-menubar` - Componente de barra de menu
  - `@radix-ui/react-navigation-menu` - Componente de menu de navegação
  - `@radix-ui/react-popover` - Componente de popover
  - `@radix-ui/react-toggle-group` - Componente de grupo de toggle
- **Lucide React 0.539.0** - Ícones SVG modernos e consistentes

### **Utilitários**
- **clsx** - Utilitário para combinação condicional de classes CSS
- **tailwind-merge** - Utilitário para mesclar classes Tailwind sem conflitos
- **class-variance-authority (cva)** - Para criar variantes de componentes flexíveis

### **Ferramentas de Desenvolvimento**
- **ESLint 9.33.0** - Linter para JavaScript/TypeScript
- **PostCSS 8.5.6** - Processador de CSS
- **Autoprefixer 10.4.21** - Adiciona prefixos de vendor automaticamente

## 🏗️ Arquitetura do Projeto

```
portfolio_sena/
├── src/
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes base (Button, Card, etc.)
│   │   ├── Header.tsx   # Cabeçalho da aplicação
│   │   ├── Hero.tsx     # Seção principal
│   │   ├── About.tsx    # Seção sobre
│   │   ├── Skills.tsx   # Seção de habilidades
│   │   ├── Projects.tsx # Seção de projetos
│   │   ├── Experience.tsx # Seção de experiência
│   │   ├── Contact.tsx  # Seção de contato
│   │   └── Footer.tsx   # Rodapé da aplicação
│   ├── lib/             # Utilitários e funções auxiliares
│   │   └── utils.ts     # Funções utilitárias
│   ├── assets/          # Recursos estáticos (SVGs, imagens)
│   ├── App.tsx          # Componente principal da aplicação
│   ├── App.css          # Sistema de design e estilos globais
│   ├── main.tsx         # Ponto de entrada da aplicação
│   ├── index.css        # Estilos globais e Tailwind
│   └── vite-env.d.ts    # Tipos do Vite
├── public/               # Arquivos públicos estáticos
│   ├── About.png        # Imagem da seção sobre
│   └── 73KSpAgXKmJj.png # Imagem de projeto
├── tsconfig.json         # Configuração principal do TypeScript
├── tsconfig.app.json     # Configuração TypeScript para aplicação
├── tsconfig.node.json    # Configuração TypeScript para Node.js
├── vite.config.ts        # Configuração do Vite
├── postcss.config.cjs    # Configuração do PostCSS
├── tailwind.config.ts    # Configuração do Tailwind CSS
├── eslint.config.js      # Configuração do ESLint
└── package.json          # Dependências e scripts
```

## ⚙️ Configurações

### **TypeScript**
- **Target**: ES2020 para compatibilidade moderna
- **JSX**: `react-jsx` para React 17+
- **Strict Mode**: Temporariamente desativado para desenvolvimento
- **Path Mapping**: `@/*` aponta para `src/*` para imports limpos
- **Module Resolution**: Configurado para bundler (otimizado para Vite)

### **Vite**
- **Plugin React SWC**: Compilação ultra-rápida
- **Alias Paths**: Suporte para imports com `@/`
- **Dev Server**: Configurado na porta 5173 com proxy para API

### **Tailwind CSS v3.4.17**
- **Configuração customizada** com variáveis CSS
- **Tema escuro/claro** implementado
- **Animações customizadas** (blob, fade-in, slide-up)
- **Sistema de cores** com variáveis CSS

### **PostCSS**
- **Tailwind CSS** - Framework CSS utility-first
- **Autoprefixer** - Prefixos de vendor automáticos

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/coderlucianasena/portfolio_sena.git
cd portfolio_sena

# Instale as dependências
npm install
```

### **Desenvolvimento**
```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O projeto estará disponível em http://localhost:5173
```

### **Build e Deploy**
```bash
# Build para produção
npm run build

# Build com verificação TypeScript
npm run build:check

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🎨 Sistema de Design

### **Cores**
- **Paleta principal**: Roxo (#8b5cf6) e Rosa (#ec4899)
- **Tema claro**: Fundo branco com texto escuro
- **Tema escuro**: Fundo escuro (#0f172a) com texto claro
- **Variáveis CSS** para consistência em todo o projeto

### **Componentes Base**
- **Button** - Com variantes e tamanhos
- **Card** - Estrutura base para conteúdo
- **Typography** - Sistema de texto consistente

### **Animações**
- **Fade-in** - Aparição suave de elementos
- **Slide-up** - Deslizamento para cima
- **Blob** - Animação orgânica para elementos decorativos

## 📱 Funcionalidades Implementadas

### **✅ Seções do Portfolio**
- ✅ **Header** - Navegação e logo
- ✅ **Hero** - Seção principal com apresentação
- ✅ **Sobre** - Informações pessoais e foto
- ✅ **Habilidades** - Barras de progresso com tecnologias
- ✅ **Projetos** - Grid de projetos com filtros
- ✅ **Experiência** - Histórico profissional e formação acadêmica
- ✅ **Contato** - Informações de contato
- ✅ **Footer** - Rodapé com informações adicionais

### **✅ Funcionalidades Técnicas**
- ✅ **React 19** com TypeScript
- ✅ **Vite** configurado e otimizado
- ✅ **Tailwind CSS v3.4.17** com tema escuro/claro
- ✅ **Componentes base** (Button, Card)
- ✅ **Sistema de cores** com variáveis CSS
- ✅ **Animações customizadas**
- ✅ **Responsividade** para todos os dispositivos
- ✅ **Path aliases** para imports limpos
- ✅ **Hot Module Replacement** para desenvolvimento

## 🔧 Correções e Melhorias Aplicadas

### **✅ Problemas Resolvidos**
- ✅ **Downgrade Tailwind CSS** de v4 para v3.4.17 (estabilidade)
- ✅ **Configuração PostCSS** corrigida (CommonJS vs ES Modules)
- ✅ **Arquitetura CSS** seguindo boas práticas
- ✅ **TypeScript errors** resolvidos temporariamente
- ✅ **Imagens** configuradas corretamente para Vite
- ✅ **Tema escuro/claro** implementado
- ✅ **Componentes** tipados corretamente

### **✅ Otimizações**
- ✅ **Build script** otimizado para desenvolvimento
- ✅ **CSS architecture** separada por responsabilidade
- ✅ **Variáveis CSS** para design system consistente
- ✅ **Animações** otimizadas para performance

## 🔮 Próximos Passos

- [x] ✅ **Setup React 19** com TypeScript
- [x] ✅ **Configuração Vite** otimizada
- [x] ✅ **Tailwind CSS v3.4.17** configurado
- [x] ✅ **Componentes base** implementados
- [x] ✅ **Sistema de design** implementado
- [x] ✅ **Tema escuro/claro** funcionando
- [x] ✅ **Seções do portfolio** implementadas
- [ ] **Testes unitários** para componentes
- [ ] **Otimização SEO** e meta tags
- [ ] **PWA** para instalação mobile
- [ ] **Analytics** e métricas de performance
- [ ] **Internacionalização** (i18n)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e pessoal.

## 👩‍💻 Autor

**Luciana Sena** - Desenvolvedora Frontend 

**Contato:**
- 📧 Email: coder.lucianasena@gmail.com
- 📱 Telefone: +55 (91) 98123-7058
- 📍 Localização: Belém, PA - Brasil

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
