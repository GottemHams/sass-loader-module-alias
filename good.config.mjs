'use strict';

import configFail from './fail.config.mjs';

export default () => {
	const config = configFail;
	config.resolve = config.module.rules[0].resolve;
	delete config.module.rules[0].resolve;
	return config;
};
