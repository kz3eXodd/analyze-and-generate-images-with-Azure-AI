// import axios from 'axios';



// const analyzeImage = async () => {
//     const serviceOptions = {
//         endpoint: process.env.VISION_ENDPOINT,
//         key: process.env.VISION_KEY
//     };

//     const imageSource = {
//         url: 'https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png'
//     };

//     try {
//         const response = await axios.post(`${serviceOptions.endpoint}/analyze`, {
//             visualFeatures: ['Categories', 'Description', 'Tags'],
//             image: imageSource
//         }, {
//             headers: {
//                 'Ocp-Apim-Subscription-Key': serviceOptions.key,
//                 'Content-Type': 'application/json'
//             }
//         });

//         console.log(response.data);
//         // Handle the response data here

//     } catch (error) {
//         console.error(error);
//         // Handle the error here
//     }
// };


// VisionServiceOptions serviceOptions = new VisionServiceOptions(
//     new URL(System.getenv("VISION_ENDPOINT")),
//     System.getenv("VISION_KEY"));

