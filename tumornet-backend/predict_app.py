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

# Model 1: Filtering Irrelevant (1) and Relevant Images (0)
def get_model1():
    global model1
    model1 = load_model('models/NASNet_2class_high')
    print("Model 1 (Filter Layer) loaded successfully!")

# Model 2: Classifying Relevant Images as Normal (0) or Tumorous Tissue (1)
def get_model2():
    global model2
    model2 = load_model('models/NASNet_2class_mid')
    print("Model 2 (Normal vs Tumorous tissue) loaded successfully!")

# Model 3: Classifying Tumorous Images as Benign (0) or Malignant (1)
def get_model3():
    global model3
    model3 = load_model('models/NASNet_2class_low')
    print("Model 3 (Benign vs Malignant) loaded successfully!")

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

get_model1()
get_model2()
get_model3()
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

# The first model serves as the initial layer to determine if an image holds any interest.
# Predictions from Model 1 classify the image as either irrelevant (1) or relevant (0).
# If an image is deemed irrelevant, the response object is returned immediately to the user, 
# bypassing further processing by subsequent layers.
        prediction1 = model1.predict(processed_image)
        print("Prediction 1 Result:",prediction1)
        prediction1_list = prediction1.tolist()# Convert prediction array to a Python list before serializing to JSON
        if(prediction1 > 0.5):
            response = {
            'irrelevant': prediction1_list,
            'tumorous': None,
            'malignant': None
        }
            return jsonify(response)
# After an image is classified as Relevant (0) by the first model, Model 2 determines whether it is normal or tumorous.
# If the image is classified as tumorous (1), it proceeds to the final layer for further categorization (benign or malignant).
# Otherwise, the response is returned to the user immediately.
        elif(prediction1 < 0.5):
            prediction2 = model2.predict(processed_image)
            print("Prediction 2 Result:", prediction2)
            prediction2_list = prediction2.tolist()
            if (prediction2 < 0.5):
                response = {
                'irrelevant': prediction1_list,
                'tumorous': prediction2_list,
                'malignant': None
            }
                return jsonify(response)
# The final layer analyzes images identified as tumorous by the previous model 
# and determines whether the breast ultrasound indicates a benign (0) or malignant (1) condition
# returning the result to the user.
            elif (prediction2 > 0.5):
                prediction3 = model3.predict(processed_image)
                print("Prediction 3 Result:", prediction3)
                prediction3_list = prediction3.tolist()
                response = {
                'irrelevant': prediction1_list,
                'tumorous': prediction2_list,
                'malignant': prediction3_list
                }
                return jsonify(response)

    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)