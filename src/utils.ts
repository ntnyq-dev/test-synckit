import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'

const _dirname =
  typeof __dirname !== 'undefined' ? __dirname : fileURLToPath(new URL('.', import.meta.url))

export const resolve = (...args: string[]) => path.resolve(_dirname, '..', ...args)
