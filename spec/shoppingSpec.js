describe("ShoppingCart", () => {

    it("Should add an element to the end of the shoppingCart", () => {
        const shoppingcart = new ShoppingCart();
        shoppingcart.scan(1)
        shoppingcart.scan(2)
        shoppingcart.scan(3)
        shoppingcart.scan(4)
        shoppingcart.scan(5)
        expect(shoppingcart.scan(6)).toBe("Your cart is full")
    })

    it("Should remove the last item in the shoppingCart if it's not empty", () => {
        const shoppingcart = new ShoppingCart();
        expect(shoppingcart.remove()).toBe("Your cart is empty")
    })

    it("should discount items upto 50%", () => {
        const shoppingcart = new ShoppingCart();
        expect(shoppingcart.discount()).toEqual([])
    })

    it("total number of items" , () => {
        const shoppingcart = new ShoppingCart();
        expect(shoppingcart.items()).toBe([4]);

    })
})