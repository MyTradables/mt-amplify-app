import cdk = require('@aws-cdk/core');

export interface IMtAmplifyAppStackProps extends cdk.StackProps {
  // Add your configuration types here.
  githubOwner: string,
  githubRepository: string,
  githubTokenSecretId: string,
}
