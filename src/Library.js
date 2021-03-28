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


module.exports = {
  createLibrary,
  //addBook,
  //checkoutBook
};
