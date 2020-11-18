
// For this dojo you must use the reduce method
// The function takes an array of orders in parameter. 
// You must generate a summary of orders as an object whose keys 
// represent the users and whose value represents the total to be paid 
// be careful ! some users ordered different products ! 
// You must not duplicate this users in your result object 

const orders = [
  {
    user: "Georges",
    amount: 23.7,
  },
  {
    user: "Peter",
    amount: 54.2,
  },
  {
    user: "Steven",
    amount: 35,
  },
  {
    user: "Dave",
    amount: 200,
  },
]

function calcOrderSummary(ordersArr) {

}

module.exports = calcOrderSummary;