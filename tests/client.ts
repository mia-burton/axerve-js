import AxerveClient, { OrderDetail, CreditCard } from '../lib'

import * as chai from 'chai';
import * as nock from 'nock'
import { expect } from 'chai';

describe('Axerve client', () => {
  beforeEach(() => {
    nock('https://sandbox.gestpay.net/api/v1')
      .post('/payment/create/')
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        "error": {
          "code": "0", // everything ok!
          "description": "request correctly processed"
        },
        "payload": {
          "paymentToken": "1c3f27af-1997-4761-8673-b94fbe508f31",
          "paymentID": "1081814508",
          "userRedirect": {
            "href": null
          }
        }
      })
      .post('/payment/submit/')
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        "error":{
          "code":"0",
          "description":"request correctly processed"
        },
        "payload":{
          "transactionType":"submit",
          "transactionResult":"",
          "transactionErrorCode":"8006",
          "transactionErrorDescription":"Verify By Visa",
          "paymentID":"1546124641",
          "userRedirect":{
            "href":"https://sandbox.gestpay.net/pagam/pagam3d.aspx?a=GESPAY65987&b=40cd411e-39a3-430f-b964-cb2018cd51a2&axerve3D=True"
          }
        }
      })
      .post('/payment/submit/')
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        "error":{
          "code":"0",
          "description":"request correctly processed"
        },
        "payload":{
          "transactionType":"submit",
          "transactionResult":"OK",
          "paymentID":"1700444660",
          "userRedirect":{
            "href":"https://hype-app.github.io/gestpay-doc-beta/demo/response.html"
          }
        }
      })
  });

  const client = new AxerveClient('qhtfs87hjnc12kkos', 'GESPAY65987', true)
  let token = ''

  it('should create order' , async () => {
    const order = new OrderDetail('100', 'EUR', 'AAA')
    const tokenResponse = await client.createOrder(order)
    expect(tokenResponse).to.be.an('object').that.have.property('token').that.is.a('string')
    expect(tokenResponse).to.be.an('object').that.have.property('paymentId').that.is.a('string')
    expect(tokenResponse).to.be.an('object').that.have.property('redirectUrl').that.is.a('string')
    token = tokenResponse.getToken()
  });

  it('should submit order 3d secure' , async () => {
    const card = new CreditCard(
      '4012001037141112',
      '05',
      '30',
      '123'
    )
    const res = await client.submitOrder(token, card)
    expect(res).to.be.an('object').that.have.property('transactionErrorCode').that.is.a('string').that.to.equal('8006')
  })

  it('should submit order not 3d secure' , async () => {
    const card = new CreditCard(
      '4012001037141112',
      '05',
      '30',
      '123'
    )
    const res = await client.submitOrder(token, card)
    expect(res).to.be.an('object').that.have.property('transactionType').that.is.a('string').that.to.equal('submit')
  })
});