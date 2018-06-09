console.log("eos front end");

Eos = require('eosjs') // Eos = require('./src')

eos = Eos() // 127.0.0.1:8888



// All API methods print help when called with no-arguments.

console.log("################justGetBlock######################")
eos.getBlock()
console.log("##############################################")

// Next, you're going to need nodeosd running on localhost:8888 (see ./docker)

// If a callback is not provided, a Promise is returned
eos.getBlock(1).then(result => {
console.log("################Block######################")
	console.log(result)
console.log("##############################################")
})

// // Parameters can be sequential or an object
// eos.getBlock({block_num_or_id: 1}).then(result => {
// console.log("################Block######################")
// 	console.log(result)
// console.log("################Block######################")
// })

// Callbacks are similar
// callback = (err, res) => {err ? console.error(err) : console.log(res)}
// eos.getBlock(1, callback)
// eos.getBlock({block_num_or_id: 1}, callback)

// Provide an empty object or a callback if an API call has no arguments

eos.getInfo({}).then(result => {
console.log("################Info######################")
	console.log(result)
console.log("##############################################")
})

config = {
  // chainId: null, // 32 byte (64 char) hex string
  keyProvider: ['5HwGeQ3Meogxg6psEAyXqEYXDzUYooYRrLDhCoXedWHkaUcTjCp', '5Kb3R31oW1xjAbwVcXHrvLHcxuQjmNvZYvcE4DQkXyV4pUC3DZX'], // WIF string or array of keys..
  httpEndpoint: 'http://127.0.0.1:8888',
  expireInSeconds: 60,
  broadcast: true,
  debug: false, // API and transactions
  sign: true
}

eos = Eos(config)


eos.transaction({
 actions: [
   {
     account: 'example',
     name: 'hi',
     authorization: [{
       actor: 'testacc',
       permission: 'owner'
     }],
     data: {
       user: 'andrew'
       // from: 'inita',
       // to: 'initb',
       // quantity: '7 SYS',
       // memo: ''
     }
    }
  ]
}).then(result => {
	console.log('GOOOD', result)

}).catch(error => {
	console.log('BADDDD', error)}
)
