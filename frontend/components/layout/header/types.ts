export interface SocialLink {
  name: string;
  href: string;
  iconName: string; // The name of the icon to render dynamically
}

export interface Language {
  code: string;
  name: string;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

export interface MegaMenuSubSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface MegaMenuData {
  category: string;
  sections: MegaMenuSubSection[];
  featuredProduct: {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
    category: string;
    label: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}
