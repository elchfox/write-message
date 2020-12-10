
class Account {
 /* Get users By limit 50 */
 async GetSearchAll() {

    const data = await fetch(`${global.baseUrl}/user/findAll`)

    const json = await data.json()
    return json
  }

  async SignUp(user) {
        console.log(`${global.baseUrl}/user/signUp`)
        const data = await fetch(`${global.baseUrl}/user/signUp`,{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
     
        const json = await data.json()
        return json
      }
    
    
      async SignIn(user) {
        const data = await fetch(`${global.baseUrl}/user/signIn`,{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
     
        const json = await data.json()
        return json
      }
    

      async FindUser(username) {
        const data = await fetch(`${global.baseUrl}/user/findUser?username=${username}`)
     
        const json = await data.json()
        return json
      }
}

export default new Account();