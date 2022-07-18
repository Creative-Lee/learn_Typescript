type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.letter] === undefined) {
      this.words[word.letter] = word.definition;
    }
  }
}

class Word {
  constructor(public letter: string, public definition: string) {}
}

const dictionary = new Dict();
const kimchi = new Word("kimchi", "한국의 자랑");
