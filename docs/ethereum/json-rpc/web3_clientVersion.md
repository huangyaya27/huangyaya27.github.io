# web3_clientVersion

Returns the current client version.

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
    -d '{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `STRING` - The current client version

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Geth/v1.8.15-omnibus-255989da/linux-amd64/go1.10.1"
}
```
