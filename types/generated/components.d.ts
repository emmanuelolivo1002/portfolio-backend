import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsJob extends Schema.Component {
  collectionName: 'components_components_jobs';
  info: {
    displayName: 'Job';
  };
  attributes: {
    title: Attribute.String;
    company: Attribute.String;
    location: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    label: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutExperienceSection extends Schema.Component {
  collectionName: 'components_layout_experience_sections';
  info: {
    displayName: 'Experience Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    job: Attribute.Component<'components.job', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    navigationLink: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    primaryLink: Attribute.Component<'components.link'>;
    secondaryLink: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.job': ComponentsJob;
      'components.link': ComponentsLink;
      'layout.experience-section': LayoutExperienceSection;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
