import '../schema'

export const Customer = {

  /**
   * Get a customer
   *
   * @name customer.get
   * @param {[key: string]: any} customer
   * @returns {GetCustomerResponse}
   */
  get: async function(customer = {}) {
    let res = await this.query(customer)
    return JSON.parse(res)
  },
}
