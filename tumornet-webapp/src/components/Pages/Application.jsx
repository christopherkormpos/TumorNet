import React, { useState, useEffect } from 'react';
import '../../application.css'
import PredictionChart from '../../components/PredictionChart';

export function Application() {
  //UseStateHooks initialization
  const [selectedImage, setSelectedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [base64Image, setBase64Image] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);

  // Handle image selection and conversion to base64
  const handleImageChange = () => {
    setIsLoading(true);
    setPrediction(null); // Reset prediction
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataURL = reader.result;
      const base64 = dataURL.replace("data:image/png;base64,", "");
      setSelectedImage(dataURL); // Update selectedImage state with dataURL
      setBase64Image(base64); // Update base64Image state
      console.log(base64);
      // Set loading state to false after 3 seconds then scroll to prediction button automatically
      setTimeout(() => {
        setIsLoading(false);
        const imageSelectedElement = document.getElementById('predict-button');
        if (imageSelectedElement) {
          const { top } = imageSelectedElement.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + top,
            behavior: 'smooth'
          });
        }
      }, 3000);
    };

    if (document.getElementById('image-selector').files.length > 0) {
      reader.readAsDataURL(document.getElementById('image-selector').files[0]); // Read selected file as DataURL
    }
  };
  // Add and remove event listener for image input
  useEffect(() => {
    document.getElementById('image-selector').addEventListener('change', handleImageChange);

    return () => {
      document.getElementById('image-selector').removeEventListener('change', handleImageChange);
    };
  }, []);
  // Handle prediction function
  const handlePrediction = () => {
    setIsPredicting(true); // Set predicting state to true
    let message = {
      image: base64Image
    };

    console.log(message); //Prints the base64 image (debugging purposes only)
    // Send data to server. Based on the port running the predict_app.py (Here is local host port 5000 /predict)
    fetch("http://127.0.0.1:5000/predict", {
      method: 'POST',
      body: JSON.stringify(message),
    })
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setPrediction(data.prediction); // Update prediction state to true
          console.log(data); //Print the prediction (number betwwen 0 and 1). Debugging purposes only
          setIsPredicting(false); // Update prediction state to false
        }, 3000);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsPredicting(false); //If an error occurs set predicting state to false
      });
  };
  // Component to display prediction result based on the data.prediction. Can also be sepereted to the components folder 
  //but because it is only used in the Application.jsx it is written inside here.
  const ValueDisplay = ({ value }) => {
    const isMalignant = value > 0.5;
    return (
      <div>
        {isMalignant ? (
          <div className="malignant">
            <h2 className='malignant'>
              The model predicts with&nbsp;<span className='conf'>high confidence</span>&nbsp;that the tumor in the provided image is&nbsp;
              <span className='highlight-mal'>MALIGNANT.</span>
            </h2>
          </div>
        ) : (
          <div className="benign">
            <h2 className='benign'>
              The model predicts with&nbsp;<span className='conf'>high confidence</span>&nbsp;that the tumor in the provided image is&nbsp;
              <span className='highlight-ben'>BENIGN.</span>
            </h2>
          </div>
        )}
      </div>
    );
  };
  //Render the Application UI
  return (
    <div>
      <h3>Please select an image file (supported types: <span className='h3highlight'>PNG</span>).</h3>
      <div className='upper'>
        <div className='input'>
          <input
            type="file"
            id="image-selector"
            accept="image/png"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div id="prediction">
        <div className='image-loader'>
          {isLoading && <div className="loader"></div>}
          {(selectedImage && !isLoading) && <img src={selectedImage} alt="Selected" />}
        </div>
        {(selectedImage && !isLoading) &&
          <div className='button'>
            <button className='predict-button' id="predict-button" onClick={handlePrediction}>
              <span>
                Predict
              </span>
            </button>
          </div>
        }
        <div className='prediction-loader-div'>
          {isPredicting && <div className="prediction-loader"></div>}
        </div>
        {(!isPredicting && prediction) && (
          <>
            <ValueDisplay value={prediction[0]} />
            <PredictionChart prediction={prediction} />
          </>
        )}
      </div>
    </div>
  );
}