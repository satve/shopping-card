class Database {
  constructor(numbers) {
    if(numbers) {
      this.numbers = numbers.slice(0,16)
    } else {
      this.numbers = []
    }
  }

  add(value) {
    if(this.numbers.length < 16) {
      this.numbers.push(value) 
    } else {
      return "Database is full"
    }
  }

  remove() {
    if (this.numbers.length < 1) {
      return "Database is empty"
    } else {
      this.numbers.pop()
    }
  }

  fetch() {
    return this.numbers
  }
}