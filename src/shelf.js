function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == book) {
      shelf.splice(i, 1)
    }
  }
  return shelf
};

module.exports = {
  shelfBook,
  unshelfBook,
  //listTitles,
  //searchShelf
};
