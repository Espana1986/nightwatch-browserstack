'use strict';

const path = require('path');
const dotenv = require('dotenv').config({
	silent: true,
	path: path.join(__dirname, '.env'),
});

// overwrite existing env variables
for (const key in dotenv) {
	if (dotenv.hasOwnProperty(key)) {
		process.env[key] = dotenv[key];
		if (key === 'AWS_CLOUDWATCH_STREAM_NAME') process.env[key] += `-${process.env.HOSTNAME}`;
	}
}
