export type NavItem = {
  txt: string;
  link: string;
};

export type UseNavReturn = {
  nav: Ref<NavItem[]>;
};
