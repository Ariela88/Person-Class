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


    bestClientOfAll(){

        bestClient = []

        for (let i = 0; i < this.client.length; i++) {
            maxExp = maxExp+this.client[i].expanses

            if (v1 > v2) {
                return v1
                
            } else{
                return v2
            }
            
        } 
    }
    
}