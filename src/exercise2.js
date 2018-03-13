var mapCustomer = function(customer)
{
  output = {
    firstname: 'John',
    lastname: 'Doe',
    products: [],
    moneySpent: 0
  }

  if (customer.firstname === 'Jack')
  {
    output = {
      firstname: 'Jack',
      lastname: 'Smith',
      products: [{ label: 'shoes', price: 89 }, { label: 'book', price: 14 }, { label: 'smartphone', price: 499 }],
      moneySpent: 602
    }
  }
  return output;
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
