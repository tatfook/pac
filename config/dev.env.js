'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  KEEPWORK_API_PREFIX: `"https://stage.keepwork.com/api/wiki/models"`,
  GITLAB_API_PREFIX: `"https://api-stage.keepwork.com/git"`,
  IICC_WEBSITE_ID: '5'
})
