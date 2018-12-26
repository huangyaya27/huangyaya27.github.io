# eth_mining

Returns true if client is actively mining new blocks.

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
    -d '{"jsonrpc":"2.0","method":"eth_mining","params": [],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_mining","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `IS MINING FLAG` - a boolean indicating if the client is mining

#### BODY

NOTE: Infura will always return `false` in response to `eth_mining`.

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": false
}
```
