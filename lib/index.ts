import * as changeCase from 'change-case'
import * as request from 'request-promise'

import { Customer } from './api'

import './schema'
const urlQuery = 'https://api.yourdatadelivery.com/service/rest/IDComplete'

export class Infutor {
  public customer // : Customer

  private config: {
    apiKey?: string,
    login?: string,
    password?: string,
    transform?: boolean,
    debug?: boolean
  } = {}

  constructor(config) {
    this.config = this.configure(config)

    this.customer = Customer

    // bind `this` context
    const methods = [ 'customer' ]
    methods.forEach((cat) => {
      Object.keys(this[cat]).forEach((key) => {
        this[cat][key] = this[cat][key].bind(this)
      })
    })
  }

  /**
   * Configure NMI client
   * @name configure
   * @param {Object} options
   * @param {string} options.apiKey       api key
   * @param {string} options.username     username
   * @param {string} options.password     password
   * @param {bool}   options.transform    disable transformations
   * @param {bool}   options.debug        output verbose debug information
   */
  configure(options) {
    return {
      apiKey: options.apiKey || this.config.apiKey || '',
      login: options.login || this.config.login || '',
      password: options.password || this.config.password || '',
      transform: options.transform !== false,
      debug: options.debug || false
    }
  }

  /**
   * Transform json input (before XML builder)
   * @param {*} obj
   * @param key
   */
  transformJson(obj, key = null) {
    if (!this.config.transform) {
      return obj;
    }
    return obj
  }

  /**
   * Query for data
   * @name query
   * @param {Query} qs query string
   */
  query(qs: {[key: string]: any, login?: string, password?: string} = {}) {
    qs.response = 'json'
    qs.login = qs.login || this.config.login
    qs.password = qs.password || this.config.password

    return request({
      method: 'GET',
      url: urlQuery,
      qs: qs,
      strictSSL: true
    })
      .then((res) => {
        if(res.ResponseCode && res.ResponseCode !== 0) {
          res.isInfutor = true
          throw this.transformJson(res)
        }
        else {
          return this.transformJson(res)
        }
      })
  }
}
