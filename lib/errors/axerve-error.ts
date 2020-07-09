import { ErrorInterface } from "./error.interface"

export class AxerveError extends Error {
  public readonly code: string

  constructor(error: ErrorInterface) {
    super(error.description)
    this.code = error.code
  }
}