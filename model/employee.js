class Employee extends Person {

    
    
    constructor (name, surname, dob, gender, dipartment, client = [], bestClient = []){
        super(name, surname, dob, gender);
        
        this.dipartment = dipartment;
        this.client = client;
        this.bestClient = bestClient
        

    }

    toString() {

        const card = 
        '\n' + ' Dipartimento: ' + this.dipartment + '\n' +

            'Clienti: ' + this.clients + '\n'+

            'Il cliente che spende di più è ' + this.client.bestClient ;

        return card;
    }

    addClient(client){

        this.client.push(client)
      
    }


    // bestClientOfAll(){


    //     for (let i = 0; i < this.client.expanses.length; i++) {
    //         const money = this.client.expanses.length[i]
    //         this.bestClient.push(money)

            
       
    //     } return this.bestClient.reduce((a,b)=>a>b?a:b)
    // }
    
}