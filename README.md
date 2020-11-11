# Axerve-js
A Node.js module for axerve api
## Installation
```sh
npm install @mia-burton/axerve-js --save
yarn add @mia-burton/axerve-js
```

## Usage
```typescript
import { AxerveClient } from '@mia-burton/axerve-js'

const client = new AxerveClient(API_KEY, SHOP_LOGIN)

//Create order
client.createOrder(orderDetail)

//Submit payment
client.submitOrder(token, creditCard)

```
To override back-office user redirect url pass it to `submitOrder`
```typescript
//Submit payment
client.submitOrder(token, creditCard, successUrl, errorUrl)

```

## Enable sandbox env
On inizialization set `sandbox` parameter to true

## Test
```sh
npm run test
```
