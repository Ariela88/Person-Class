class Employee extends Person {

    
    
    constructor (name, surname, dob, gender, dipartment, client = []){
        super(name, surname, dob, gender);
        
        this.dipartment = dipartment;
        this.client = client;
        

    }

    toString() {

        const card = 
        '\n' + ' Dipartimento: ' + this.dipartment + '\n' +

            'Clienti: ' + this.clients + '\n';

        return card;
    }

    addClient(client){

        this.client.push(client)
      
    }
    
}