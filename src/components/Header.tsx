import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  href: string;
  label: string;
}

const Header = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default dark
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme !== null) {
      // Use saved preference
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // FIRST VISIT: ALWAYS use dark mode, regardless of system preference
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem('theme') === null) {
        const shouldUseDark = e.matches;
        setIsDarkMode(shouldUseDark);
        if (shouldUseDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleDarkMode = (): void => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Update DOM
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const handleNavigation = (href: string): void => {
    setIsMenuOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems: NavItem[] = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#experience', label: 'Experiência' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Luciana Sena
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 font-medium ${
                      isActive ? 'text-purple-600 dark:text-purple-400' : ''
                    }`}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full w-10 h-10 min-w-[44px] min-h-[44px] touch-manipulation"
                aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile Menu Button - Visible on mobile and tablet */}
              <Button
                variant="ghost"
                size="icon"
                className="mobile-menu-button lg:hidden rounded-full w-10 h-10 min-w-[44px] min-h-[44px] touch-manipulation"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                  }`}>
                    <Menu className={`w-6 h-6 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                  </span>
                  <span className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-1'
                  }`}>
                    <X className={`w-6 h-6 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </span>
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation - Improved for landscape */}
          <div className={`mobile-menu lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 mt-4'
              : 'max-h-0 opacity-0 mt-0 overflow-hidden'
          }`}>
            <div className="mx-2 sm:mx-4 md:mx-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                {navItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 font-medium text-center text-sm sm:text-base ${
                        isActive
                          ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-r-full" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Mobile Menu Footer - Compacto */}
              <div className="mt-4 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Portfolio • Luciana Sena
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;