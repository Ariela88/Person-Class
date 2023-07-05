class Person {
        constructor(name, surname, dob, gender,/*age*/) {
        this.name = name;
        this.surname = surname;
        this.dob = dob
        this.gender = gender;
        // this.age = age creare funzione per calcolare l'età
    }


    toString() {

        const card = '\n Nome: ' + this.name + '\n' +

            ' Cognome: ' + this.surname + '\n' +

            ' Data di nascita: ' + this.dob + '\n' +

            ' Genere: ' + this.gender + '\n';
            
        return card;
    }


}

