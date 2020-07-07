export class CreditCard {
  private readonly number: string
  private readonly expMonth: string
  private readonly expYear: string
  private readonly CVV: string
  private DCC: boolean = false

  constructor(number: string, expMonth: string, expYear: string, CVV: string) {
    this.number = number
    this.expMonth = expMonth
    this.expYear = expYear
    this.CVV = CVV
  }

  public enableCurrencyConversion() {
    this.DCC = true
  }

  public getNumber(): string {
    return this.number
  }

  public getExpMonth(): string {
    return this.expMonth
  }

  public getExpYear(): string {
    return this.expYear
  }

  public getCVV(): string {
    return this.CVV
  }

  public isCurrencyConversionEnabled(): boolean {
    return this.DCC
  }
}