import { useState } from 'react';

import {
  FileText,
  Upload,
  BrainCircuit,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  X,
} from 'lucide-react';


function NLPReportAnalysis() {


  const [reportText, setReportText] = useState('');

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const [analysis, setAnalysis] =
    useState(null);


  const handleAnalyze = () => {

    if (!reportText.trim() || isAnalyzing) return;

    setIsAnalyzing(true);

    setTimeout(() => {

      setAnalysis({

        summary:
          'The report describes a suspected organized financial crime operation involving multiple individuals and repeated digital transactions.',

        entities: [
          'Central District',
          'Digital Financial Network',
          'Unknown Suspect Group',
          'Online Banking Platform',
        ],

        keywords: [
          'Financial Fraud',
          'Digital Transactions',
          'Account Access',
          'Investigation',
        ],

        risk: 'HIGH',

        confidence: '93.6%',

        insights: [
          'Multiple events appear to be connected through repeated financial activity.',
          'The report contains indicators of coordinated criminal behavior.',
          'Further investigation of digital identities and transaction records is recommended.',
        ],

      });

      setIsAnalyzing(false);

    }, 1800);

  };


  const clearAnalysis = () => {

    setReportText('');

    setAnalysis(null);

  };


  return (

    <div className="nlp-analysis-page">


      <div className="nlp-analysis-header">


        <div>


          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            NATURAL LANGUAGE INTELLIGENCE

          </div>


          <h1 className="dashboard-title">

            NLP Report Analysis

          </h1>


          <p className="dashboard-subtitle">

            Transform unstructured crime reports into
            structured intelligence using Natural Language Processing.

          </p>


        </div>


        <div className="nlp-system-badge">

          <BrainCircuit size={16} />

          NLP ENGINE ONLINE

        </div>


      </div>


      <div className="nlp-analysis-layout">


        <div className="dashboard-card nlp-input-card">


          <div className="card-header">


            <div>

              <p className="card-label">

                REPORT PROCESSING

              </p>


              <h2>

                Submit Intelligence Report

              </h2>

            </div>


            {reportText && (

              <button
                className="nlp-clear-button"
                onClick={clearAnalysis}
              >

                <X size={15} />

                Clear

              </button>

            )}


          </div>


          <div className="nlp-upload-area">


            <div className="nlp-upload-icon">

              <Upload size={25} />

            </div>


            <strong>

              Paste or enter a crime report

            </strong>


            <span>

              NLP will identify entities, patterns,
              keywords, and intelligence signals.

            </span>


          </div>


          <textarea

            className="nlp-report-input"

            placeholder="Paste an investigation report, incident description, witness statement, or intelligence document here..."

            value={reportText}

            onChange={(event) =>
              setReportText(event.target.value)
            }

          />


          <div className="nlp-input-footer">


            <span>

              {reportText.length} characters

            </span>


            <button

              className="nlp-analyze-button"

              onClick={handleAnalyze}

              disabled={
                !reportText.trim() || isAnalyzing
              }

            >

              {isAnalyzing ? (

                <>

                  <BrainCircuit size={17} />

                  ANALYZING...

                </>

              ) : (

                <>

                  <Sparkles size={17} />

                  ANALYZE REPORT

                </>

              )}

            </button>


          </div>


          <div className="nlp-processing-info">


            <div>

              <CheckCircle2 size={15} />

              Entity Extraction

            </div>


            <div>

              <CheckCircle2 size={15} />

              Pattern Detection

            </div>


            <div>

              <CheckCircle2 size={15} />

              Risk Classification

            </div>


          </div>


        </div>


        <div className="nlp-results-column">


          {!analysis && !isAnalyzing && (


            <div className="dashboard-card nlp-empty-state">


              <div className="nlp-empty-icon">

                <FileText size={30} />

              </div>


              <h2>

                Intelligence Results

              </h2>


              <p>

                Submit a report to generate structured
                intelligence and AI-powered analysis.

              </p>


            </div>

          )}


          {isAnalyzing && (


            <div className="dashboard-card nlp-loading-state">


              <div className="nlp-loading-icon">

                <BrainCircuit size={30} />

              </div>


              <h2>

                Analyzing Intelligence Report

              </h2>


              <p>

                NLP engine is extracting entities,
                relationships, and intelligence signals.

              </p>


              <div className="nlp-progress-bar">

                <div />

              </div>


              <span>

                PROCESSING DOCUMENT...

              </span>


            </div>

          )}


          {analysis && !isAnalyzing && (


            <>


              <div className="dashboard-card nlp-summary-card">


                <div className="card-header">


                  <div>

                    <p className="card-label">

                      AI GENERATED SUMMARY

                    </p>


                    <h2>

                      Intelligence Summary

                    </h2>

                  </div>


                  <div className="nlp-confidence">

                    <span>

                      CONFIDENCE

                    </span>


                    <strong>

                      {analysis.confidence}

                    </strong>

                  </div>


                </div>


                <p className="nlp-summary-text">

                  {analysis.summary}

                </p>


              </div>


              <div className="nlp-result-grid">


                <div className="dashboard-card nlp-result-card">


                  <div className="nlp-result-card-header">

                    <Search size={17} />

                    <h3>

                      Extracted Entities

                    </h3>

                  </div>


                  <div className="nlp-tag-list">


                    {analysis.entities.map((entity) => (

                      <span key={entity}>

                        {entity}

                      </span>

                    ))}


                  </div>


                </div>


                <div className="dashboard-card nlp-result-card">


                  <div className="nlp-result-card-header">

                    <Sparkles size={17} />

                    <h3>

                      Key Intelligence

                    </h3>

                  </div>


                  <div className="nlp-tag-list">


                    {analysis.keywords.map((keyword) => (

                      <span key={keyword}>

                        {keyword}

                      </span>

                    ))}


                  </div>


                </div>


              </div>


              <div className="dashboard-card nlp-insights-card">


                <div className="card-header">


                  <div>

                    <p className="card-label">

                      INTELLIGENCE SIGNALS

                    </p>


                    <h2>

                      AI-Detected Insights

                    </h2>

                  </div>


                  <div className="nlp-risk-badge">

                    <AlertTriangle size={15} />

                    {analysis.risk} RISK

                  </div>


                </div>


                <div className="nlp-insight-list">


                  {analysis.insights.map((insight, index) => (


                    <div
                      className="nlp-insight-item"
                      key={index}
                    >

                      <div>

                        <CheckCircle2 size={16} />

                      </div>


                      <p>

                        {insight}

                      </p>

                    </div>

                  ))}


                </div>


              </div>


              <div className="dashboard-card nlp-processing-card">


                <div className="nlp-processing-item">

                  <CheckCircle2 size={16} />

                  <span>

                    Report processed

                  </span>

                  <strong>

                    COMPLETE

                  </strong>

                </div>


                <div className="nlp-processing-item">

                  <Clock3 size={16} />

                  <span>

                    Analysis engine

                  </span>

                  <strong>

                    CV-NLP 1.0

                  </strong>

                </div>


              </div>


            </>

          )}


        </div>


      </div>


    </div>

  );

}


export default NLPReportAnalysis;