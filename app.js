

const order1 = new Order('palla', 2, 10)
const order2 = new Order('matite', 23, 14)
const order3 = new Order('quaderni', 10, 15)
const order4 = new Order('puzzle', 1, 20)
const order5 = new Order('bicicletta', 1, 80)

const client1 = new Client('Pippo', 'dePippis', new Date(), 'male', 'via piantelli 7');
client1.addOrder(order1)


client1.addOrder(order2)
client1.totalExpanses()
console.log(client1)

const client2 = new Client('paolo', 'bonolis', new Date(), 'male', 'via pinetti 89');
client2.addOrder(order4)
client2.addOrder(order3)

client2.totalExpanses()
console.log(client2)



const client3 = new Client('maria', 'de filippi', new Date(), 'female', 'via roma 5');
client3.addOrder(order5)
client3.totalExpanses()
console.log(client3)


// const client5 = new Client()

// client1.addOrder(order1)
// client1.addOrder(order2)
// client1.addOrder(order3)


const employee1 = new Employee('francesca', 'rossi', new Date(), 'female', 'giocattoli')
const employee2 = new Employee('guido', 'barbisini', new Date(), 'male', 'cartoleria')

employee1.addClient(client1)
employee1.addClient(client2)

// employee1.bestClientOfAll()

employee2.addClient(client3)

// employee1.bestClientOfAll()

console.log(employee1)
console.log(employee2)
// // employee1.addClient(client2)



// // const ui = new UI();

// // ui.start();

// console.log(order1)
// console.log(client1)