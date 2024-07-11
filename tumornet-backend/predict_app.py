from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import io
from PIL import Image
from keras.models import load_model
from keras.preprocessing.image import img_to_array
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def get_model():
    global model
    model = load_model('nasnet')
    print("Model loaded successfully!")
#Necessary image preprocessing function
#Adjust size based on model needs (331x331 for NASNet)
def preprocess_image(image, target_size=(331, 331)):
    if image.mode != "RGB":
        image = image.convert("RGB")
    image = image.resize(target_size)
    img_array = img_to_array(image)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

print("Loading Keras model...")
get_model()
#POST Route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        message = request.get_json(force=True)
        print("Received JSON Data:", message)  

        encoded = message['image']#Encoded received image data
        print("Received Image Data:", encoded[:50])  
        
        decoded = base64.b64decode(encoded)#Base64 image decoding
        image = Image.open(io.BytesIO(decoded))
        processed_image = preprocess_image(image, target_size=(331, 331))
        print("Image Preprocessing Successful")  # Log successful preprocessing
        
        prediction = model.predict(processed_image)
        
        print("Prediction Result:", prediction)  # Log prediction result
        # Convert prediction array to a Python list before serializing to JSON
        prediction_list = prediction.tolist()

        response = {
            'prediction': prediction_list
        }
        return jsonify(response)

    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)