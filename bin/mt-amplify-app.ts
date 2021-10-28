#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import MtAmplifyAppStack from '../lib/mt-amplify-app-stack';

// importing configuration based on environment
import environmentConfig from './stack-config';

const app = new cdk.App();

// injecting configurations into stack based on environment.
new MtAmplifyAppStack(app, 'mt-amplify-app', environmentConfig);
