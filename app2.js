var data={ 
    "wuthering heights" : { 
        "session0" : { 
            "start" : "tstamp", 
            "stop" : "tstamp" 
        }, 
        "session1" : { 
            "start" : "tstamp", 
            "stop" : "tstamp" 
        } 
    }
} 
var books=Object.keys(data);
for(var i=0;i<books.length;i++){
    console.log('name of book : ',data[books[i]]);
    var sessions=Object.keys(data[books[i]]);
    console.log(sessions);
    for(var j=0;j<sessions.length;j++){
        console.log(sessions[j]);
        console.log('name of book : ',data[books[i]][sessions[j]['start']]);
    }
}
console.log(data[books[i]]['session0']['start']);