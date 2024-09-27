import { Configuration, RuleSetRule } from 'webpack'
import path from 'path'

import { buildCssLoader } from '../webpack/build-css-loader'

export default ({ config }: { config: Configuration }) => {
	config.resolve?.extensions?.push('.ts', '.tsx')
	config.resolve?.modules?.push(path.join(__dirname, '../src'))

	if (config.module) {
		config.module.rules = config.module.rules?.map((rule) => {
			const ruleToType = rule as RuleSetRule;
      
			if (/svg/.test(ruleToType.test as string)) {
				return { ...ruleToType, exclude: /\.svg$/i }
			}

			return rule
		})

		config.module?.rules?.push(
      buildCssLoader(true),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    );
	}

	return config
}
