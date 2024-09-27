import { Configuration } from 'webpack';

import { BUNDLE_HASH_SIZE } from './constants';
import { BuildOptions } from './types';
import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';

export const buildConfig = (options: BuildOptions): Configuration => {
	const { mode, paths, isDev } = options

	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: `[name].[contenthash:${BUNDLE_HASH_SIZE}].js`,
			clean: true,
		},
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    // @ts-expect-error: devServer property exist in config
    devServer: isDev ? buildDevServer(options) : undefined,
	};
};
