import firebase from "utils/firebase";

export function uploadImage(image, folderImageID) {
  return new Promise((resolve, reject) => {
    const ref = firebase.storage().ref();

    const imageRef = ref
      .child(`images/${folderImageID}/${image.name}`)
      .put(image);

    imageRef.on(
      "state_changed",
      (snapshot) => {
        // progress
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      () => {
        // success
        imageRef.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          resolve(downloadURL);
        });
      }
    );
  });
}
