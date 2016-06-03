'use strict'

const fs = require('fs')
const request = require('request')

function getWebpage (url) {
  return new Promise (function (resolve, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        return reject(err)
      }

      resolve(body)
    })
  })
}

function writeFile (fileContent) {
  let filePath = 'page'
  return new Promise (function (resolve, reject) {
    fs.writeFile(filePath, fileContent, function (err) {
      if (err) {
        return reject(err)
      }

      resolve(filePath)
    })
  })
}

function saveWebpage (url, filePath) {
  return getWebpage(url, filePath)
    .then(writeFile)
}

module.exports = {
  saveWebpage
}
