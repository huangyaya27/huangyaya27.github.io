# eth_getWork

Returns the hash of the current block, the seedHash, and the boundary condition to be met ("target").

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
    -d '{"jsonrpc":"2.0","method":"eth_getWork","params": [],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_getWork","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `WORK ARRAY`
    - 32 Bytes - current block header pow-hash
    - 32 Bytes - the seed hash used for the DAG.
    - 32 Bytes - the boundary condition ("target"), 2^256 / difficulty.


#### BODY

NOTE: While Infura will allow this method, `eth_getWork` will never actually return mining work.

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32000,
    "message": "no mining work available yet"
  }
}
```
