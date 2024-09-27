import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {
  REGEX_PATTERN_STYLES,
  STYLESHEET_IDENT_HASH_SIZE_DEV,
  STYLESHEET_IDENT_HASH_SIZE_PROD,
} from './constants';

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: REGEX_PATTERN_STYLES,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            namedExport: false,
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? `[path][name]__[local]--[hash:base64:${STYLESHEET_IDENT_HASH_SIZE_DEV}]`
              : `[hash:base64:${STYLESHEET_IDENT_HASH_SIZE_PROD}]`
          },
        },
      },
      'sass-loader',
    ],
    exclude: /node_modules/,
  }
};
