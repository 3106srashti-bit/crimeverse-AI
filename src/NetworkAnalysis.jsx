import {
  Network,
  Users,
  MapPin,
  FileText,
  ShieldAlert,
  Activity,
  Search,
} from 'lucide-react';

function NetworkAnalysis() {
  return (
    <div className="network-analysis-page">

      {/* HEADER */}

      <div className="network-page-header">

        <div>

          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            INVESTIGATION INTELLIGENCE

          </div>

          <h1 className="dashboard-title">
            Network Analysis
          </h1>

          <p className="dashboard-subtitle">
            Discover hidden relationships between suspects,
            incidents, locations, and criminal networks.
          </p>

        </div>


        <div className="network-status-badge">

          <Activity size={15} />

          NETWORK ENGINE ONLINE

        </div>

      </div>


      {/* SEARCH */}

      <div className="network-search-card">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search suspect, case, incident, or location..."
        />

        <button>
          Analyze
        </button>

      </div>


      {/* STATS */}

      <section className="network-stats-grid">

        <div className="network-stat-card">

          <div className="network-stat-icon">
            <Users size={20} />
          </div>

          <span>
            ENTITIES
          </span>

          <strong>
            1,248
          </strong>

          <small>
            Connected entities
          </small>

        </div>


        <div className="network-stat-card">

          <div className="network-stat-icon">
            <Network size={20} />
          </div>

          <span>
            CONNECTIONS
          </span>

          <strong>
            3,847
          </strong>

          <small>
            Relationships detected
          </small>

        </div>


        <div className="network-stat-card">

          <div className="network-stat-icon">
            <ShieldAlert size={20} />
          </div>

          <span>
            HIGH-RISK NODES
          </span>

          <strong>
            86
          </strong>

          <small>
            Requires investigation
          </small>

        </div>


        <div className="network-stat-card">

          <div className="network-stat-icon">
            <MapPin size={20} />
          </div>

          <span>
            LOCATIONS
          </span>

          <strong>
            214
          </strong>

          <small>
            Connected locations
          </small>

        </div>

      </section>


      {/* MAIN NETWORK AREA */}

      <section className="network-main-grid">


        <div className="network-visual-card">

          <div className="network-card-header">

            <div>

              <p className="card-label">
                RELATIONSHIP GRAPH
              </p>

              <h2>
                Intelligence Network
              </h2>

            </div>

            <span className="live-indicator">
              LIVE
            </span>

          </div>


          <div className="network-graph">


            <div className="connection connection-one" />

            <div className="connection connection-two" />

            <div className="connection connection-three" />

            <div className="connection connection-four" />


            <div className="network-node central-node">

              <Users size={25} />

              <span>
                SUBJECT A
              </span>

            </div>


            <div className="network-node node-one">

              <ShieldAlert size={19} />

              <span>
                SUBJECT B
              </span>

            </div>


            <div className="network-node node-two">

              <FileText size={19} />

              <span>
                CASE 08421
              </span>

            </div>


            <div className="network-node node-three">

              <MapPin size={19} />

              <span>
                LOCATION
              </span>

            </div>


            <div className="network-node node-four">

              <Users size={19} />

              <span>
                SUBJECT C
              </span>

            </div>


          </div>


          <div className="network-legend">

            <span>
              <i className="legend-person" />
              Person
            </span>

            <span>
              <i className="legend-case" />
              Case
            </span>

            <span>
              <i className="legend-location" />
              Location
            </span>

          </div>

        </div>


        {/* RIGHT PANEL */}

        <div className="network-insights-panel">


          <div className="dashboard-card network-insight-card">

            <div className="card-header">

              <div>

                <p className="card-label">
                  AI DETECTION
                </p>

                <h2>
                  Network Insights
                </h2>

              </div>

            </div>


            <div className="network-insight-item">

              <div className="insight-number">
                01
              </div>

              <div>

                <strong>
                  Strong Connection Detected
                </strong>

                <p>
                  Subject A is connected to 4 active
                  investigations.
                </p>

              </div>

            </div>


            <div className="network-insight-item">

              <div className="insight-number">
                02
              </div>

              <div>

                <strong>
                  Repeated Location Pattern
                </strong>

                <p>
                  Multiple incidents are linked to the
                  same geographic area.
                </p>

              </div>

            </div>


            <div className="network-insight-item">

              <div className="insight-number">
                03
              </div>

              <div>

                <strong>
                  Hidden Relationship
                </strong>

                <p>
                  AI detected an indirect connection
                  between Subject B and Case 08421.
                </p>

              </div>

            </div>

          </div>


          <div className="dashboard-card network-risk-card">

            <div className="card-header">

              <div>

                <p className="card-label">
                  RISK ASSESSMENT
                </p>

                <h2>
                  Network Risk
                </h2>

              </div>

            </div>


            <div className="network-risk-score">

              <strong>
                87%
              </strong>

              <span>
                HIGH RISK
              </span>

            </div>


            <div className="network-risk-bar">

              <div />

            </div>


            <p className="network-risk-description">

              This network contains multiple high-risk
              entities and repeated connections to active
              investigations.

            </p>

          </div>


        </div>

      </section>

    </div>
  );
}

export default NetworkAnalysis;