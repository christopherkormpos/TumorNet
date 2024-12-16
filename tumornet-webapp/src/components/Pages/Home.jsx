import React from 'react';
import '../../home.css';

export function Home() {
  return (
    <>
      <div className="main-content-1">
        <div className="main-content-left">
          <h1><span>TumorNet: </span> a web <span className="highlight2">Artificial Intelligence</span>-Powered Tool for&nbsp;
            <span className="highlight">Tumor Classification </span>
          </h1>
          <p>
            Bringing <span className="highlight1">advanced artificial intelligence</span> to tumor diagnosis,
            this <span className="highlight6">open-source tool</span> offers doctors
            a reliable resource for accurate classification.
            Integrating <span className="highlight5">Complex Convolutional Neural Networks algorithms</span>,
            our model analyzes breast ultrasound images and makes <span className="highlight1">accurate predictions</span> to enhance the accuracy of
            tumor classifications, <span className="highlight6">asisting doctors</span> in providing better patient care.
          </p>
        </div>
        <img src="./images/image1.svg" className="medical" alt="" />
      </div>

      <div className="parallax-container">
        <div className="fade-in-element">
          <h1>92.7%</h1>
          <p>Overall Model Accuracy</p>
        </div>
        <div className="fade-in-element">
          <h1>20 sec</h1>
          <p>Maximum response time</p>
        </div>
        <div className="fade-in-element">
          <h1>91.9%</h1>
          <p>Sensitivity on Malignant cases</p>
        </div>
      </div>

      <div className="main-content-2">
        <img src="./images/image2.svg" className='cnn' alt="cnn" />
        <p>
          The system leverages a series of convolutional neural networks (CNNs) organized within a hierarchical architecture
          to <span className="highlight1">recognize </span>and <span className="highlight1">classify </span>
          breast ultrasound images with <span className="highlight4">high precision</span>. Deployed on a dedicated server,
          the model processes uploaded images through an <span className="highlight3">intuitive front-end interface</span>,
          enabling doctors obtain <span className="highlight1">instant</span> predictions and insights from their own
          ultrasound scans. This seamless integration provides <span className="highlight4">quick</span> and
          <span className="highlight4"> reliable</span> diagnostic support, empowering clinicians to make&nbsp;
          <span className="highlight2">timely and well-informed decisions.</span>
        </p>
      </div>
      <div className='underline'></div>
      <div className='main-content-3'>
        <div className="main-content-left">
          <p>
            In the context of the thesis <a href="https://polynoe.lib.uniwa.gr/xmlui/handle/11400/7182" target="_blank" rel="noreferrer"><span className="highlight5">"Design and implementation of a 
              web application for breast tumors classification through convolutional neural networks"</span></a> and 
              the <a href="https://www.mdpi.com/journal/make" target="_blank" rel="noreferrer"><span className="highlight1">accompanying research paper</span>, 
              <span className="highlight2"> "Evaluating Deep Learning Architectures for Breast Tumor Classification 
                and Ultrasound Image Detection Using Transfer Learning"</span></a> a&nbsp; 
                <span className="highlight1">comprehensive evaluation was conducted</span> involving the 
                implementation and training of <span className="highlight1">two architectures and three distinct 
                  convolutional neural networks</span> using the available ultrasound dataset. The primary 
                  objective was to <span className='highlight6'>identify the most effective algorithm</span> based 
                  on strict performance metrics, while simultaneously <span className='highlight6'>developing a 
                    filter</span> to exclude all irrelevant to the subject images.
          </p>
        </div>
        <img src="./images/image3.svg" className="medical" alt="" />
      </div>
      
      
      <div className="main-content-4">
        <img src="./images/image4.svg" className='results' alt="results" />
        <p>
        Based on the evaluation results, a hierarchical architecture utilizing a series 
        of <span className='highlight4'>NASNet</span> models emerged as the top performer, achieving an 
        impressive accuracy of <span className='highlight3'>92.7%</span>. Beyond its high accuracy, this 
        architecture consistently <span className='highlight1'>excelled across key metrics such as sensitivity, 
          and F1 score</span>, where it outperformed all other tested models. The study also highlighted 
          the <span className='highlight2'>potential of hierarchical architectures</span> over traditional 
          three-class classification models in medical imaging tasks. By providing 
          more <span className='highlight6'>reliable</span> and <span className='highlight6'>interpretable</span> results, 
          these architectures demonstrate <span className='highlight6'>superior suitability</span> for medical 
          applications, where precision and consistency are <span className='highlight1'>essential</span>.
        </p>
      </div>
      <div className='button-container'>
        <span></span>
        <a href="/app" className='button'>
          <button className='down-button'>Use the App Here</button>
        </a>
        <span></span>
      </div>
    </>
  )
}