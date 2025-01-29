export function kebabCase(input: string): string {
  return input.toLowerCase()
    .replace('\'', '')
    .replace(' ', '-');
}