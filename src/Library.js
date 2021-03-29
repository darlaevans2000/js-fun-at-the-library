function createLibrary(name, shelves) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};

function addBook(library, book) {
  if (book.genre === "fantasy") {
    return library.shelves.fantasy.push(book)
  } else if (book.genre === "fiction") {
    return library.shelves.fiction.push(book)
  } else {
    return library.shelves.nonFiction.push(book)
  }
};

function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
