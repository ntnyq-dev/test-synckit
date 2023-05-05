import { createSyncFn } from 'synckit'
import { resolve } from './utils.js'

const loadDict = createSyncFn<(name: string) => Promise<Record<string, string>>>(
  resolve('dist', 'worker.cjs'),
)

const dict = loadDict('en')

console.log(JSON.stringify(dict, null, 2))
