// utils/safeLoader.ts
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
