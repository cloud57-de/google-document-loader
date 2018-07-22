import LoadGoogleApi from "load-google-api";


class GoogleLoadDocument {


  constructor(options) {
    this.drive = new LoadGoogleApi(options);
  }

  

  login(id) {
    var loadDocument = function(id) {
      return new Promise(function (resolve, reject) {
        gapi.client.request({ 'path': 'https://www.googleapis.com/drive/v3/files/' + id, 'params': { 'alt': 'media' } })
          .then(function (response) {
            resolve(response.body);
          },
          (reason) => {
            reject(reason);
          });
      });
    };

    return new Promise(function (resolve, reject) {
      if (auth.currentUser.get() == undefined || !auth.currentUser.get().isSignedIn()) {
        auth.signIn().then((user) => {
          auth.currentUser = user;
          loadDocument(id).then((filecontent) => {
            resolve(filecontent);
          },
          (reason) => {
            reject(reason);
          });
        },
          (reason) => {
            reject(reason);
          });
      }
      else {
        loadDocument(id).then((filecontent) => {
          resolve(filecontent);
        },
        (reason) => {
          reject(reason);
        });
      }
    });
  }

  getDocument(id) {
    var drive = this.drive;
    var login = this.login;
    return new Promise(function (resolve, reject) {
      drive.loadGoogleAPI().then(() => {
        drive.init().then(() => {
          window.auth = window.gapi.auth2.getAuthInstance();
        },
          (reason) => {
            reject(reason);
          }).then(() => {
            login(id).then((filecontent) => {
              resolve(filecontent);
            },
            (reason) => {
              reject(reason);
            });
          },
            (reason) => {
              reject(reason);
            });
      },
        (reason) => {
          reject(reason);
        });
    });
  }



}

export default GoogleLoadDocument;
