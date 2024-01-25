type Mods = Record<string, boolean | string>;

// export function classNames(
// 	cls: string,
// 	mods: Mods = {},
// 	addict: string[] = []
// ): string {
// 	return [
// 		cls,
// 		...addict.filter(Boolean),
// 		...addict,
// 		...Object.entries(mods)
// 			.filter(([_, value]) => Boolean(value))
// 			.map(([className]) => className),
// 	].join(' ');
// }

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
}
