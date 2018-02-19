function shout(string) {
  return string.toUpperCase ()
}
function whisper(string) {
  return string.toLowerCase ()
}
function logShout(string){
  console.log('HELLO')
}
spy('hello')
function logWhisper(string) {
  console.log('hello')
}
spy('HELLO')