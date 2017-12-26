import LoadGoogleApi from "load-google-api";


class GoogleLoadDocument {

    constructor(options) {
      this.drive = new LoadGoogleApi(options);
    }


    getDocument(id, callback) {
      this.drive.loadGoogleAPI().then(() => {
        this.drive.init().then(() => {
          window.auth = window.gapi.auth2.getAuthInstance();
        }).then(() => {
          this.login(id, callback);
        });
      });
    }

    login(id, callback) {
      if (auth.currentUser.get() == undefined || !auth.currentUser.get().isSignedIn()) {
      auth.signIn().then((user) => {
        console.log(auth.currentUser.get());
        auth.currentUser=user;
        this.loadDocument(id, callback);
      });
      }
      else {
        this.loadDocument(id, callback);
      }
    }

    loadDocument(id, callback) {
      console.log(id);
      gapi.client.request({'path': 'https://www.googleapis.com/drive/v3/files/' + id, 'params': {'alt':'media'}})
        .then(function(response) {
          callback(response.body);
        });
    }

}

export default GoogleLoadDocument;
