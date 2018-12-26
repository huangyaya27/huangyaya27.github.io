# net_listening

Returns true if client is actively listening for network connections.

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
    -d '{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `LISTENING FLAG` - a boolean indicating whether the client is actively listening for network connections

#### BODY

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```
