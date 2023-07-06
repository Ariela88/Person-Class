class Person {
    constructor(name, surname, dob, gender) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;

        // this.age = age creare funzione per calcolare l'età
    }


    toString() {

        const card = '\n Nome: ' + this.name + '\n' +

            ' Cognome: ' + this.surname + '\n' +

            ' Data di nascita: ' + this.dob + '\n' +

            'Età: ' + this.age + '\n'

        ' Genere: ' + this.gender + '\n';


        return card;
    }


    addClient(client) {

        this.client.push(client)

    }


    get age() {

        const nowTimeStamp = new Date().getTime();

        const dobTimeStamp = this.dob.getTime();

        const deltaTimeStamp = nowTimeStamp - dobTimeStamp;

        const age = Math.floor(deltaTimeStamp / (1000 * 60 * 60 * 24 * 365))

        return age

    }



}

