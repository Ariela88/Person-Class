

class Employee extends Person {



    constructor(name, surname, dob, gender, department, clients = []) {
        super(name, surname, dob, gender);

        this.department = department;
        this.clients = clients;



    }

    toString() {

        const card = super.toString() +
            '\n' + ' Dipartimento: ' + this.department + '\n' +

            'Clienti: ' + this.clients + '\n' +

            'Il cliente che spende di più è ' + this.bestClient();

        return card;
    }

    addClient(client) {

        this.clients.push(client)

    }


    bestClient() {


        if (this.clients.length === 0) {
            return null

        }

        let bestClient = this.clients[0]

        for (let i = 1; i < this.clients.length; i++) {
            const client = this.clients[i];

            if (client.totalExpanses() > bestClient.totalExpanses()) {
                bestClient = client
            }

        }
        return bestClient
    }





    totalEarnings() {

        const earnings = this.clients.reduce((a, c) => a + c.totalExpanses, 0)
        return earnings
    }


}