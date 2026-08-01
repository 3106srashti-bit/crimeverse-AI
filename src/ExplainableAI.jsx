import {
  BrainCircuit,
  ShieldCheck,
  Activity,
  Target,
  TrendingUp,
  MapPin,
  Clock3,
  Info,
  CheckCircle2,
} from 'lucide-react';


const factors = [
  {
    label: 'Historical Crime Density',
    value: 88,
    impact: 'HIGH',
    description:
      'The area has a high concentration of similar historical incidents.',
  },
  {
    label: 'Recent Incident Frequency',
    value: 76,
    impact: 'HIGH',
    description:
      'Recent incidents show an increasing activity pattern.',
  },
  {
    label: 'Location Risk Profile',
    value: 68,
    impact: 'MEDIUM',
    description:
      'The location has previously demonstrated elevated crime risk.',
  },
  {
    label: 'Time-Based Risk Pattern',
    value: 54,
    impact: 'MEDIUM',
    description:
      'The selected time period overlaps with historically active periods.',
  },
];


function ExplainableAI() {


  return (

    <div className="explainable-ai-page">


      <div className="explainable-ai-header">


        <div>


          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            TRANSPARENT AI INTELLIGENCE

          </div>


          <h1 className="dashboard-title">

            Explainable AI

          </h1>


          <p className="dashboard-subtitle">

            Understand why AI models generate predictions
            and which factors influence intelligence outcomes.

          </p>

        </div>


        <div className="explainable-status">

          <ShieldCheck size={16} />

          MODEL TRANSPARENCY ACTIVE

        </div>


      </div>


      <section className="explainable-overview-grid">


        <div className="dashboard-card prediction-card">


          <div className="card-header">


            <div>

              <p className="card-label">

                CURRENT AI PREDICTION

              </p>


              <h2>

                Crime Risk Assessment

              </h2>

            </div>


            <BrainCircuit size={22} />

          </div>


          <div className="risk-score-section">


            <div className="risk-score-circle">


              <strong>

                78

              </strong>


              <span>

                / 100

              </span>


            </div>


            <div className="risk-score-info">


              <span className="risk-level">

                ELEVATED RISK

              </span>


              <p>

                The AI model identifies an elevated
                probability of similar incidents occurring
                within the analyzed region.

              </p>

            </div>


          </div>


          <div className="prediction-meta">


            <div>

              <MapPin size={15} />

              Central District

            </div>


            <div>

              <Clock3 size={15} />

              Next 30 Days

            </div>


            <div>

              <Target size={15} />

              91.4% Confidence

            </div>


          </div>


        </div>


        <div className="dashboard-card model-card">


          <div className="card-header">


            <div>

              <p className="card-label">

                MODEL INFORMATION

              </p>


              <h2>

                AI Decision Engine

              </h2>

            </div>


          </div>


          <div className="model-info-list">


            <div>

              <span>

                MODEL VERSION

              </span>


              <strong>

                CV-PREDICT 2.4

              </strong>

            </div>


            <div>

              <span>

                MODEL TYPE

              </span>


              <strong>

                Gradient Boosting

              </strong>

            </div>


            <div>

              <span>

                TRAINING DATA

              </span>


              <strong>

                2.4M Records

              </strong>

            </div>


            <div>

              <span>

                LAST UPDATED

              </span>


              <strong>

                2 Hours Ago

              </strong>

            </div>


          </div>


          <div className="model-verified">


            <CheckCircle2 size={16} />

            Model output successfully validated

          </div>


        </div>


      </section>


      <section className="explainable-main-grid">


        <div className="dashboard-card factors-card">


          <div className="card-header">


            <div>

              <p className="card-label">

                PREDICTION EXPLANATION

              </p>


              <h2>

                Key Contributing Factors

              </h2>

            </div>


            <Info size={18} />

          </div>


          <div className="factor-list">


            {factors.map((factor) => (


              <div
                className="factor-item"
                key={factor.label}
              >


                <div className="factor-header">


                  <div>


                    <strong>

                      {factor.label}

                    </strong>


                    <p>

                      {factor.description}

                    </p>

                  </div>


                  <span
                    className={`factor-impact ${factor.impact.toLowerCase()}`}
                  >

                    {factor.impact}

                  </span>


                </div>


                <div className="factor-bar">


                  <div
                    style={{
                      width: `${factor.value}%`,
                    }}
                  />


                </div>


                <div className="factor-value">


                  <span>

                    CONTRIBUTION TO PREDICTION

                  </span>


                  <strong>

                    {factor.value}%

                  </strong>


                </div>


              </div>

            ))}


          </div>


        </div>


        <div className="explainable-side-column">


          <div className="dashboard-card reasoning-card">


            <div className="card-header">


              <div>

                <p className="card-label">

                  AI REASONING

                </p>


                <h2>

                  Why This Prediction?

                </h2>

              </div>


              <Activity size={18} />

            </div>


            <div className="reasoning-content">


              <div className="reasoning-icon">

                <TrendingUp size={21} />

              </div>


              <p>

                The model identified a combination of
                high historical crime density, increased
                recent incident frequency, and location-based
                risk signals. Together, these factors
                significantly increased the predicted risk score.

              </p>


            </div>


            <div className="reasoning-confidence">


              <div>


                <span>

                  EXPLANATION CONFIDENCE

                </span>


                <strong>

                  94.2%

                </strong>

              </div>


              <div className="confidence-bar">


                <div
                  style={{
                    width: '94.2%',
                  }}
                />


              </div>


            </div>


          </div>


          <div className="dashboard-card transparency-card">


            <div className="card-header">


              <div>

                <p className="card-label">

                  TRANSPARENCY CHECK

                </p>


                <h2>

                  Responsible AI

                </h2>

              </div>


              <ShieldCheck size={18} />

            </div>


            <div className="transparency-list">


              <div>

                <CheckCircle2 size={15} />

                <span>

                  Decision factors identified

                </span>

              </div>


              <div>

                <CheckCircle2 size={15} />

                <span>

                  Prediction confidence measured

                </span>

              </div>


              <div>

                <CheckCircle2 size={15} />

                <span>

                  Human analyst verification recommended

                </span>

              </div>


            </div>


          </div>


        </div>


      </section>


      <div className="dashboard-card explainable-disclaimer">


        <Info size={16} />


        <p>

          Explainable AI provides insight into the factors
          influencing model predictions. AI outputs should
          support — not replace — professional human analysis
          and operational decision-making.

        </p>


      </div>


    </div>

  );

}


export default ExplainableAI;