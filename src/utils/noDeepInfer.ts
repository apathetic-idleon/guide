/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

/**
 * Prevents TS from expanding deep generic types during inference.
 * Wrap any function that blows up with "excessive stack depth".
 * Keeps the runtime return type intact while trimming inference depth.
 */
export function noDeepInfer<T extends (...args: any[]) => any>(
	fn: T
): (...args: Parameters<T>) => ReturnType<T> {
	return ((...args: Parameters<T>) => fn(...args)) as any;
}
