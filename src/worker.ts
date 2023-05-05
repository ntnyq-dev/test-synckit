import fs from 'node:fs/promises'
import { runAsWorker } from 'synckit'
import { resolve } from './utils.js'

async function loadDict(name: string) {
  const dict = resolve('dicts', `${name}.json`)
  const content = await fs.readFile(dict, 'utf-8')
  return JSON.parse(content)
}

runAsWorker(async (name: string) => await loadDict(name))
