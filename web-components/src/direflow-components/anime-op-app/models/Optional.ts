type Optional<T> = T | null | undefined;
export default Optional;

export function empty<T>(): Optional<T> {
  return undefined;
}
