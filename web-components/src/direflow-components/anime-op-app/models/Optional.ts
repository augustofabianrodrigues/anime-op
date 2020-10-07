type Optional<T> = T | undefined;
export default Optional;

export function empty<T>(): Optional<T> {
  return undefined;
}
