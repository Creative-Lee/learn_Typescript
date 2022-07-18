abstract class Abstract {
  constructor(protected firstName: string, protected lastName: string) {}

  abstract speak(): string;
}

class Test extends Abstract {
  speak() {
    return `${this.firstName} ${this.lastName}`;
  }
}
