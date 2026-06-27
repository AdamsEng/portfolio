const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

export function assetPath(path: string): string {
  return `${basePath}${path}`
}
