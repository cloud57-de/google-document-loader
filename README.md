# google-document-loader
A node module for simple download a google drive document.

## Usage

This sample uses parcel as bundler. Install parcel with
```
npm install -g parcel-bundler
```


Create a new project.

```
mkdir showdrivedocument
cd showdrivedocument
npm init -y
npm i --save google-document-loader
```

Next go to the Google Developer Console (https://console.developers.google.com) and create a new project, a OAuth Client Id and activate the Drive API (see https://developers.google.com/drive/v3/web/quickstart/js).

Now create a index.js file

```
import GoogleLoadDocument from 'google-document-loader';

let options = {
  "clientId": "<INSERT_CLIENT_ID>",
  "scope": [
    "profile",
    "https://www.googleapis.com/auth/drive"
  ]
};

let loadDocument = new GoogleLoadDocument(options);
document.getElementById('loadButton').onclick=btLoadDoc;

function btLoadDoc() {
  loadDocument.getDocument('<INSERT_DOCUMENT_ID>', function(body) {
    document.getElementById('viewer').innerHTML=body;
  });
}
```

and a index.html

```
<html>
<body>
  <script src="./test.js"></script>
  <button id="loadButton">Load</button>
  <div id="viewer" />
</body>
</html>
```

Now start the app with

```
parcel index.html
```

and open your browser and go to http://localhost:1234
