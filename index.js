const axios = require('axios')


//trackio connection class

/*
    Initialise connection instance before sending signals to trackio server.
    This gives the oppurtunity to connect to multiple servers if required
*/

class ClientConnection {
  constructor(hostname,port, protocol = 'http'){
    /*
      hostname => String
      port => String
      protocol => String
      Hostname and port number of the trackio server that is listening
      hostname:port
      eg: localhost:5000
    */
    this.hostname = hostname
    this.port = port
    this.protocol = protocol
  }

  /*
      Obtain useragent information from endpoint, pass it as argument and send as POST body to trackio node server
  */

  sendSignal(useragent){
    /*
      useragent => JSON

    */
    axios.post(this.protocol + '://' + this.hostname + ':' + this.port , {information: useragent} ).then((res) => {
      console.log("userAgent Signal Sent Succesfully")
    }).catch((err) => {
      console.error(err)
    })

  }

}




module.exports = ClientConnection