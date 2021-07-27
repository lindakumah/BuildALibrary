class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(val){
      return this._ischeckedOut = val;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this.isCheckedOut
    }
    getAverageRating() {
      let sumOfRatings = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return sumOfRatings/this.ratings.length;
    }
    addRating(rating) {
      this.ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this.pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super();
      this._director = director;
      this._runtime = runtime;
    }
    get director() {
      return this._director;
    }
    get runtime() {
      return this._runtime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());

  const speed = new Movie('Jan de Bont', 'speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());