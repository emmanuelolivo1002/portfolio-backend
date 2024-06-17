import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsJob extends Schema.Component {
  collectionName: 'components_components_jobs';
  info: {
    displayName: 'Job';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    company: Attribute.String;
    location: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    detailedDescription: Attribute.Blocks;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    label: Attribute.String;
    type: Attribute.Enumeration<['internal', 'external', 'file']> &
      Attribute.Required &
      Attribute.DefaultTo<'internal'>;
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

export interface LayoutProjectsSection extends Schema.Component {
  collectionName: 'components_layout_projects_sections';
  info: {
    displayName: 'Projects Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    projects: Attribute.Relation<
      'layout.projects-section',
      'oneToMany',
      'api::project.project'
    >;
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
      'layout.projects-section': LayoutProjectsSection;
    }
  }
}
