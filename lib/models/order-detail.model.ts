/**
 * Class OrderDetail
 *
 */
export class OrderDetail
{
  private readonly amount: string
  private readonly currency: string
  private readonly shopTransactionID: string

  /**
   * The order detail to pass at scalpay
   * @param amount string - The amount to capture
   * @param currency string - ISO currency code
   * @param reference string - The shop transaction ID
   */
  constructor(amount: string, currency: string, reference: string) {
    this.amount = amount
    this.currency = currency
    this.shopTransactionID = reference
  }

  public getAmount(): string {
    return this.amount
  }

  public getCurrency(): string {
    return this.currency
  }

  public getReference(): string {
    return this.shopTransactionID
  }
}
