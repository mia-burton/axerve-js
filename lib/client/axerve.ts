import axios, { AxiosInstance } from 'axios'
import { OrderDetail } from '../models/order-detail.model'
import { OrderToken } from '../models/order-token.model'
import { AxerveError } from '../errors/axerve-error'
import { CreditCard } from '../models'
import { Transaction } from '../models/transaction.model'

export class AxerveClient {
  private readonly PRODUCTION_URI = 'https://ecomms2s.sella.it/api/v1'
  private readonly SANDBOX_URI = 'https://sandbox.gestpay.net/api/v1'

  private readonly apiKey: string
  private readonly shopLogin: string
  private readonly sandbox: boolean
  private restClient: AxiosInstance

  /**
   * Create a ScalaPay client
   * @param apiKey string - The merchant API key can be found in Axerve Merchant Back-Office.
   * @param shopLogin string - Your shop login
   * @param sandbox boolean - Enable sandbox env
   */
  constructor(apiKey: string, shopLogin: string, sandbox: boolean = false) {
    this.apiKey = apiKey
    this.shopLogin = shopLogin
    this.sandbox = sandbox
    this.restClient = this.initAxios()
  }

  public async createOrder(orderDetail: OrderDetail): Promise<OrderToken> {
    try {
      const body = {
        shopLogin: this.shopLogin,
        ...orderDetail
      }
      const res = await this.restClient.post('/payment/create/', body)
      if (parseInt(res.data.error.code) !== 0) {
        throw new AxerveError(res.data.error)
      }
      const token = new OrderToken(res.data.payload.paymentToken, res.data.payload.paymentID, res.data.payload.userRedirect.href)
      return token
    } catch(err) {
      if (err.response && err.response.data && err.response.data.error) {
        throw new AxerveError(err.response.data.error)
      }
      throw err
    }
  }

  public async submitOrder(token: string, creditCard: CreditCard): Promise<Transaction> {
    try {
      const body = {
        shopLogin: this.shopLogin,
        paymentTypeDetails: {
          creditcard: creditCard
        }
      }
      const res = await this.restClient.post('/payment/submit/', body, {
        headers: {
          'Content-Type': 'application/json',
          paymentToken: token,
        }
      })
      if (parseInt(res.data.error.code) !== 0) {
        throw new AxerveError(res.data.error)
      }
      const transaction = new Transaction(res.data.payload)
      return transaction
    } catch(err) {
      if (err.response && err.response.data && err.response.data.error) {
        throw new AxerveError(err.response.data.error)
      }
      throw err
    }
  }

  private initAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.sandbox === true ? this.SANDBOX_URI : this.PRODUCTION_URI,
      headers: {
        Authorization: `apikey ${this.apiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
