describe("Database", () => {

  it("Should add an element to the end of the database", () => {
    const database = new Database();
  
    database.add(4)
    expect(database.fetch()).toEqual([4])

    database.add(5)
    expect(database.fetch()).toEqual([4, 5])
  })

  it("Should only allow 16 elements to be stored", () => {
    const database = new Database();
    database.add(1)
    database.add(2)
    database.add(3)
    database.add(4)
    database.add(5)
    database.add(6)
    database.add(7)
    database.add(8)
    database.add(9)
    database.add(10)
    database.add(11)
    database.add(12)
    database.add(13)
    database.add(14)
    database.add(15)
    database.add(16)

    expect(database.add(17)).toBe("Database is full")
  })

  it("Should remove the last item in the database", () => {
    const database = new Database();
    database.add(1)
    database.add(2)
    database.add(3)
    database.remove()
    
    expect(database.fetch()).toEqual([1,2])

  })

  it("Should only take 16 items at once in the constructor", () => {
    const database = new Database([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);

    expect(database.fetch()).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
  })

  it("Should remove the last item in the database if it's not empty", () => {
    const database = new Database();
    
    expect(database.remove()).toBe("Database is empty")
  })

  it("SHould build a new database by taking paramteres into the constructor", () => {
    const database = new Database([1,2,3,4,5]);
    expect(database.fetch()).toEqual([1,2,3,4,5])
  })

})