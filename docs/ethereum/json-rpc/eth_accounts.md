# eth_accounts

Returns a list of addresses owned by client.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws
>{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `ADDRESSES` - arrays of hex codes as strings representing the addresses owned by the client

NOTE: While this JSON-RPC method is supported by Infura, it will *not* return any accounts.  Infura does not support "unlocking" accounts.  Instead, users should send already signed raw 
transactions using `eth_sendRawTransaction`.

#### BODY

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": []
}
```
