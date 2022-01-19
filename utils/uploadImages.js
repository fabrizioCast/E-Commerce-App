import { uploadImage } from "/utils/uploadImage";
import { v4 as generateUID } from "uuid";

export default function uploadImages(file) {
  const folderImageID = generateUID();
  let images = [];

  for (let i = 0; i < file.length; i++) {
    let imgData = {
      name: file[i].name,
      url: "",
      file: file[i],
    };
    images.push(imgData);
  }

  const returnAllPromises = images.map((image) =>
    uploadImage(image.file, folderImageID)
  );

  return Promise.all(returnAllPromises);
}
