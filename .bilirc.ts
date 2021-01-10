import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  banner: true,
  input: 'src/index.ts',
  output: {
    format: ['es', 'cjs'],
    moduleName: 'tss-oss-boiler',
    sourceMap: true
  },
  bundleNodeModules: true,
  babel: {
    minimal: true
  },
  plugins: {
    typescript2: {
      clean: true,
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true
    }
  }
};

export default configuration;
