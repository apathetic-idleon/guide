import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';

type ConfigSetupArgs = Parameters<
  NonNullable<StarlightPlugin['hooks']['config:setup']>
>[0];

/**
 * Removes the RSS icon entry that starlight-blog adds to the social list.
 */
function handleConfigSetup({ config, updateConfig }: ConfigSetupArgs ) {
	const starlightConfig = config as StarlightUserConfig;
	
	if (starlightConfig.social) {
    const filteredSocial = starlightConfig.social.filter(
			(s) => s.icon !== "rss"
		);

		if (filteredSocial.length !== starlightConfig.social.length) {
			updateConfig({ social: filteredSocial });
		}
  }
}

export default function starlightWorkAfterPlugins(): StarlightPlugin {
  return {
    name: 'starlight-work-after-plugins',
    hooks: {
      'config:setup': handleConfigSetup,
    },
  };
}
