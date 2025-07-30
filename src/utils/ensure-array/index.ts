import type { MaybeArray } from '../../types/MaybeArray';

function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}

export default ensureArray;
