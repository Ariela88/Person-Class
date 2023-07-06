

const order1 = new Order('palla', 2, 10)
const order2 = new Order('matite', 23, 14)
const order3 = new Order('quaderni', 10, 15)
const order4 = new Order('puzzle', 1, 20)
const order5 = new Order('bicicletta', 1, 80)

const client1 = new Client('Pippo', 'dePippis', new Date(1993,4,29), 'male', 'via piantelli 7');
const client2 = new Client('paolo', 'bonolis', new Date(1990,5,20), 'male', 'via pinetti 89');
const client3 = new Client('maria', 'de filippi', new Date(1980,2,6), 'female', 'via roma 5');

const employee1 = new Employee('francesca', 'rossi', new Date(1981,6,2), 'female', 'giocattoli')
const employee2 = new Employee('guido', 'barbisini', new Date(1970,10,13), 'male', 'cartoleria')

const dob = new Date(1978,2,2)
const person6 = new Person ('Andrea','Asioli',dob,'male')
console.log(person6)
console.log(order1.TotalPrice)



client1.addOrder(order1)
console.log(client1)
client1.addOrder(order2)

client1.totalExpanses()
console.log(client1)
console.log(client1.age)

client2.addOrder(order4)
client2.addOrder(order3)
client2.totalExpanses()
console.log(client2)


client3.addOrder(order5)
client3.totalExpanses()
console.log(client3)


employee1.addClient(client1)
employee1.addClient(client2)
employee2.addClient(client3)



console.log(employee1)
console.log(employee2)

// const ui = new UI();

// ui.start();

console.log(order1)
console.log(client1)


console.log(employee1.toString())

