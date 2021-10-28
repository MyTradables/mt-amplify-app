import * as cdk from '@aws-cdk/core';
import * as amplify from '@aws-cdk/aws-amplify';
import * as codebuild from '@aws-cdk/aws-codebuild';
import { IMtAmplifyAppStackProps } from '../bin/stack-environment-types';

class MtAmplifyAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: IMtAmplifyAppStackProps) {
    super(scope, id, props);

    const mtAmplifyApp = new amplify.App(this, 'mytradablesAmplify', {
      appName: 'MyTradables.com',
      description: 'Amplify app for mytradables.com',
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: props.githubOwner,
        repository: props.githubRepository,
        oauthToken: cdk.SecretValue.secretsManager(props.githubTokenSecretId),
      }),
      buildSpec: codebuild.BuildSpec.fromSourceFilename('next-amplify.yml'),
    });

    mtAmplifyApp.addCustomRule(amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT);

    const main = mtAmplifyApp.addBranch('main');

    const domain = mtAmplifyApp.addDomain('mytradables.com');
    domain.mapRoot(main);
    domain.mapSubDomain(main, 'www');
  }
}

export default MtAmplifyAppStack;
