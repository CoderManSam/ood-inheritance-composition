const LibraryItem = require('../src/Libraryitem.js')
const Author = require('../src/Author.js')

class Article extends LibraryItem {
  constructor(title, author) {
    super(title)
    this.onLoan = false
    this.author = author
  }

}

module.exports = Article
