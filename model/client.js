class Client extends Person {

    constructor(name, surname, dob, gender, address, orders = [], expanses = []) {
        super(name, surname, dob, gender);

        this.address = address;
        this.orders = orders;
        this.expanses = expanses
        


    }

    toString() {

        const card =
            ' Indirizzo: ' + this.address + '\n' +

            ' Ordine: ' + this.orders + '\n';

        return card;
    }



addOrder(order){

    this.orders.push(order)
  
}

totalExpanses(unitPrice){
    this.expanses.push(unitPrice)


   }



}





