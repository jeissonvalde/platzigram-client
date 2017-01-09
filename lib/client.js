'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoint: {
        pictures: 'http://api.platzigram.com/picture',
        users: 'http://api.platzigram.com/user',
        auth: 'http://api.platzigram.com/auth'
      }
    }
  }

  getPicture (id, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/${id}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePicture () {}

  likePicture () {}

  listPictures () {}

  listPicturesByTag () {}

  saveUser () {}

  getUser () {}

  auth () {}
}

module.exports = Client

/*
Link
    c1t1 https://mega.nz/#!E58kwLbQ!ouiw362W6a5itPqY1sYld3q0Fby05grTwrwRZT1s4vk
    c2t1 https://mega.nz/#!k9dwwBqS!kj9mBOsSsk4rW5ZiIV3MVpcflzYyheiq5TnbuSTkDDs
    c3t1 https://mega.nz/#!M8VF0DSA!FOO7FJfP3NJeQmaPMFHbKLSeFtUgCScSeN-OFQtlr5I
    c4t1 https://mega.nz/#!8p1QyLha!x_Fs50WDlMLOJJOBzHsvVenrZ5EqNXob_47hqhx1Ssw
    c5t1 https://mega.nz/#!plc2GZLL!ob4gXFQi1Rw0_0jtuuE6GMopySChGbkN4BIGG5Ill8M
    */
