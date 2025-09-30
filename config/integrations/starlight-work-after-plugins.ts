/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';

type ConfigSetupArgs = Parameters<NonNullable<StarlightPlugin['hooks']['config:setup']>>[0];

/**
 * Removes the RSS icon entry that starlight-blog adds to the social list.
 */
function handleConfigSetup({ config, updateConfig }: ConfigSetupArgs) {
	const starlightConfig = config as StarlightUserConfig;

	if (starlightConfig.social) {
		const filteredSocial = starlightConfig.social.filter((s) => s.icon !== 'rss');

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
