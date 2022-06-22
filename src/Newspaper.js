const LibraryItem = require('../src/Libraryitem.js')

class Newspaper extends LibraryItem {

  checkIn() {
    throw new Error('newspapers are not available for loan')
  }

  checkOut() {
    throw new Error('newspapers are not available for loan')
  }
}

module.exports = Newspaper
