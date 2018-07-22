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
  loadDocument.getDocument('<INSERT_DOCUMENT_ID>').then((body) => {
    document.getElementById('viewer').innerHTML=body;
  });
};

document.getElementById('loadButtonError').onclick=function() {
  loadDocument.getDocument('<INSERT_WRONG_DOCUMENT_ID>').then((body) => {
    document.getElementById('viewerError').innerHTML=body;
  },
(reason) => {
  document.getElementById('viewerError').innerHTML=reason.status;
});
};
