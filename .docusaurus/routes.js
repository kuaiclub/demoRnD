import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '987'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2bf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '61f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '66e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c99'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '12d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a09'),
    exact: true
  },
  {
    path: '/blog/2020/08/26/welcome',
    component: ComponentCreator('/blog/2020/08/26/welcome', '9bc'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '237'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '370'),
    exact: true
  },
  {
    path: '/blog/tags/awe',
    component: ComponentCreator('/blog/tags/awe', 'f99'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '2ff'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '0e6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '908'),
    routes: [
      {
        path: '/docs/annotations',
        component: ComponentCreator('/docs/annotations', 'abe'),
        exact: true
      },
      {
        path: '/docs/api/accordion',
        component: ComponentCreator('/docs/api/accordion', '9f1'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/guides/v4-migration',
        component: ComponentCreator('/docs/guides/v4-migration', 'faa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/training/awe-101',
        component: ComponentCreator('/docs/training/awe-101', '060'),
        exact: true,
        sidebar: "training"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6cc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
