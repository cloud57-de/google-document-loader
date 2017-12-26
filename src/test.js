import GoogleLoadDocument from './index';

let options = {
  "clientId": "145940141011-h2l9bvunhbn8o92qch61o9882um6ot47.apps.googleusercontent.com",
  "scope": [
    "profile",
    "https://www.googleapis.com/auth/drive"
  ]
};

let loadDocument = new GoogleLoadDocument(options);
document.getElementById('loadButton').onclick=btLoadDoc;

function btLoadDoc() {
  loadDocument.getDocument('0B-K7oJWHTbZ8SDBwSDRKa2I0bms', function(body) {
    document.getElementById('viewer').innerHTML=body;
  });
}
