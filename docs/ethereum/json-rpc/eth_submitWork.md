# eth_submitWork

Used for submitting a proof-of-work solution.

### REQUEST

`POST https://<network>.infura.io/v3/YOUR-PROJECT-ID`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PAYLOAD
- `WORK ARRAY`
    - 8 Bytes - The nonce found (64 bits)
    - 32 Bytes - The header's pow-hash (256 bits)
    - 32 Bytes - The mix digest (256 bits)

#### EXAMPLE
```bash
## JSON-RPC over HTTPS POST
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}'

## JSON-RPC over websockets
## Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}
```

### RESPONSE

#### RESULT FIELDS
- `IS VALID FLAG` - returns true if the provided solution is valid, otherwise false.

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": false
}
```
