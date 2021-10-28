import { IMtAmplifyAppStackProps } from './stack-environment-types';

const environmentConfig: IMtAmplifyAppStackProps = {
  tags: {
    Developer: 'Faruk Ada',
    Application: 'MyTradables.com',
  },
  githubOwner: 'abc',
  githubRepository: 'def',
  githubTokenSecretId: 'ghi',
};
export default environmentConfig;
