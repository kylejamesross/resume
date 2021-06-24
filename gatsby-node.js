/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(
    `https://gitconnected.com/v1/portfolio/kylejamesross`
  )
  const resultData = await result.json()

  createNode({
    nameWithOwner: resultData.basics.name,
    url: resultData.basics.url,
    id: `portfolio-kylejamesross`,
    parent: null,
    children: [],
    ...resultData,
    internal: {
      type: `dataJson`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
