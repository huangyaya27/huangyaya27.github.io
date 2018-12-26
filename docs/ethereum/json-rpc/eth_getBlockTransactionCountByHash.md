# eth_getBlockTransactionCountByHash

Returns the number of transactions in the block with the given block hash.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS
- `BLOCK HASH` _[required]_ - a string representing the hash (32 bytes) of a block

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `BLOCK TRANSACTION COUNT` - a hex code of the integer representing the number of transactions in the provided block

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x50"
}
```
