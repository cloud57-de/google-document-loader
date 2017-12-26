import GoogleLoadDocument from './index';

let options = {
  "clientId": "<INSERT_CLIENT_ID>",
  "scope": [
    "profile",
    "https://www.googleapis.com/auth/drive"
  ]
};


let loadDocument = new GoogleLoadDocument(options);
document.getElementById('loadButton').onclick=function() {
  loadDocument.getDocument('<INSERT_DOCUMENT_ID>', function(body) {
    document.getElementById('viewer').innerHTML=body;
  });

};
