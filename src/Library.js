function createLibrary(name, shelves){
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};

function addBook(library, book){
  if (book.genre === "fantasy"){
    return library.shelves.fantasy.push(book)
  } else if (book.genre === "fiction") {
    return library.shelves.fiction.push(book)
  } else {
    return library.shelves.nonFiction.push(book)
  }
};


module.exports = {
  createLibrary,
  addBook,
  //checkoutBook
};
