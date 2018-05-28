class ShoppingCart {
    constructor(numbers) {
        if (numbers) {
            this.numbers = numbers.slice(0, 4)
        } else {
            this.numbers = []
        }
    }

    scan(product) {
        let jacket = {
            itemId: 23,
            price: 5.75,
        }
        let sheet = {
            itemId: 12,
            price: 14.15,
        }

        let laptop = {
            itemId: 125,
            price: 1154.15,
        }

        let cap = {
            itemId: 916,
            price: 10.19,
        }

        let watch = {
            itemId: 315,
            price: 124.05,
        }

        if (this.numbers.length < 4) {
            this.numbers.push(product)
        } else {
            return "Your cart is full"
        }
    }

    remove(product) {
        if (this.numbers.length < 1) {
            return "Your cart is empty"
        } else {
            this.numbers.pop()
        }
    }

    discount(discPercent) {
        if (discPercent > 50) {
            discPercent = 50;
        }

        for (var i = 0; i < this.length; i++) {
            this.price = (this.price - ((this.price / 100) * discPercent));

        }
    }
    total() {
        return this.length;
    }

    items() {
        return this.numbers;
    };

}