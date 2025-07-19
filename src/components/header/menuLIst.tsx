export interface MenuItem {
  id: number;
  title: string;
  path: string;
  submenu?: SubMenuItem[];
}

export interface SubMenuItem {
  id: number;
  title: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Study In",
    path: "/study-in",
    submenu: [
      {
        id: 1,
        title: "Study in UK",
        path: "/study/uk",
      },
      {
        id: 2,
        title: "Study in Australia",
        path: "/study/aus",
      },
      {
        id: 3,
        title: "Study in Canada",
        path: "/study/canada",
      },
      {
        id: 4,
        title: "Study in Ireland",
        path: "/study/ireland",
      },
      {
        id: 5,
        title: "Study in USA",
        path: "/study/usa",
      },
      {
        id: 6,
        title: "Study in New Zealand",
        path: "/study/newzealand",
      },
    ],
  },

  {
    id: 4,
    title: "About",
    path: "/about",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];
