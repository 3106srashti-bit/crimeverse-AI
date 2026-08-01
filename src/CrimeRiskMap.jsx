import {
  MapPin,
  Layers,
  Target,
  Activity,
  AlertTriangle,
  Navigation,
} from 'lucide-react';

const crimeZones = [
  {
    name: 'Central District',
    type: 'Cybercrime',
    incidents: 428,
    risk: 'HIGH',
    position: { top: '35%', left: '48%' },
  },
  {
    name: 'North District',
    type: 'Robbery',
    incidents: 312,
    risk: 'CRITICAL',
    position: { top: '18%', left: '62%' },
  },
  {
    name: 'East District',
    type: 'Vehicle Theft',
    incidents: 246,
    risk: 'MEDIUM',
    position: { top: '56%', left: '74%' },
  },
  {
    name: 'West District',
    type: 'Fraud',
    incidents: 198,
    risk: 'HIGH',
    position: { top: '63%', left: '25%' },
  },
  {
    name: 'South District',
    type: 'Assault',
    incidents: 156,
    risk: 'LOW',
    position: { top: '78%', left: '52%' },
  },
];

function CrimeRiskMap() {
  return (
    <div className="geospatial-page">

      <div className="geospatial-header">

        <div>
          <div className="dashboard-eyebrow">
            <span className="status-dot" />
            GEOSPATIAL INTELLIGENCE
          </div>

          <h1 className="dashboard-title">
            Geospatial Analysis
          </h1>

          <p className="dashboard-subtitle">
            Explore crime hotspots, risk zones, and geographic intelligence signals.
          </p>
        </div>

        <div className="map-status">
          <span className="status-dot" />
          LIVE MAP DATA
        </div>

      </div>


      <div className="geospatial-layout">


        <div className="crime-map-panel">

          <div className="map-toolbar">

            <div className="map-toolbar-title">
              <MapPin size={17} />
              CRIME RISK HEATMAP
            </div>

            <div className="map-toolbar-actions">

              <button>
                <Layers size={15} />
                Layers
              </button>

              <button>
                <Target size={15} />
                Focus Area
              </button>

            </div>

          </div>


          <div className="crime-map">

            <div className="map-grid" />

            <div className="map-road road-one" />
            <div className="map-road road-two" />
            <div className="map-road road-three" />
            <div className="map-road road-four" />


            {crimeZones.map((zone) => (

              <div
                key={zone.name}
                className={`map-hotspot ${zone.risk.toLowerCase()}`}
                style={{
                  top: zone.position.top,
                  left: zone.position.left,
                }}
              >

                <div className="hotspot-pulse" />

                <div className="hotspot-marker">
                  <MapPin size={16} />
                </div>

                <div className="hotspot-tooltip">

                  <strong>
                    {zone.name}
                  </strong>

                  <span>
                    {zone.type}
                  </span>

                  <small>
                    {zone.incidents} incidents · {zone.risk} RISK
                  </small>

                </div>

              </div>

            ))}


            <div className="map-location-label label-central">
              CENTRAL DISTRICT
            </div>

            <div className="map-location-label label-north">
              NORTH DISTRICT
            </div>

            <div className="map-location-label label-east">
              EAST DISTRICT
            </div>


            <div className="map-legend">

              <p>
                RISK LEVEL
              </p>

              <div>
                <span className="legend-dot critical" />
                Critical
              </div>

              <div>
                <span className="legend-dot high" />
                High
              </div>

              <div>
                <span className="legend-dot medium" />
                Medium
              </div>

              <div>
                <span className="legend-dot low" />
                Low
              </div>

            </div>


            <div className="map-coordinates">
              LAT 26.2183° N · LONG 78.1828° E
            </div>

          </div>

        </div>


        <div className="geospatial-sidebar">


          <div className="dashboard-card map-summary-card">

            <div className="card-header">

              <div>
                <p className="card-label">
                  <Activity size={13} />
                  LIVE INTELLIGENCE
                </p>

                <h2>
                  Risk Overview
                </h2>
              </div>

            </div>


            <div className="risk-score">

              <div className="risk-score-circle">
                <strong>
                  78
                </strong>

                <span>
                  /100
                </span>
              </div>

              <div>
                <strong>
                  Elevated Risk
                </strong>

                <p>
                  Current regional risk level
                </p>
              </div>

            </div>


            <div className="risk-progress">

              <div
                style={{
                  width: '78%',
                }}
              />

            </div>

          </div>


          <div className="dashboard-card hotspot-list-card">

            <div className="card-header">

              <div>
                <p className="card-label">
                  ACTIVE ZONES
                </p>

                <h2>
                  Top Hotspots
                </h2>
              </div>

              <span className="hotspot-count">
                05
              </span>

            </div>


            <div className="hotspot-list">

              {crimeZones.slice(0, 4).map((zone) => (

                <div
                  className="hotspot-list-item"
                  key={zone.name}
                >

                  <div
                    className={`hotspot-list-icon ${zone.risk.toLowerCase()}`}
                  >
                    <MapPin size={15} />
                  </div>

                  <div className="hotspot-list-content">

                    <strong>
                      {zone.name}
                    </strong>

                    <span>
                      {zone.type}
                    </span>

                  </div>

                  <div className="hotspot-list-number">

                    <strong>
                      {zone.incidents}
                    </strong>

                    <span>
                      incidents
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          <div className="dashboard-card prediction-card">

            <div className="prediction-icon">
              <AlertTriangle size={20} />
            </div>

            <div>

              <p className="card-label">
                AI PREDICTION
              </p>

              <h3>
                Elevated activity expected
              </h3>

              <p>
                AI models predict increased incident activity in the Central District over the next 7 days.
              </p>

            </div>

          </div>


        </div>

      </div>

    </div>
  );
}

export default CrimeRiskMap;