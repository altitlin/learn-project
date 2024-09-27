/**
 * Allows conditionally join classNames together.
 * @param {string} cls - main class
 * @param {Object} [mods={}] - object of conditional classes
 * @param {string[]} [additional=[]] - array of additional classes
 * @returns className
 */
export const classNames = (
  cls: string,
  mods: Record<string, boolean | string> = {},
  additional: (string|undefined)[] = [],
) => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key),
].join(' ');
