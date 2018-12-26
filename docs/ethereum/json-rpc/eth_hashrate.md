# eth_hashrate

Returns the number of hashes per second that the node is mining with. Only applicable when the node is mining.

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
    -d '{"jsonrpc":"2.0","method":"eth_hashrate","params": [],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_hashrate","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `HASHRATE` - a hex code of an integer representing the number of hashes per second.

#### BODY

NOTE: Infura will always return a `0x0` mining hash rate.

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}
```
