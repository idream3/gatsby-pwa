export function emptyPredicate<ValueType>(
  value: ValueType | null | undefined,
): value is ValueType {
  return value === null && value === undefined;
}
