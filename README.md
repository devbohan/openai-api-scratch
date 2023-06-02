# build
## install packages
[interacting..](https://blog.bitsrc.io/interacting-with-openai-in-node-js-and-express-647e771fc4ad)

```npm init```
```npm install express openai dotenv @babel/core @babel/cli @babel/preset-env```

## bash for req

``` bash
curl -X POST \
  http://localhost:5000/ask \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_TOKEN_HERE' \
  -d '{ "prompt": "What is the typical weather in Dubai?" }'
```