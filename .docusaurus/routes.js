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
    component: ComponentCreator('/blog', '2ba'),
    exact: true
  },
  {
    path: '/blog/2020/08/26/welcome',
    component: ComponentCreator('/blog/2020/08/26/welcome', '9bc'),
    exact: true
  },
  {
    path: '/blog/2021/01/01/notification-module',
    component: ComponentCreator('/blog/2021/01/01/notification-module', '5ac'),
    exact: true
  },
  {
    path: '/blog/2022/02/24/two-factor-authentication',
    component: ComponentCreator('/blog/2022/02/24/two-factor-authentication', '9ce'),
    exact: true
  },
  {
    path: '/blog/2023/09/08/awe-spring-boot-3',
    component: ComponentCreator('/blog/2023/09/08/awe-spring-boot-3', '9bc'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '237'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '165'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '370'),
    exact: true
  },
  {
    path: '/blog/tags/2-fa',
    component: ComponentCreator('/blog/tags/2-fa', '790'),
    exact: true
  },
  {
    path: '/blog/tags/awe',
    component: ComponentCreator('/blog/tags/awe', 'ec2'),
    exact: true
  },
  {
    path: '/blog/tags/awe/page/2',
    component: ComponentCreator('/blog/tags/awe/page/2', '845'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '2ff'),
    exact: true
  },
  {
    path: '/blog/tags/notificacion',
    component: ComponentCreator('/blog/tags/notificacion', '41e'),
    exact: true
  },
  {
    path: '/blog/tags/novedad',
    component: ComponentCreator('/blog/tags/novedad', '22b'),
    exact: true
  },
  {
    path: '/blog/tags/seguridad',
    component: ComponentCreator('/blog/tags/seguridad', 'e0e'),
    exact: true
  },
  {
    path: '/blog/tags/spring',
    component: ComponentCreator('/blog/tags/spring', 'a4a'),
    exact: true
  },
  {
    path: '/blog/tags/spring-boot-3',
    component: ComponentCreator('/blog/tags/spring-boot-3', '3fa'),
    exact: true
  },
  {
    path: '/blog/tags/subscripcion',
    component: ComponentCreator('/blog/tags/subscripcion', '14e'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '0e6'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', '825'),
    routes: [
      {
        path: '/docs/next/',
        component: ComponentCreator('/docs/next/', '666'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/annotations',
        component: ComponentCreator('/docs/next/annotations', '8c2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/accordion',
        component: ComponentCreator('/docs/next/api/accordion', 'b94'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/actions',
        component: ComponentCreator('/docs/next/api/actions', '713'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/button',
        component: ComponentCreator('/docs/next/api/button', '7ab'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/chart',
        component: ComponentCreator('/docs/next/api/chart', '3d6'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/context-menu',
        component: ComponentCreator('/docs/next/api/context-menu', 'eb0'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/criteria',
        component: ComponentCreator('/docs/next/api/criteria', '618'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/dependencies',
        component: ComponentCreator('/docs/next/api/dependencies', '40e'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/dialog',
        component: ComponentCreator('/docs/next/api/dialog', 'e38'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/email',
        component: ComponentCreator('/docs/next/api/email', '4e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/enumerate',
        component: ComponentCreator('/docs/next/api/enumerate', 'f5c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/grids',
        component: ComponentCreator('/docs/next/api/grids', 'a4d'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/i18n-internationalization',
        component: ComponentCreator('/docs/next/api/i18n-internationalization', 'cc1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/icons',
        component: ComponentCreator('/docs/next/api/icons', '7e1'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/include',
        component: ComponentCreator('/docs/next/api/include', '2c6'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/info',
        component: ComponentCreator('/docs/next/api/info', 'c74'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/layout',
        component: ComponentCreator('/docs/next/api/layout', '638'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/maintain',
        component: ComponentCreator('/docs/next/api/maintain', '2a0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/menu',
        component: ComponentCreator('/docs/next/api/menu', 'c75'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/messages',
        component: ComponentCreator('/docs/next/api/messages', '104'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/pivot-table',
        component: ComponentCreator('/docs/next/api/pivot-table', '7ec'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/query',
        component: ComponentCreator('/docs/next/api/query', '55f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/queues',
        component: ComponentCreator('/docs/next/api/queues', 'fe5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/resizable',
        component: ComponentCreator('/docs/next/api/resizable', 'ef6'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/screen',
        component: ComponentCreator('/docs/next/api/screen', '835'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/screens',
        component: ComponentCreator('/docs/next/api/screens', 'bfb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/service',
        component: ComponentCreator('/docs/next/api/service', 'f9f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/api/tab-and-tabcontainer',
        component: ComponentCreator('/docs/next/api/tab-and-tabcontainer', '972'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/tags',
        component: ComponentCreator('/docs/next/api/tags', 'e16'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/template',
        component: ComponentCreator('/docs/next/api/template', 'a5e'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/window',
        component: ComponentCreator('/docs/next/api/window', 'f30'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/api/wizard-and-wizard-panel',
        component: ComponentCreator('/docs/next/api/wizard-and-wizard-panel', '590'),
        exact: true,
        sidebar: "screens"
      },
      {
        path: '/docs/next/application-options',
        component: ComponentCreator('/docs/next/application-options', '1c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/architecture',
        component: ComponentCreator('/docs/next/architecture', '853'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/builder',
        component: ComponentCreator('/docs/next/builder', 'dcf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/database-migration',
        component: ComponentCreator('/docs/next/database-migration', 'fed'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/deployment',
        component: ComponentCreator('/docs/next/deployment', '21d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/developer',
        component: ComponentCreator('/docs/next/developer', 'b6d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/developer-tools',
        component: ComponentCreator('/docs/next/developer-tools', 'ee1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/debugging',
        component: ComponentCreator('/docs/next/guides/debugging', '437'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/default-screens',
        component: ComponentCreator('/docs/next/guides/default-screens', '159'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/dependency-task',
        component: ComponentCreator('/docs/next/guides/dependency-task', '1da'),
        exact: true,
        sidebar: "schedule"
      },
      {
        path: '/docs/next/guides/notifier',
        component: ComponentCreator('/docs/next/guides/notifier', '824'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/print-engine',
        component: ComponentCreator('/docs/next/guides/print-engine', '1f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/project-structure',
        component: ComponentCreator('/docs/next/guides/project-structure', '14c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/schedule-configuration',
        component: ComponentCreator('/docs/next/guides/schedule-configuration', '3a4'),
        exact: true,
        sidebar: "schedule"
      },
      {
        path: '/docs/next/guides/scheduler',
        component: ComponentCreator('/docs/next/guides/scheduler', 'a04'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/selenium-testing',
        component: ComponentCreator('/docs/next/guides/selenium-testing', '9f0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/v4-migration',
        component: ComponentCreator('/docs/next/guides/v4-migration', '0cc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/guides/validation',
        component: ComponentCreator('/docs/next/guides/validation', 'ce6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/installation',
        component: ComponentCreator('/docs/next/installation', '90f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/logging',
        component: ComponentCreator('/docs/next/logging', '635'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/maven',
        component: ComponentCreator('/docs/next/maven', '051'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/notifier',
        component: ComponentCreator('/docs/next/notifier', '1ad'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/properties',
        component: ComponentCreator('/docs/next/properties', '738'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/purpose',
        component: ComponentCreator('/docs/next/purpose', 'c31'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/rest',
        component: ComponentCreator('/docs/next/rest', '9fa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/scheduler',
        component: ComponentCreator('/docs/next/scheduler', '6a6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/security',
        component: ComponentCreator('/docs/next/security', 'bf9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/session',
        component: ComponentCreator('/docs/next/session', '897'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/training/awe-101',
        component: ComponentCreator('/docs/next/training/awe-101', '0ab'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-102',
        component: ComponentCreator('/docs/next/training/awe-102', 'da1'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-103',
        component: ComponentCreator('/docs/next/training/awe-103', '8f3'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-104',
        component: ComponentCreator('/docs/next/training/awe-104', 'e66'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-105',
        component: ComponentCreator('/docs/next/training/awe-105', '283'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-106',
        component: ComponentCreator('/docs/next/training/awe-106', '853'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-107',
        component: ComponentCreator('/docs/next/training/awe-107', '5c9'),
        exact: true,
        sidebar: "training"
      },
      {
        path: '/docs/next/training/awe-108',
        component: ComponentCreator('/docs/next/training/awe-108', '742'),
        exact: true,
        sidebar: "training"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '155'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'da4'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/annotations',
        component: ComponentCreator('/docs/annotations', '099'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/accordion',
        component: ComponentCreator('/docs/api/accordion', '97e'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/actions',
        component: ComponentCreator('/docs/api/actions', '5fb'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/button',
        component: ComponentCreator('/docs/api/button', 'b41'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/chart',
        component: ComponentCreator('/docs/api/chart', '3cc'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/context-menu',
        component: ComponentCreator('/docs/api/context-menu', '32b'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/criteria',
        component: ComponentCreator('/docs/api/criteria', '449'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/dependencies',
        component: ComponentCreator('/docs/api/dependencies', 'e8b'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/dialog',
        component: ComponentCreator('/docs/api/dialog', '813'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/email',
        component: ComponentCreator('/docs/api/email', '093'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/enumerate',
        component: ComponentCreator('/docs/api/enumerate', 'a13'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/grids',
        component: ComponentCreator('/docs/api/grids', '341'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/i18n-internationalization',
        component: ComponentCreator('/docs/api/i18n-internationalization', '278'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/include',
        component: ComponentCreator('/docs/api/include', '071'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/info',
        component: ComponentCreator('/docs/api/info', 'edb'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/layout',
        component: ComponentCreator('/docs/api/layout', 'bed'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/maintain',
        component: ComponentCreator('/docs/api/maintain', '29a'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/menu',
        component: ComponentCreator('/docs/api/menu', '6ac'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/messages',
        component: ComponentCreator('/docs/api/messages', '8b4'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/pivot-table',
        component: ComponentCreator('/docs/api/pivot-table', '1cb'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/query',
        component: ComponentCreator('/docs/api/query', '03b'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/queues',
        component: ComponentCreator('/docs/api/queues', '49b'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/resizable',
        component: ComponentCreator('/docs/api/resizable', 'c56'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/screen',
        component: ComponentCreator('/docs/api/screen', '699'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/screens',
        component: ComponentCreator('/docs/api/screens', '978'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/service',
        component: ComponentCreator('/docs/api/service', 'e9e'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/api/tab-and-tabcontainer',
        component: ComponentCreator('/docs/api/tab-and-tabcontainer', '294'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/tags',
        component: ComponentCreator('/docs/api/tags', '9ce'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/template',
        component: ComponentCreator('/docs/api/template', 'd9b'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/window',
        component: ComponentCreator('/docs/api/window', '257'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/api/wizard-and-wizard-panel',
        component: ComponentCreator('/docs/api/wizard-and-wizard-panel', '8cf'),
        exact: true,
        sidebar: "version-4.3.0/screens"
      },
      {
        path: '/docs/application-options',
        component: ComponentCreator('/docs/application-options', 'c2d'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/architecture',
        component: ComponentCreator('/docs/architecture', 'e87'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/builder',
        component: ComponentCreator('/docs/builder', '21c'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/database-migration',
        component: ComponentCreator('/docs/database-migration', '266'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/deployment',
        component: ComponentCreator('/docs/deployment', 'db2'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/developer-tools',
        component: ComponentCreator('/docs/developer-tools', '76c'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/debugging',
        component: ComponentCreator('/docs/guides/debugging', '1ae'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/default-screens',
        component: ComponentCreator('/docs/guides/default-screens', '99e'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/dependency-task',
        component: ComponentCreator('/docs/guides/dependency-task', '6d6'),
        exact: true,
        sidebar: "version-4.3.0/schedule"
      },
      {
        path: '/docs/guides/notifier',
        component: ComponentCreator('/docs/guides/notifier', '355'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/print-engine',
        component: ComponentCreator('/docs/guides/print-engine', 'cb9'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/project-structure',
        component: ComponentCreator('/docs/guides/project-structure', 'b88'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/schedule-configuration',
        component: ComponentCreator('/docs/guides/schedule-configuration', 'b90'),
        exact: true,
        sidebar: "version-4.3.0/schedule"
      },
      {
        path: '/docs/guides/scheduler',
        component: ComponentCreator('/docs/guides/scheduler', '9f3'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/selenium-testing',
        component: ComponentCreator('/docs/guides/selenium-testing', '2b3'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/v4-migration',
        component: ComponentCreator('/docs/guides/v4-migration', 'cfd'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/guides/validation',
        component: ComponentCreator('/docs/guides/validation', '88e'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/installation',
        component: ComponentCreator('/docs/installation', '5e6'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/maven',
        component: ComponentCreator('/docs/maven', 'a74'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/notifier',
        component: ComponentCreator('/docs/notifier', 'a4b'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/properties',
        component: ComponentCreator('/docs/properties', '574'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/purpose',
        component: ComponentCreator('/docs/purpose', '63e'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/rest',
        component: ComponentCreator('/docs/rest', '78d'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/scheduler',
        component: ComponentCreator('/docs/scheduler', 'eac'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/security',
        component: ComponentCreator('/docs/security', 'd25'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/session',
        component: ComponentCreator('/docs/session', 'e9d'),
        exact: true,
        sidebar: "version-4.3.0/docs"
      },
      {
        path: '/docs/training/awe-101',
        component: ComponentCreator('/docs/training/awe-101', 'ecb'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-102',
        component: ComponentCreator('/docs/training/awe-102', '5a9'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-103',
        component: ComponentCreator('/docs/training/awe-103', 'a0d'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-104',
        component: ComponentCreator('/docs/training/awe-104', '6af'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-105',
        component: ComponentCreator('/docs/training/awe-105', '6a5'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-106',
        component: ComponentCreator('/docs/training/awe-106', '47f'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-107',
        component: ComponentCreator('/docs/training/awe-107', 'bf7'),
        exact: true,
        sidebar: "version-4.3.0/training"
      },
      {
        path: '/docs/training/awe-108',
        component: ComponentCreator('/docs/training/awe-108', 'd90'),
        exact: true,
        sidebar: "version-4.3.0/training"
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
