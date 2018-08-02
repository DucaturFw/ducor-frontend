const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

router.get('/generate/:name/:type/:provider/:pair', ctx => {
  ctx.body = JSON.stringify({
    contract: "#include <eosiolib/eosio.hpp>\n#include <eosiolib/singleton.hpp>\n#include \"oraclized.hpp\"\n\nusing namespace eosio;\n\nstruct price\n{\n  uint64_t value;\n  uint8_t decimals;\n  \n\n  EOSLIB_SERIALIZE(price, (value)(decimals))\n};\n\n\ntypedef oraclized<N(ethbtc), 2000, 15, price> ethbtc_data;\ntypedef singleton<N(master), account_name> oraclize_master;\n\nclass YOUR_CONTRACT_NAME : public eosio::contract\n{\nprivate:\n\n  ethbtc_data ethbtc;\n\n  account_name master;\n\npublic:\n  using contract::contract;\n\n  YOUR_CONTRACT_NAME(account_name s) : contract(s), ethbtc(_self, _self)\n  {\n    master = oraclize_master(_self, _self).get_or_create(_self, N(undefined));\n  }\n\n  void setup(account_name administrator, account_name master, account_name registry)\n  {\n    require_auth(_self);\n    oraclize_master(_self, _self).set(master, _self);\n    ask_data(administrator, registry, \"0x363e7fe8b47534460fd06dafd5e18a542fe1aaa78038d7ca5e84694f99a788e5\");\n    \n  }\n\n  void ask_data(account_name administrator, account_name registry, std::string data)\n  {\n    action(permission_level{_self, N(active)},\n           registry, N(ask),\n           std::make_tuple(_self, data))\n        .send();\n  }\n  \n  void pushuint(account_name oracle, std::string data_id, uint64_t data) \n  {\n    require_auth(oracle);\n    \n  }\n  \n  void pushstr(account_name oracle, std::string data_id, std::string data) \n  {\n    require_auth(oracle);\n    \n  }\n  \n  void pushprice(account_name oracle, std::string data_id, price data) \n  {\n    require_auth(oracle);\n    \n    if (strcmp(data_id.c_str(), \"0x363e7fe8b47534460fd06dafd5e18a542fe1aaa78038d7ca5e84694f99a788e5\") == 0) \n    {\n      ethbtc.set(data, oracle);\n    }\n  }\n};\n\nEOSIO_ABI(YOUR_CONTRACT_NAME, (setup)(pushuint)(pushstr)(pushprice))",
    instructions: 'eos_contract_instructions'
  })
})

router.get('/config', ctx => {
  ctx.body = JSON.stringify({
    categories: [
      {
        "name": "crypto",
        "types": ["eth/btc", "ducat/eth", "ETHBTC", "LTCBTC", "BNBBTC", "NEOBTC", "QTUMETH", "EOSETH"],
        "providers": [
          {
            "id": "binance",
            "name": "Binance",
            "types": ["ETHBTC", "LTCBTC", "BNBBTC", "NEOBTC", "QTUMETH", "EOSETH"]
          },
          {
            "id": "ducatur",
            "name": "Ducatur Crypto",
            "types": ["eth/btc", "ducat/eth"]
          }
        ]
      },
      { "name": "stocks" },
      { "name": "sports" },
      { "name": "random" }
    ]
  })
})

app
  .use(cors({ credentials: true }))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8081)
