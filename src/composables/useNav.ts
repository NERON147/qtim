import type { NavItem, UseNavReturn } from '../types/navigation';

export function useNav(): UseNavReturn {
  const nav = ref<NavItem[]>([
    {
      txt: 'Works',
      link: '/',
    },
    {
      txt: 'About',
      link: '/about',
    },
  ]);

  return {
    nav,
  };
}
