'use strict'

import uuid from 'uuid-base62'

const fixtures = {
  getImage () {
    let id = uuid.uuid()
    return {
      description: `an #awesome picture with #tags #platzi`,
      tags: [ 'awesome', 'tags', 'platzi' ],
      uri: `https://platzigram.test/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      userId: uuid.uuid(),
      publicId: uuid.encoded(id),
      id: id,
      createdAt: new Date().toString()
    }
  },

  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }

    return images
  },

  getUser () {
    return {
      id: uuid.uuid(),
      name: 'A random user',
      username: 'platzigramer',
      createdAt: new Date().toString()
    }
  }
}

module.export = fixtures
