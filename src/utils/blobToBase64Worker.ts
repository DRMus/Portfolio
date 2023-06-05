//Worker thread

/* eslint-disable no-restricted-globals */
self.addEventListener("message", (message) => {
  blobToBase64(message.data);
});

function blobToBase64(blob: Blob) {
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function () {
    var base64String = reader.result;

    self.postMessage(base64String);
  };
}
