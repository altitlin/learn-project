import path from 'path';
import { Configuration } from 'webpack';

import { DEFAULT_MODE, DEFAULT_PORT } from './constants';
import { BuildEnv } from './types'
import { buildConfig } from './build-config'

export default (env: BuildEnv): Configuration => {
  const mode = env.mode ?? DEFAULT_MODE;
  const port = env.port ?? DEFAULT_PORT;
  const isDev = mode === 'development';
  const paths = {
    entry: path.join(__dirname, '../src/index.tsx'),
    build: path.join(__dirname, '../build'),
    html: path.join(__dirname, '../public/index.html'),
    src: path.join(__dirname, '../src'),
  };
  const configOptions = { mode, port, isDev, paths };

  return buildConfig(configOptions);
};
