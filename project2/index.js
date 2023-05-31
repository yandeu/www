// TODO: Erhöhe das Alter um 2 Jahre.
let age = 22
expect(age).toBe(24)

// TODO: Füge den Nachnamen "Müller" hinzu.
let name = "John"
expect(name).toBe("John Müller")

// TODO: Bringe den Hund zum Bellen.
class Animal {
  type
  
  constructor(type) {
    this.type = type
  }

  makeSound() {
    if(this.type === "dog") {
      return "Wuff"
    }
    else if(this.type === "cat") {
      return "Miau"
    }
  }
}
let animal = new Animal()
let sound = animal.makeSound()
expect(sound).toBe("Wuff")
