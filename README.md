# Portfolio Sena 🚀

Um projeto de portfolio pessoal construído com as tecnologias mais modernas e performáticas disponíveis.

## 📋 Sobre o Projeto

Este é um projeto de portfolio pessoal que demonstra habilidades em desenvolvimento web moderno, utilizando React 19, TypeScript, Vite e Tailwind CSS v4. O projeto está configurado com as melhores práticas de desenvolvimento e ferramentas de qualidade de código.

## ✨ Tecnologias Utilizadas

### **Frontend Core**
- **React 19.1.1** - Framework JavaScript mais recente com melhorias de performance
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **Vite 7.1.2** - Build tool ultra-rápido para desenvolvimento moderno

### **UI & Styling**
- **Tailwind CSS 4.1.12** - Framework CSS utility-first (versão mais recente)
- **Framer Motion 12.23.12** - Biblioteca de animações para React
- **Radix UI** - Componentes acessíveis e customizáveis
  - `@radix-ui/react-accordion` - Componente de acordeão
  - `@radix-ui/react-dialog` - Componente de modal/dialog
- **Lucide React 0.539.0** - Ícones SVG modernos e consistentes

### **Utilitários**
- **clsx** - Utilitário para combinação condicional de classes CSS
- **tailwind-merge** - Utilitário para mesclar classes Tailwind sem conflitos

### **Ferramentas de Desenvolvimento**
- **ESLint 9.33.0** - Linter para JavaScript/TypeScript
- **PostCSS 8.5.6** - Processador de CSS
- **Autoprefixer 10.4.21** - Adiciona prefixos de vendor automaticamente

## 🏗️ Arquitetura do Projeto

```
portfolio_sena/
├── src/
│   ├── assets/          # Recursos estáticos (SVGs, imagens)
│   ├── App.tsx          # Componente principal da aplicação
│   ├── App.css          # Estilos específicos do App
│   ├── main.tsx         # Ponto de entrada da aplicação
│   ├── index.css        # Estilos globais
│   └── vite-env.d.ts    # Tipos do Vite
├── public/               # Arquivos públicos estáticos
├── tsconfig.json         # Configuração principal do TypeScript
├── tsconfig.app.json     # Configuração TypeScript para aplicação
├── tsconfig.node.json    # Configuração TypeScript para Node.js
├── vite.config.ts        # Configuração do Vite
├── eslint.config.js      # Configuração do ESLint
└── package.json          # Dependências e scripts
```

## ⚙️ Configurações

### **TypeScript**
- **Target**: ES2020 para compatibilidade moderna
- **JSX**: `react-jsx` para React 17+
- **Strict Mode**: Ativado com verificações rigorosas
- **Path Mapping**: `@/*` aponta para `src/*` para imports limpos
- **Module Resolution**: Configurado para bundler (otimizado para Vite)

### **Vite**
- **Plugin React SWC**: Compilação ultra-rápida
- **Plugin Tailwind**: Integração nativa com Tailwind CSS v4
- **Alias Paths**: Suporte para imports com `@/`
- **Dev Server**: Configurado na porta 3000 com proxy para API

### **ESLint**
- **TypeScript ESLint**: Regras específicas para TypeScript
- **React Hooks**: Verificação de regras dos hooks
- **React Refresh**: Suporte para hot reload

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd portfolio_sena

# Instale as dependências
npm install
```

### **Desenvolvimento**
```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O projeto estará disponível em http://localhost:3000
```

### **Build e Deploy**
```bash
# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🎨 Tailwind CSS v4

Este projeto utiliza a versão mais recente do Tailwind CSS (v4), que oferece:

- **Zero Config**: Funciona sem arquivo de configuração
- **Performance**: Geração de CSS sob demanda
- **Modernidade**: Suporte a recursos CSS modernos
- **Integração Vite**: Plugin nativo para máxima performance

### **Para usar o Tailwind:**
Adicione no `src/index.css`:
```css
@import "tailwindcss";
```

## 📱 Funcionalidades Atuais

- ✅ **Setup React 19** com TypeScript
- ✅ **Configuração Vite** otimizada
- ✅ **Tailwind CSS v4** configurado
- ✅ **ESLint** com regras React/TypeScript
- ✅ **Path aliases** para imports limpos
- ✅ **Hot Module Replacement** para desenvolvimento
- ✅ **Build otimizado** para produção

## 🔮 Próximos Passos

- [ ] Implementar componentes de portfolio
- [ ] Adicionar seções: Sobre, Projetos, Skills, Contato
- [ ] Implementar tema escuro/claro
- [ ] Adicionar animações com Framer Motion
- [ ] Otimizar para SEO
- [ ] Implementar PWA
- [ ] Adicionar testes unitários

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e pessoal.

## 👨‍💻 Autor

**Sena** - Desenvolvedora 

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
