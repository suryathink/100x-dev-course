Request 1
link ->  ws://localhost:8080

payload 

{
    "type":"SUBSCRIBE",
    "room":"room1"
} 
---------------------------------------
request 2

link -> ws://localhost:8081

payload 


{
    "type":"SUBSCRIBE",
    "room":"room1"

}
-----------------------------------
Request 3

link -> ws://localhost:8081

payload 

{
    "type":"sendMessage",
    "room":"room1",
    "message":"hi ther dde"
}
