import {
  Target,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  BrainCircuit,
  Activity,
  MapPin,
  Users,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const recommendations = [
  {
    title: 'Increase Cybercrime Patrol',
    priority: 'HIGH',
    description:
      'Deploy specialized cybercrime investigation teams in Central District.',
  },
  {
    title: 'Expand CCTV Coverage',
    priority: 'MEDIUM',
    description:
      'Install surveillance in emerging hotspot corridors.',
  },
  {
    title: 'Community Awareness Program',
    priority: 'LOW',
    description:
      'Educate citizens about digital fraud and phishing attacks.',
  },
];

const regions = [
  {
    district: 'Central',
    risk: 'High',
    trend: '+18%',
    incidents: 462,
  },
  {
    district: 'North',
    risk: 'High',
    trend: '+12%',
    incidents: 381,
  },
  {
    district: 'East',
    risk: 'Medium',
    trend: '+6%',
    incidents: 274,
  },
  {
    district: 'West',
    risk: 'Low',
    trend: '-4%',
    incidents: 163,
  },
];

function PolicyIntelligence() {
  return (
    <div className="policy-page">

      <div className="policy-header">

        <div>

          <div className="dashboard-eyebrow">
            <span className="status-dot" />
            STRATEGIC POLICY INTELLIGENCE
          </div>

          <h1 className="dashboard-title">
            Policy Intelligence
          </h1>

          <p className="dashboard-subtitle">
            AI-generated strategic recommendations for law
            enforcement agencies and policymakers.
          </p>

        </div>

        <div className="policy-status">
          <ShieldCheck size={16} />
          POLICY ENGINE ONLINE
        </div>

      </div>


      <section className="policy-stats-grid">

        <div className="case-stat-card">
          <div className="case-stat-icon">
            <Target size={20} />
          </div>
          <span>ACTIVE POLICIES</span>
          <strong>18</strong>
          <small>Currently monitored</small>
        </div>

        <div className="case-stat-card">
          <div className="case-stat-icon">
            <TrendingUp size={20} />
          </div>
          <span>RISK REDUCTION</span>
          <strong>24%</strong>
          <small>Predicted improvement</small>
        </div>

        <div className="case-stat-card">
          <div className="case-stat-icon">
            <Users size={20} />
          </div>
          <span>RESOURCE PLANS</span>
          <strong>42</strong>
          <small>Deployment strategies</small>
        </div>

        <div className="case-stat-card">
          <div className="case-stat-icon">
            <BrainCircuit size={20} />
          </div>
          <span>AI CONFIDENCE</span>
          <strong>93%</strong>
          <small>Recommendation accuracy</small>
        </div>

      </section>


      <div className="policy-layout">

        <div className="dashboard-card">

          <div className="card-header">

            <div>

              <p className="card-label">
                AI POLICY RECOMMENDATIONS
              </p>

              <h2>
                Strategic Actions
              </h2>

            </div>

          </div>

          <div className="policy-list">

            {recommendations.map((item) => (

              <div
                className="policy-item"
                key={item.title}
              >

                <div className="policy-icon">
                  <Sparkles size={18} />
                </div>

                <div className="policy-content">

                  <div className="policy-title-row">

                    <strong>
                      {item.title}
                    </strong>

                    <span
                      className={`policy-priority ${item.priority.toLowerCase()}`}
                    >
                      {item.priority}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-header">

            <div>

              <p className="card-label">
                DISTRICT COMPARISON
              </p>

              <h2>
                Risk Overview
              </h2>

            </div>

          </div>

          <div className="district-list">

            {regions.map((region) => (

              <div
                className="district-item"
                key={region.district}
              >

                <div>

                  <strong>
                    {region.district} District
                  </strong>

                  <span>
                    {region.incidents} incidents
                  </span>

                </div>

                <div className="district-right">

                  <span className="district-risk">
                    {region.risk}
                  </span>

                  <span className="district-trend">
                    {region.trend}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      <section className="policy-bottom-grid">

        <div className="dashboard-card">

          <div className="card-header">

            <div>

              <p className="card-label">
                AI POLICY BRIEF
              </p>

              <h2>
                Executive Summary
              </h2>

            </div>

          </div>

          <div className="policy-brief">

            <Activity size={22} />

            <p>
              CrimeVerse AI recommends prioritizing cybercrime
              prevention initiatives, increasing surveillance
              coverage in high-density areas, strengthening
              intelligence sharing across districts, and
              reallocating investigative resources toward
              recurring hotspot locations. These measures are
              predicted to reduce overall crime risk by
              approximately 24% over the next quarter.
            </p>

          </div>

        </div>


        <div className="dashboard-card">

          <div className="card-header">

            <div>

              <p className="card-label">
                RESOURCE DEPLOYMENT
              </p>

              <h2>
                Recommended Allocation
              </h2>

            </div>

          </div>

          <div className="deployment-list">

            <div>
              <MapPin size={16}/>
              Central District Patrols
              <strong>+18%</strong>
            </div>

            <div>
              <AlertTriangle size={16}/>
              Cyber Response Units
              <strong>+12%</strong>
            </div>

            <div>
              <Users size={16}/>
              Community Programs
              <strong>+8%</strong>
            </div>

            <div>
              <ArrowUpRight size={16}/>
              Intelligence Analysts
              <strong>+10%</strong>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default PolicyIntelligence;