
type Mods = Record<string, boolean | string>

export function classNames(cls:string, mods: Mods, addict: string[]){
    return [
        cls,
        ...addict,
        ...Object.entries(mods)
            .filter(([className, value]) =>  Boolean(value))
            .map(([className]) => className)
    ].join(' ')
} 