var modal = document.getElementById("ssl_anim_box");

var btn = document.getElementById("ssl_learn");

var span = document.getElementById("close1");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

// update the message to be put in the moving box in message_content
// explanation of theirs in explanation
// length of both array should be same
var message_content = ["Key Exchange Protocol, Cipher, Hash, SSL Version, Random Number", 
"SSL Certificate => Issuer: XYZ, Valid: from-to, Public Key", 
"Client Key exchange, Change cipher spec, Finished", 
"Change cipher spec, Finished", 
"Data Transfer"];

var explanation = ['Client sends a hello msg to server with details of key exchange protocol (like rsa, dsa), cipher (for encryption), hash (for msg authentication code), SSL version and a random number(for generating encryption keys) Server and client agree on the details of the link as described',
 'Server sends its SSL certificate to client. It contains information about who the server belongs to, how long the certificate is valid for, and more information on the public key. Client verifies the certificate using some records that it has', 
 'Client sends a series of msg to server for client key exchange, to change cipher spec and then finally a "finished" message', 
 'Now, the server exchanges messages for changing the cipher specs and finally a "finished" message (which will be encrypted).', 
 'These series of exchanges will ensure a secure connection and then client and server can proceed to transfer data']

var count = -1;
function Proceed(){
    var message = document.getElementById("message");
    var moving_dabba = document.getElementById('moving_box');
    if (count < message_content.length-1){
        count = count + 1;
        message.innerHTML = explanation[count];
        moving_dabba.innerHTML = message_content[count];
        message.style.display = "flex";
        moving_dabba.style.display = 'flex';
        if (document.getElementById('moving_box').style.marginLeft == ''){
            document.getElementById('moving_box').style.marginLeft = '620px';
        }
        else {
            document.getElementById('moving_box').style.marginLeft = '';
        }
    }

}
function Go_Back(){
    var message = document.getElementById("message");
    var moving_dabba = document.getElementById('moving_box');

    if(count >0){
        count = count -1;
        message.innerHTML = explanation[count];
        moving_dabba.innerHTML = message_content[count];
        message.style.display = "flex";
        moving_dabba.style.display = 'flex';
        if (document.getElementById('moving_box').style.marginLeft == ''){
            document.getElementById('moving_box').style.marginLeft = '620px';
        }
        else {
            document.getElementById('moving_box').style.marginLeft = '';
        }
    }
}
