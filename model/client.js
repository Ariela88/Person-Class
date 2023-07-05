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

            ' Ordine: ' + this.orders + '\n' +

            'Spese totali: ' + this.expanses;

        return card;
    }



addOrder(order){

    this.orders.push(order)
  
}

totalExpanses(){
    let total = 0
    for (let i = 0; i < this.orders.length; i++) {
        total=total+this.orders[i].unitPrice
        
    }this.expanses.push(total)


    } 
   
    

   }









