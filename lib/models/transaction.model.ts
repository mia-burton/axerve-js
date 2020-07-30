export class Transaction {
  private readonly type: string
  private readonly result: string
  private readonly errorCode: string
  private readonly errorDescription: string
  private readonly bankId: string
  private readonly reference: string
  private readonly authorizationCode: string
  private readonly paymentId: string
  private readonly currency: string
  private readonly country: string
  private readonly company: string
  private readonly tdLevel: string
  private readonly alertCode: string
  private readonly alertDescription: string
  private readonly cvvPresent: string
  private readonly maskedPAN: string
  private readonly paymentMethod: string
  private readonly productType: string
  private readonly token: string
  private readonly tokenExpiryMonth: string
  private readonly tokenExpiryYear: string
  private readonly redirectUrl: string

  constructor(data: Record<string, any>) {
    this.type = data.transactionType
    this.result = data.transactionResult
    this.errorCode = data.transactionErrorCode
    this.errorDescription = data.transactionErrorDescription
    this.bankId = data.bankTransactionID
    this.reference = data.shopTransactionID
    this.authorizationCode = data.authorizationCode
    this.paymentId = data.paymentID
    this.currency = data.currency
    this.country = data.country
    this.company = data.company
    this.tdLevel = data.tdLevel
    this.alertCode = data.alertCode
    this.alertDescription = data.alertDescription
    this.cvvPresent = data.cvvPresent
    this.maskedPAN = data.maskedPAN
    this.paymentMethod = data.paymentMethod
    this.productType = data.productType
    this.token = data.token
    this.tokenExpiryMonth = data.tokenExpiryMonth
    this.tokenExpiryYear = data.TokenExpiryYear
    this.redirectUrl = data.userRedirect.href
  }
  /**
   * Get transaction type
   * @returns string
   */
  public getType(): string {
    return this.type
  }

  /**
   * Get transaction result (KO or OK)
   * @returns string
   */
  public getResult(): string {
    return this.result
  }

  /**
   * The error code, in case of errors
   * @returns string
   */
  public getErrorCode(): string {
    return this.errorCode
  }

  /**
   * A description in common language of the occurred error.
   * @returns string
   */
  public getErrorDescription(): string {
    return this.errorDescription
  }

  /**
   * code assigned by Axerve E-commerce Solutions this transaction.
   * @returns string
   */
  public getBankId(): string {
    return this.bankId
  }

  /**
   * shop transaction ID value
   * @returns string
   */
  public getReference(): string {
    return this.reference
  }

  /**
   * authorization code
   * @returns string
   */
  public getAuthorizationCode(): string {
    return this.authorizationCode
  }

  /**
   * The payment ID
   * @returns string
   */
  public getPaymentId(): string {
    return this.paymentId
  }

  /**
   * The currency ISO code
   * @returns string
   */
  public getCurrency(): string {
    return this.currency
  }

  /**
   * nationality of the card issuer
   * @returns string
   */
  public getCountry(): string {
    return this.country
  }

  /**
   * Card issuer company
   * @returns string
   */
  public getCompany(): string {
    return this.company
  }

  /**
   * The level of 3D-Secure authentication: FULL or HALF.
   * @returns string
   */
  public getTdLevel(): string {
    return this.tdLevel
  }

  /**
   * Alert code.
   * @returns string
   */
  public getAlertCode(): string {
    return this.alertCode
  }

  /**
   * A textual description of the alertCode.
   * @returns string
   */
  public getAlertDescription(): string {
    return this.alertDescription
  }

  /**
   * Credit Card security code flag
   * @returns string
   */
  public getCvvPresent(): string {
    return this.cvvPresent
  }

  /**
   * Masked Pan string
   * @returns string
   */
  public getMaskedPAN(): string {
    return this.maskedPAN
  }

  /**
   * Indicates the used Payment Method
   * @returns string
   */
  public getPaymentMethod(): string {
    return this.paymentMethod
  }

  /**
   * String containing Card Type
   * @returns string
   */
  public getProductType(): string {
    return this.productType
  }

  /**
   * String containing the token value
   * @returns string
   */
  public getToken(): string {
    return this.token
  }

  /**
   * String containing the token expiry month
   * @returns string
   */
  public getTokenExpityMonth(): string {
    return this.tokenExpiryMonth
  }

  /**
   * String containing the token expiry year
   * @returns string
   */
  public getTokenExpiryYear(): string {
    return this.tokenExpiryYear
  }

  /**
   * a URL to redirect the user for 3D-Secure authentication, or to pay on alternative payment systems.
   * @returns string
   */
  public getRedirectUrl(): string {
    return this.redirectUrl
  }
}