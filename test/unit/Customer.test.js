const Infutor = require('../../dist').Infutor
describe('#Customer', () => {
  let infutor

  beforeEach(() => {
    infutor = new Infutor()
    infutor.configure({
      login: process.env.LOGIN,
      password: process.env.PASSWORD
    })
  })
  it('should get customer', (done) => {
    infutor.customer.get({
      FName: 'Scott',
      LName: 'Wyatt',
      Phone: '7658943429',
      Email: 'scottwyatt86@gmail.com'
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
