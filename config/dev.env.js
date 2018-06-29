'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  KEEPWORK_API_PREFIX: `"${location.protocol}//fix.pac.stage.keepwork.com/api/wiki/models"`,
  GITLAB_API_PREFIX: `"${location.protocol}//api-stage.keepwork.com/git"`,
  IICC_WEBSITE_ID: '5'
})
