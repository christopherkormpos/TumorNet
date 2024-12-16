# TumorNet Documentation

## Overview
TumorNet is a web application designed for breast tumor classification, leveraging advanced Artificial Intelligence techniques. The application was developed as part of the thesis titled, ["Design and Implementation of a Web Application for Breast Tumor Classification through Convolutional Neural Networks"](https://polynoe.lib.uniwa.gr/xmlui/handle/11400/7182) and further enriched by the accompanying research paper, "Evaluating Deep Learning Architectures for Breast Tumor Classification and Ultrasound Image Detection Using Transfer Learning." The primary objective of this project was to create an open-source web application capable of classifying breast ultrasound images. The system first determines whether an uploaded image is relevant for analysis, then identifies whether the image depicts normal or tumorous breast tissue. For images classified as tumorous, the system further distinguishes between benign and malignant tumors. This multi-step classification process is powered by a sequence of pre-trained deep learning models that were fine-tuned using comprehensive datasets.

The research focused on evaluating the effectiveness of binary classification systems over traditional three-class classification approaches. Although the results show that breaking the task into two stages—first distinguishing normal tissue from tumorous tissue, and then categorizing benign and malignant tumors—did not significantly improve accuracy, the sensitivity and F1 score metrics suggest that this architecture is more effective for the task. This approach has the potential to improve diagnostic accuracy and efficiency in clinical settings, enhancing the early detection of breast cancer and providing valuable support to medical professionals in delivering better patient care. The architecture of TumorNet, showcasing its backend workflow and system components, is illustrated in the image below:

<p align="center">
  <img src="tumornet-webapp/public/images/arch_graph_1.png" alt="TumorNet Backend Architecture" />
</p>

The live demonstration of the application can be accessed [here](tumornet.telsip.uniwa.gr)

## Version
The current version of the application is v2.0.1. It has been optimized for minimal latency and fastest response times, with the application hosted on dedicated servers at the [TelSiP Research Laboratory](https://telsip.uniwa.gr/), University of West Attica, Athens, Greece.
