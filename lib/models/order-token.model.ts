export class OrderToken {
  private readonly token: string
  private readonly paymentId: string
  private readonly redirectUrl: string|null

  /**
   * Order token object
   *
   * @param token string - The token
   */
  constructor(token: string, paymentId: string, redirectUrl: string|null) {
    this.token = token
    this.paymentId = paymentId
    this.redirectUrl = redirectUrl
  }

  public getToken(): string {
    return this.token
  }

  public getPaymentId(): string {
    return this.paymentId
  }

  public getRedirectUrl(): string|null {
    return this.redirectUrl
  }
}