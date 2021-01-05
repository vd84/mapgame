export const ws = new WebSocket('ws://localhost:8020')

ws.onopen = () => {
    // on connecting, do nothing but log it to the console
    console.log('connected')
}

ws.onmessage = evt => {
    // listen to data sent from the websocket server
    const message = JSON.parse(evt.data)
    console.log(message)
}
ws.onclose = () => {
    console.log('disconnected')
    // automatically try to reconnect on connection loss

}