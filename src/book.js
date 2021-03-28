function createTitle(title) {
      return `The ${title}`
    };

function buildMainCharacter(name, age, pronouns) {
      return {
        name: name,
        age: age,
        pronouns: pronouns,
      }
    };

function saveReview(review, reviews) {
      if (!reviews.includes(review)) {
        reviews.push(review)
      }
    };

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  //calculatePageCount,
  //writeBook,
  //editBook
}
