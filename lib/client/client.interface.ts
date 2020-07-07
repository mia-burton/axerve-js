import { OrderDetail } from "../models/order-detail.model"
import { OrderToken } from "../models/order-token.model"
import { CreditCard } from "../models/credit-card.model"
import { Transaction } from "../models/transaction.model"

export interface ClientInterface {
  /**
   * Used to create order to Axerve.
   * Recive an order-token to use as well as the redirectUrl to send the customer to Axerve to authorize the payment
   * @param orderDetail- OrderDetail object
   * @returns Promise<OrderToken>
  */
  createOrder(orderDetails: OrderDetail): Promise<OrderToken>

  /**
   * Enables merchants to perform authorization requests for all the payment methods enabled for the merchant.
   * Before calling this method, you MUST have already called POST payment/create.
   * In case the payment method requires a selected redirect it will provide the URL to redirect the customer.
   * @param token string - The payment token, created via payment/create
   * @param creditCard: CreditCard - Credit card data
   */
  submitOrder(token: string, creditCard: CreditCard): Promise<Transaction>
}