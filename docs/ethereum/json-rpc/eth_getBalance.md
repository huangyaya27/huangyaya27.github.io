# eth_getBalance

Returns the balance of the account of given address.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS
- `ADDRESS` _[required]_ - a string representing the address (20 bytes) to check for balance

- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `BALANCE` - integer of the current balance in wei.

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2fe84e3113d7b"
}
```
