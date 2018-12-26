# eth_getUncleCountByBlockNumber

Returns the number of uncles in a block from a block matching the given block number.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS
- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["0x5bad55"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["0x5bad55"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `BLOCK TRANSACTION COUNT` - a hex code of the integer representing the number of uncles in the provided block

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```
