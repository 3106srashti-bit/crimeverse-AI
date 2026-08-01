import {
  Database,
  Server,
  Globe,
  Shield,
  Wifi,
  CheckCircle2,
  Clock3,
  Activity,
} from 'lucide-react';

const sources = [
  {
    name: 'National Crime Records',
    type: 'Government Database',
    status: 'Connected',
    updated: '2 mins ago',
  },
  {
    name: 'Cyber Intelligence Feed',
    type: 'Live API',
    status: 'Connected',
    updated: 'Live',
  },
  {
    name: 'Police FIR Database',
    type: 'Internal',
    status: 'Connected',
    updated: '5 mins ago',
  },
  {
    name: 'CCTV Analytics',
    type: 'AI Vision',
    status: 'Syncing',
    updated: '30 secs ago',
  },
];

function DataSources() {
  return (
    <div className="datasource-page">

      <div className="datasource-header">

        <div>

          <div className="dashboard-eyebrow">
            <span className="status-dot"/>
            DATA MANAGEMENT
          </div>

          <h1 className="dashboard-title">
            Data Sources
          </h1>

          <p className="dashboard-subtitle">
            Monitor all connected intelligence databases,
            APIs and external data providers.
          </p>

        </div>

        <div className="datasource-status">

          <Wifi size={16}/>

          ALL SYSTEMS ONLINE

        </div>

      </div>

      <section className="case-stats-grid">

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <Database size={20}/>
          </div>

          <span>CONNECTED SOURCES</span>

          <strong>28</strong>

          <small>Active integrations</small>

        </div>

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <Activity size={20}/>
          </div>

          <span>LIVE STREAMS</span>

          <strong>12</strong>

          <small>Real-time feeds</small>

        </div>

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <Shield size={20}/>
          </div>

          <span>SECURE CHANNELS</span>

          <strong>100%</strong>

          <small>Encrypted</small>

        </div>

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <Globe size={20}/>
          </div>

          <span>GLOBAL SOURCES</span>

          <strong>9</strong>

          <small>External providers</small>

        </div>

      </section>

      <div className="dashboard-card datasource-card">

        <div className="card-header">

          <div>

            <p className="card-label">
              CONNECTED DATABASES
            </p>

            <h2>
              Active Sources
            </h2>

          </div>

        </div>

        <div className="datasource-list">

          {sources.map((source) => (

            <div
              className="datasource-item"
              key={source.name}
            >

              <div className="datasource-left">

                <div className="datasource-icon">

                  <Server size={18}/>

                </div>

                <div>

                  <strong>
                    {source.name}
                  </strong>

                  <span>
                    {source.type}
                  </span>

                </div>

              </div>

              <div className="datasource-update">

                <Clock3 size={15}/>

                {source.updated}

              </div>

              <div>

                <span
                  className={`source-status ${source.status.toLowerCase()}`}
                >

                  <CheckCircle2 size={14}/>

                  {source.status}

                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default DataSources;