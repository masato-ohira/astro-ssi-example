const download = require('download')
const fs = require('fs-extra')
const _ = require('lodash')

const distDir = `npm-scripts/placehold/dist`

const saveMv = async () => {
  const ids = _.times(20, (n) => {
    return n + 1
  })
  for (let id of ids) {
    const mvName = `mv-${id}`
    const thumName = `thum-${id}`
    fs.writeFileSync(
      `${distDir}/${mvName}.jpg`,
      await download(`https://picsum.photos/id/${id + 10}/1600/900`),
    )
    fs.writeFileSync(
      `${distDir}/${thumName}.jpg`,
      await download(`https://picsum.photos/id/${id + 10}/600/400`),
    )
    console.log({ save: id })
  }
}

const main = () => {
  fs.mkdirsSync(distDir)
  saveMv()
}

main()
