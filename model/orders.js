class Order {


    constructor(product, quantity, unitPrice) {

        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;

    }




    get TotalPrice() {

        return this.unitPrice * this.quantity
    }


    toString() {


        const card =
            `Product: ${this.product}
        Prezzo unitario: ${this.unitPrice}
        Quantita: ${this.quantity} `

        return card
    }






}