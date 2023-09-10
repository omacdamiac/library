import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '', // let's comeback here later
      directivesProxyFile: '', // let's comeback here later
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [sass()],
  testing: {
    browserHeadless: "new",
  },
};
