import {generateImageFiles} from "bimg";
import fs from "fs";

let prompt = "cat";
var index = 0;
const imageFiles = await generateImageFiles(prompt)
console.log(imageFiles);

// imageFiles.map((obj) => {
//     console.log(obj);
//     const base64ImageData = obj["data"]; // Replace with your base64-encoded image data

//     const imageBuffer = Buffer.from(base64ImageData, 'base64');

//     const outputPath = `./images/image${index}.jpg`; // Replace with your desired output path and filename

//     fs.writeFile(outputPath, imageBuffer, (err) => {
//         if (err) {
//             console.error('Error while saving the image:', err);
//         } else {
//             console.log('Image saved successfully!');
//             index++;
//         }
//     });
// })