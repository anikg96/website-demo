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
Scar tissue can form after an acute injury, or more slowly as a result of many years of chronic agitation or damage from a separate underlying malady such as diabetes or hypertension. 
Fibrotic matrix may initially aid in the tissue repair process, and even subside in cases of mild injury as functional tissue regenerates. However, during chronic or repetitive injury, fibrotic matrix deposition goes unchecked, slowly disrupting tissue architecture, preventing normal function and inhibiting repair, ultimately leading to organ functional decline and failure.
</p>
<br></br>
<p>Fibrosis destroys the <br></br><br></br>
<ul>
    <li>&emsp;•	kidneys of patients with various immune diseases or common diseases such as hypertension and diabetes,</li>
    <li>&emsp;•	liver of patients with overweight (non-alcoholic fatty liver disease; NAFLD),</li>
    <li>&emsp;•	heart of patients with hypertension or cardiomyopathy caused by e.g. metabolic diseases or ischemia,</li>
    <li>&emsp;•	lungs of patients with idiopathic pulmonary fibrosis, and </li>
    <li>&emsp;•	the bone marrow of patients with myelofibrosis.</li>
</ul>
<br></br>
Nearly 45% of all deaths in the developed world are attributed to some
type of chronic fibroproliferative disease (Wynn, T. J Pathol 214:199, 2008)
</p>
<br></br><br></br>
<h1 className='text-3xl'>Medical need</h1>
        <br></br>
        <p>Despite the evident medical need, there is a dire innovation gap in the fibrosis disease space. Specific antifibrotic therapies do not exist for most organs including the kidney, heart, liver, skin, and the bone-marrow. This is due to an incomplete understanding of disease driving mechanisms. In addition, current targets under investigation may still not represent the “achilles heel” of the disease.</p>
        <br></br>
        <p>We believe that successful development of ground-breaking, targeted anti-fibrotic therapies requires a hitherto unattainably deep understanding of the molecular cues that drive disease biology on a cellular level.</p>
        <br></br>
        <h1 className='text-3xl'>Technology</h1>
        <br></br>
        <p className="font-bold">Sequantrix identifies and validates novel, antifibrotic targets by leveraging one of the world’s largest human single-cell, multi-modal datasets in the field of fibrotic diseases and aims to develop anti-fibrotic drug candidates up to clinical proof of concept.</p>
        <br></br>
        <p>We have generated proprietary high quality single-cell human fibrotic datasets that allow us to map fibrosis at unprecedented resolution across major human organs. These datasets are being extensively annotated, analyzed and utilized with available systems biology and will allow a better understanding of the complex mechanisms driving myofibroblast activation, expansion, cellular-crosstalk and matrix deposition.</p>
        <br></br>
        <p>Single-cell data provides an unprecedented window into cellular states associated with disease. However, discovering successfully the most biologically relevant anti-fibrosis targets, <span className="font-bold">that are simultaneously well-suited for successful drug development</span>, requires a deep understanding of the relationship between cellular specificity derived from single-cell datasets, disease biology, phenotypic consequence, molecular and genetic factors, and therapeutic potential. </p>
        <br>
        </br>
        <p>
        We tackle this challenge through a truly data-driven approach based on our propietary FibroMiner/Decoder AI-platform that scores targets and nominates them for experimental validation.
        </p>
        <br>
        </br>
        <p>
        The top scoring targets from the FibroMiner/Decoder pipeline are directly validated in human disease using state-of the art human disease models including primary cell lines, cellular co-culture models and organoid models. 
        </p>
        <br>
        </br>
        <h1 className='text-3xl'>Pipeline</h1>
        <br></br>
        <p>Using our single cell genomics and FibroMiner/Decoder platform we have already identified several novel therapeutic targets that are currently being validated in relevant fibrosis models and will swiftly move to drug development.</p>

    </PageSection>
  )
}

export default Approach