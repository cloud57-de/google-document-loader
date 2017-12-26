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
npm install --save google-document-loader
npm install --save-dev babel-plugin-add-module-exports
npm install --save-dev babel-preset-es2015
```

Next go to the Google Developer Console (https://console.developers.google.com)
and create a new project, a OAuth Client Id and activate the Drive API
(see https://developers.google.com/drive/v3/web/quickstart/js).

Now create an index.js file. Replace <INSERT_CLIENT_ID> with your created
Google Client Id. Replace <INSERT_DOCUMENT_ID> with the Id from the Google
Drive document that will be downloaded.

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
document.getElementById('loadButton').onclick=function() {
  loadDocument.getDocument('<INSERT_DOCUMENT_ID>', function(body) {
    document.getElementById('viewer').innerHTML=body;
  });
};
```

and a index.html

```
<html>
<body>
  <button id="loadButton">Load</button>
  <div id="viewer" />
  <script src="index.js"></script>
</body>
</html>
```

Now start the app with

```
parcel index.html
```

and open your browser and go to http://localhost:1234
