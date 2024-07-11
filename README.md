# IEEE Spectrum API Documentation

## Overview
The IEEE Spectrum News API is a simple HTTP-based API that allows developers and students to access the latest news and articles from the IEEE Spectrum website as well as integrate them as data into their own websites web applications or mobile apps. The API uses "REST-Like" operations over HTTP GET requests with parameters Header encoded into the request and its response encoded in JSON format.This API has been created for bringing the latest technology news provided by the [IEEE Spectrum News website](https://spectrum.ieee.org/type/news/) closer to the students of all IEEE Student Branches across the globe. It is our priority to maintain and continuously improve our API so that students from all around the world get the best treatment on news that matter to them the most.Thats why we have created 2 solutions for those interested in our services; The FREE TIER which has a limited number of requests per month and can be used mainly for development or test purposes and the PREMIUM TIER which offers all of our services for a very large amount of requests.

## Authentication
In order to use the Spectrum API you must sign-up for an account on the [RapidAPI platform](https://rapidapi.com/hub), login and get your RapidAPI key so you can access the endpoint accordingly to the plan you have selected.The plans and pricing of the API can be found in the 'Pricing' tab of our API page on the RapidAPI platform.

Using the IEEE Spectrum API as well as the RapidAPI website indicates that you have read and accepted the Terms & Conditions and the Privacy Policy. If you do not accept these terms you are not authorized to use our services.

## Version
The current version of the API is v1.0.0 and it currently supports a single endpoint. The App has been optimized for the minimum latency and the fastest response times possible by being hosted on Microsoft Azure Cloud.

# GET REQUEST /api
HTTP Method: GET  
URL: https://ieee-spectrum-api.p.rapidapi.com/api  
## Description
The endpoint will return the latest 30 news from IEEE Spectrum website as JSON objects with 10 data elements. These will be the Title, SubHeadline, Url, DatePublished, TimetoRead, Sections , Image source, Image Alt text, Likes and if the article is sponsored or not.
## Request Parameters
The parameters that will be requested via headers are:   
    -Your unique API key and    
    -The RapidAPI host   
## Example Request
For this example we will be using Javascript and specifically Node.js. More examples and code snippets for other programming languages can be also found in the [API RapidAPI page](https://rapidapi.com/christopherkormpos/api/ieee-spectrum-api)

```javascript
const axios = require("axios");  
  
const options = {  
  method: 'GET',  
  url: 'https://ieee-spectrum-api.p.rapidapi.com/api',  
  headers: {  
    'X-RapidAPI-Key': 'Your-Unique-API-key',  
    'X-RapidAPI-Host': 'ieee-spectrum-api.p.rapidapi.com'  
  }  
};  

axios.request(options).then(function (response) {  
	console.log(response.data);  
}).catch(function (error) {  
	console.error(error);  
});
```

## Example Response
The response data will have a JSON format of an array with 25-30 items.
Both Body and Headers will be returned as well as the status code.
The body will look like the example provided below:
```javascript
[  
    {  
    newsTitle:"10 Graphs That Sum Up the State of AI in 2023"  
    newsUrl:"https://spectrum.ieee.org/state-of-ai-2023"  
    newsTimetoRead:"4 min read"  
    newsSubHeadline:"The AI Index tracks breakthroughs, GPT training costs, misuse, funding, and more"  
    newsDatePublished:"08 Apr 2023"  
    newsSections:["Artificial Intelligence"]  
    newsImgSrc:"https://spectrum.ieee.org/media-library/illustration-of-robots-standing-and-sitting-looking-at-pie-charts-and-graph-charts-on-a-dark-gray-background.jpg?id=33433195&width=1200&height=900"  
    newsImgAlt:"illustration of robots standing and sitting looking at pie charts and graph charts on a dark gray background"  
    newsLikes:"3"  
    newsIsSponsored:false  
}
//...More items and data will be displayed like the above example
]
```

## Usefull Resources
Before you start building your website solution make sure you visit our API page to get the latest version of this documentation as well as copy the code snippets and examples from our RapidAPI page for your convinience.
Please contact me on christopher.kormpos@gmail.com to report any bugs.