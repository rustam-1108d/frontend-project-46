import formatStylish from './formatStylish.js'
import formatPlain from './formatPlain.js'
import formatJson from './formatJson.js'

const getFormatter = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish
    case 'plain':
      return formatPlain
    case 'json':
      return formatJson
    default:
      throw new Error(`Unknown format: ${formatName}`)
  }
}

export default getFormatter
