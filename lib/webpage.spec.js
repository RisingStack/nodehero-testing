const fs = require('fs')
const request = require('request')

const expect = require('chai').expect

const webpage = require('./webpage')

describe('The webpage module', function () {
  it('saves the content', function * () {
    const url = 'google.com'
    const content = '<h1>title</h1>'
    const writeFileStub = this.sandbox.stub(fs, 'writeFile', function (filePath, fileContent, cb) {
      cb(null)
    })

    const requestStub = this.sandbox.stub(request, 'get', function (url, cb) {
      cb(null, null, content)
    })

    const result = yield webpage.saveWebpage(url)

    expect(writeFileStub).to.be.calledWith()
    expect(requestStub).to.be.calledWith(url)
    expect(result).to.eql('page')
  })
})
