

module.exports = {
    routes: [
      { 
        method: 'POST',
        path: '/contact-request/createMessage', 
        handler: 'contact-request.createMessage',
        config: {
            "policies": []
          }
      }
    ]
  }