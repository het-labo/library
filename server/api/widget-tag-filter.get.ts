// server/api/widget-zip.get.ts
import { createReadStream } from 'node:fs'
import { join } from 'node:path'
import archiver from 'archiver'

export default defineEventHandler(async (event) => {
  const res = event.node.res
  res.setHeader('Content-Type', 'application/zip')
  res.setHeader('Content-Disposition', 'attachment; filename="TagFilter.zip"')

  const archive = archiver('zip', { zlib: { level: 9 } })
  archive.pipe(res)

  archive.append(createReadStream(join(process.cwd(), 'public/widgets/TagFilter/script.js')), { name: 'script.js' })
  archive.append(createReadStream(join(process.cwd(), 'public/widgets/TagFilter/style.css')), { name: 'style.css' })

  await archive.finalize()
})
