import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCardWithImage extends Schema.Component {
  collectionName: 'components_blocks_card_with_images';
  info: {
    displayName: 'CardWithImage';
  };
  attributes: {
    Heading: Attribute.Component<'shared.heading'>;
    Image: Attribute.Media & Attribute.Required;
    Text: Attribute.Component<'shared.text'>;
  };
}

export interface BlocksHeading extends Schema.Component {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    Heading: Attribute.Component<'shared.heading', true>;
  };
}

export interface BlocksHeroBanner extends Schema.Component {
  collectionName: 'components_blocks_hero_banners';
  info: {
    displayName: 'HeroBanner';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    Heading: Attribute.Component<'shared.heading'> & Attribute.Required;
  };
}

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Link: Attribute.Component<'shared.link', true>;
  };
}

export interface BlocksText extends Schema.Component {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Text: Attribute.Component<'shared.text', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    FooterDescription: Attribute.String & Attribute.Required;
    SocialMediaDescription: Attribute.String & Attribute.Required;
    SocialMediaImageWithLinks: Attribute.Component<
      'shared.image-with-link',
      true
    >;
    FooterColumns: Attribute.Component<'shared.footer-columns', true> &
      Attribute.Required;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    LogoImageWithLink: Attribute.Component<'shared.image-with-link'>;
    MenuLinks: Attribute.Component<'shared.menu-link', true>;
    FeaturedMenuLinks: Attribute.Component<'shared.button'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonLink: Attribute.Component<'shared.link'>;
    theme: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'CardWithImage';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    Heading: Attribute.Component<'shared.heading'> & Attribute.Required;
    Text: Attribute.Component<'shared.text'> & Attribute.Required;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'footerColumns';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    columnTitle: Attribute.String;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    HeadingLevel: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
    theme: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedImageWithLink extends Schema.Component {
  collectionName: 'components_shared_image_with_links';
  info: {
    displayName: 'ImageWithLink';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    target: Attribute.Enumeration<['_blank']>;
    theme: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMenuLink extends Schema.Component {
  collectionName: 'components_shared_menu_links';
  info: {
    displayName: 'MenuLink';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    SubMenuLinks: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'file';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    canonicalURL: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'SocialNetwork';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary']>;
    isItalic: Attribute.Boolean & Attribute.DefaultTo<false>;
    isBold: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.card-with-image': BlocksCardWithImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-banner': BlocksHeroBanner;
      'blocks.link': BlocksLink;
      'blocks.text': BlocksText;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.footer-columns': SharedFooterColumns;
      'shared.heading': SharedHeading;
      'shared.image-with-link': SharedImageWithLink;
      'shared.link': SharedLink;
      'shared.menu-link': SharedMenuLink;
      'shared.seo': SharedSeo;
      'shared.social-network': SharedSocialNetwork;
      'shared.text': SharedText;
    }
  }
}
