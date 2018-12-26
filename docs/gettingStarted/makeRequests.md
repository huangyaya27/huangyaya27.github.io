# Make Requests

### JSON-RPC Methods

Below is a quick command line example using `curl`:

```
# Be sure to replace YOUR-PROJECT-ID with a Project ID from your Infura dashboard
$ curl -X POST
-H "Content-Type: application/json" \
--data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}' \
"https://mainnet.infura.io/v3/YOUR-PROJECT-ID"
```

The result should look something like this:

```
$ {"jsonrpc": "2.0","result": "0x657abc", "id":1}
```

**NOTE:** "0x657abc" will be replaced with the block number of the most recent block on that network

[Read more about JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC)

It's important to note that JSON-RPC requests are transport agnostic, the same requests can be made over HTTPS, Websockets, or other message passing environments.  For example, the same request could be made with websockets:

```
# Be sure to replace YOUR-PROJECT-ID with a Project ID from your Infura dashboard
$ wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
> {"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}
< {"jsonrpc":"2.0","id":1,"result":"0x657abc"}
```

### Subscriptions and Filters

Note that the newer, experimental Ethereum "pub/sub" subscription support is only supported over "stateful" transports such as Websockets.  Subscription and filter requests *cannot* be made over HTTPS.

[Read more about RPC PUB SUB](https://github.com/ethereum/go-ethereum/wiki/RPC-PUB-SUB)

