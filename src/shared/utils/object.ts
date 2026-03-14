export const getString = (
  obj: Record<string, unknown>,
  key: string,
): string | undefined => {
  const val = obj[key];

  return typeof val === "string" && val.trim() ? val.trim() : undefined;
};
