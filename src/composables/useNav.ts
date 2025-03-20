export function useNav() {
  const nav = ref([
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
