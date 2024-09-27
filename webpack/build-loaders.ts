import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types';
import { buildCssLoader } from './build-css-loader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    },
    buildCssLoader(isDev),
    {
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    },
  ];
};
