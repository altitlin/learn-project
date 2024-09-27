import { BuildOptions } from './types'

export const buildDevServer = (options: BuildOptions) => {
	return {
    port: options.port,
		open: true,
		historyApiFallback: true,
		hot: true,
	};
};
