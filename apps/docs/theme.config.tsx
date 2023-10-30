import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>react-native-carplay</span>,
  project: {
    link: 'https://github.com/birkir/react-native-carplay',
  },
  chat: {
    link: 'https://discord.gg/b235pv6QHM',
  },
  docsRepositoryBase: 'https://github.com/birkir/react-native-carplay/tree/master/apps/docs',
  footer: {
    text: 'React Native for Apple CarPlay and Android Auto',
  },
  sidebar: {
    titleComponent({ title, type, route }) {
      const match = route.match(/^\/docs\/(.*)/);
      if (match) {
        title = match[1];
      }
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
};

export default config;
