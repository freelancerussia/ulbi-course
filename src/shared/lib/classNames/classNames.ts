type ModsType = Record<string, boolean | string>;

export default function classNames(
    cls: string,
    mods?: ModsType,
    additional?: string[]
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}