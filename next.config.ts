import type { NextConfig } from "next"
import path from "path"
import { fileURLToPath } from "url"

const configDir = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Next from “discovering” a higher-level workspace root
    // when multiple lockfiles exist elsewhere on disk.
    root: configDir,
  },
}

export default nextConfig
