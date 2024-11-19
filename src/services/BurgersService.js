
const FAKEDB = {
  burgers: [
    {
      name: 'cheeseburger',
      topping: 'cheese',
      size: 'large'
    },
    {
      name: 'baconburger',
      topping: 'bacon',
      size: 'large'
    },
    {
      name: 'veggieburger',
      topping: 'veggies',
      size: 'large'
    }
  ]
}

class BurgersService {


  getBurgers() {
    const burgers = FAKEDB.burgers
    return burgers
  }
}


export const burgersService = new BurgersService()