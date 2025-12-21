// Utilidad para detectar el idioma preferido del usuario
export function detectUserLanguage(): 'es' | 'en' {
  // 1. Primero verificar si hay una preferencia guardada en localStorage
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'es' || savedLang === 'en') {
      return savedLang;
    }

    // 2. Detectar del navegador
    const browserLang = navigator.language || (navigator as any).userLanguage;

    // Si el idioma del navegador es español (es, es-ES, es-AR, es-MX, etc.)
    if (browserLang.toLowerCase().startsWith('es')) {
      return 'es';
    }
  }

  // 3. Por defecto, inglés
  return 'en';
}

export function saveLanguagePreference(lang: 'es' | 'en') {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferredLanguage', lang);
  }
}

export function getRedirectPath(currentPath: string, targetLang: 'es' | 'en'): string {
  // Si ya está en el idioma correcto, no redirigir
  const isInEnglish = currentPath.startsWith('/en');
  const currentLang = isInEnglish ? 'en' : 'es';

  if (currentLang === targetLang) {
    return currentPath;
  }

  // Convertir la ruta
  if (targetLang === 'en') {
    // Español -> Inglés
    if (currentPath === '/') return '/en';
    if (currentPath === '/servicios') return '/en/services';
    if (currentPath === '/nosotros') return '/en/about';
    if (currentPath === '/blog') return '/en/blog';
    if (currentPath === '/contacto') return '/en/contact';
    if (currentPath === '/devengage') return '/en/devengage';
    // Si no hay match específico, agregar /en al principio
    return '/en' + currentPath;
  } else {
    // Inglés -> Español
    if (currentPath === '/en') return '/';
    if (currentPath === '/en/services') return '/servicios';
    if (currentPath === '/en/about') return '/nosotros';
    if (currentPath === '/en/blog') return '/blog';
    if (currentPath === '/en/contact') return '/contacto';
    if (currentPath === '/en/devengage') return '/devengage';
    // Remover /en del principio
    return currentPath.replace(/^\/en/, '') || '/';
  }
}

