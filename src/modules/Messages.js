
class Message {
 /* Get users By limit 50 */

 async GetMessagesSent(userId) {

  const data = await fetch(`${global.baseUrl}/message/getMessagesSent?userId=${userId}`)

  const json = await data.json();
  console.log(json)
  return json
}
 async GetMessagesReceiver(userId) {

  const data = await fetch(`${global.baseUrl}/message/getMessagesReceiver?userId=${userId}`)

  const json = await data.json();
  console.log(json)
  return json
}

 async createNew(message) {

    const data = await fetch(`${global.baseUrl}/message/createNew`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    })

    const json = await data.json()
    return json
  }


}

export default new Message();