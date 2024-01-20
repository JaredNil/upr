type Mods = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mods: Mods = {},
	addict: string[] = []
): string {
	return [
		cls,
		...addict.filter(Boolean),
		...addict,
		...Object.entries(mods)
			.filter(([className, value]) =>
				Boolean(value)
			)
			.map(([className]) => className),
	].join(' ');
}
