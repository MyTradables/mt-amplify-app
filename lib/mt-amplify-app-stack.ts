import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { IMtAmplifyAppStackProps } from '../bin/stack-environment-types';

class MtAmplifyAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: IMtAmplifyAppStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Example lambda
    new lambda.Function(this, 'boilerplate', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('dist'),
      handler: 'index.handler',
      memorySize: 128,
      timeout: cdk.Duration.seconds(30),
    });
  }
}

export default MtAmplifyAppStack;
