import React from 'react'
import BenOrMalPredictionChart from './BenOrMalPredictionChart';
import NormalPredictionChart from './NormalPredictionChart';
import '../application.css'

const ValueDisplay = ({ prediction }) => {
  const isIrrelevant = prediction.irrelevant > 0.5
  const isTumorous = prediction.tumorous > 0.5
  const isMalignant = prediction.malignant > 0.5
  return (
    <div>
      {isIrrelevant ? (
        <div className="irrelevant">
          <h2 className='irrelevant'>
          The uploaded image <span className='conf'>does not appear relevant to the analysis.</span> 
          &nbsp;Please provide a valid <span className='highlight-irr'>breast ultrasound image</span> for accurate evaluation.
          </h2>
        </div>
      ) : isTumorous ? (
        isMalignant ? (
          <div className="malignant">
            <h2 className='malignant'>
            The model predicts, with&nbsp;<span className='conf'>high confidence</span>&nbsp;the presence of a tumor in the provided image. The tumor is classified as&nbsp;
              <span className='highlight-mal'>MALIGNANT.</span>
            </h2>
            <BenOrMalPredictionChart prediction={prediction.malignant} />
          </div>

        ) : (
          <div className="benign">
            <h2 className='benign'>
            The model predicts, with&nbsp;<span className='conf'>high confidence</span>&nbsp;the presence of a tumor in the provided image. The tumor is classified as&nbsp;
              <span className='highlight-ben'>BENIGN.</span>
            </h2>
            <BenOrMalPredictionChart prediction={prediction.malignant} />
          </div>
        )

      ) : (
        <div className="normal">
          <h2 className='normal'>
          The model <span className='conf'>confidently</span> predicts that no tumor is present in the provided image, indicating it belongs to a <br />
<span className='highlight-norm'>Normal breast tissue</span>
          </h2>
          <NormalPredictionChart prediction={prediction.tumorous} />
        </div>
      )}
    </div>
  );
};
export default ValueDisplay;
