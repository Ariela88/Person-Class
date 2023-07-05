

const order1 = new Order('palla',2,10)
// const order2 = new Orders()
// const order3 = new Orders()
// const order4 = new Orders()
// const order5 = new Orders()
// const order6 = new Orders()

const client1 = new Client('Pippo','dePippis',new Date(), 'male','via piantelli,2');
client1.addOrder(order1)
// const client2 = new Client()
// const client3 = new Client()
// const client4 = new Client()
// const client5 = new Client()

// client1.addOrder(order1)
// client1.addOrder(order2)
// client1.addOrder(order3)


const employee1 = new Employee('francesca','rossi',new Date(),'female','posteitaliane')

employee1.addClient(client1)
console.log(employee1)
// employee1.addClient(client2)



// const ui = new UI();

// ui.start();

console.log(order1)
console.log(client1)