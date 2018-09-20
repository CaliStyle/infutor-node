const Infutor = require('../../dist').Infutor
describe('#Customer', () => {
  let infutor

  beforeEach(() => {
    infutor = new Infutor({
      login: process.env.LOGIN,
      password: process.env.PASSWORD
    })
  })
  it('should get customer', (done) => {
    infutor.customer.get({
      fname: 'John',
      lname: 'Smith',
      phone: '1234567890'
    })
      .then(customer => {
        console.log('RESULT', customer)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
