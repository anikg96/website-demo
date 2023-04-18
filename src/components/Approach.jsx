import React from 'react'
import PageSection from './PageSection'

const Approach = () => {
  return (
    <PageSection
    name="approach"
    title="Approach"
    subtitle="">
        <h1 className='text-3xl'>About fibrosis</h1>
        <br></br>
        <p>Tissue fibrosis, or scar formation, is the common final pathway of virtually all progressive diseases and inflicts damage in every major organ including kidney, heart, bone marrow, lung, liver, muscle and skin.
</p>
<p>Scar tissue can form after an acute injury, or gradually as a result of chronic agitation or damage from a separate underlying malady such as diabetes or hypertension over several years.</p>
<p>While deposition of fibrotic matrix immediately after injury sustains tissue integrity, unchecked fibrotic matrix deposition, in particular during chronic or repetitive injury, slowly disrupts tissue architecture and drives maladaptive tissue remodeling, ultimately leading to loss of functional tissue and organ failure.</p>
<br></br>
<p>As such, fibrosis destroys the <br></br><br></br>
<ul>
    <li>&emsp;•	kidneys of patients with hypertension, diabetes or various immune diseases,</li>
    <li>&emsp;•	livers of patients with cirrhosis due to obesity(non-alcoholic fatty liver disease, NAFLD), hepatitis or alcoholism,</li>
    <li>&emsp;•	hearts of patients with hypertension, diabetes or coronary artery disease,</li>
    <li>&emsp;•	lungs of patients with idiopathic pulmonary fibrosis, and</li>
    <li>&emsp;•	the bone marrow of patients with myelofibrosis.</li>
</ul>
<br></br>
In sum, nearly 45% of all deaths in the developed world can be attributed to an underlying fibrotic disease (Wynn, T. J Pathol 214:199, 2008).
</p>
<br></br><br></br>
<h1 className='text-3xl'>Medical need</h1>
        <br></br>
        <p>Despite the evident medical need, there is a dire innovation gap in the fibrosis disease space. Specific antifibrotic therapies do not exist for most organs including the kidney, heart, liver, skin, and the bone-marrow. This is due to an incomplete understanding of disease driving mechanisms. In addition, current drug candidates under investigation may still not target the “achilles heel” of the disease. </p>
        <br></br>
        <p>We believe that successful development of ground-breaking, targeted anti-fibrotic therapies requires a hitherto unattainably deep understanding of the molecular cues that drive disease biology on a cellular level.</p>
        <br></br>
        <h1 className='text-3xl'>Technology</h1>
        <br></br>
        <p className="font-bold">Sequantrix identifies and validates novel, antifibrotic targets by leveraging one of the world’s largest human single-cell, multi-modal datasets in the field of fibrotic diseases and aims to develop anti-fibrotic drug candidates up to clinical proof of concept.</p>
        <br></br>
        <p>We have generated proprietary high-quality single-cell human fibrotic datasets that allow us to map fibrosis at unprecedented resolution across major human organs. In-depth bioinformatic dissection of these datasets will enable a better understanding of the complex mechanisms driving myofibroblast activation, expansion, cellular-crosstalk and matrix deposition. Our datasets are being extensively annotated and analyzed, thereby leveraging state of the art bioinformatic pipelines as well as proprietary algorithms to identify promising candidates for drug development.</p>
        <br></br>
        <p>
        Single-cell data provides an unparalleled window into cellular states associated with disease. However, successful discovery of the most biologically relevant anti-fibrotic targets,
          <span className="font-bold"> that are simultaneously well-suited for successful drug development</span>
          , requires a deep understanding of the relationship between cellular specificity derived from single-cell datasets, disease biology, phenotypic consequence, molecular and genetic factors, and therapeutic potential. 
          <span className="font-bold"> We tackle this challenge through a truly data-driven approach based on our propietary FibroMiner/Decoder AI-platform </span>
          that scores targets and nominates them for experimental validation.
        </p>
        <br>
        </br>
        <p>
          <span className="font-bold">
            The top scoring targets from our FibroMiner/Decoder pipeline are directly validated in human disease using state-of-the-art organoid-based disease models. 
          </span>
          Validation of drug candidates in animals is complex and time-consuming, but also limited due to inter-species differences that can prevent direct translation of insights gained from animals to human disease. We aim at reducing the need for animal experiments, increasing throughput and saving time by using proprietary human organoid systems and modelling complex human organs in a dish to validate top scoring targets from our FibroMiner/Decoder pipeline directly in human disease.
        </p>
        <br>
        </br>
        <h1 name="pipe" className='text-3xl'>Pipeline</h1>
        <br></br>
        <p>Using our FibroMiner/Decoder platform we have already identified several novel anti-fibrotic targets of high biological relevance that are currently being validated in our fibrosis models and will swiftly move to drug candidate development.</p>
        <br>
        </br>
        <h1 className='text-3xl'>History</h1>
        <br></br>
        <p>Sequantrix is a spin-out of the University Hospital RWTH Aachen (UKA), Germany and is based on decade-long research and clinical expertise of Prof. Rafael Kramann and Prof. Rebekka Schneider in the field of fibrosis. The UKA has supported the spin-out process through its technology transfer organisation RWTH Innovation GmbH by transferring assets and IP and continues to keep close ties through joint research projects.</p>

    </PageSection>
  )
}

export default Approach