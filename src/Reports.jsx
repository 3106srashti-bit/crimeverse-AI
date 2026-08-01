import {
  FileText,
  Download,
  Eye,
  Calendar,
  BrainCircuit,
  Shield,
  Clock3,
} from 'lucide-react';

const reports = [
  {
    title: 'Monthly Crime Intelligence Report',
    category: 'Monthly',
    date: 'Today',
    status: 'Ready',
  },
  {
    title: 'Cybercrime Threat Assessment',
    category: 'AI Analysis',
    date: 'Yesterday',
    status: 'Ready',
  },
  {
    title: 'Crime Hotspot Analysis',
    category: 'Geospatial',
    date: '2 Days Ago',
    status: 'Ready',
  },
  {
    title: 'Predictive Crime Forecast',
    category: 'Prediction',
    date: 'Today',
    status: 'Processing',
  },
];

function Reports() {
  return (
    <div className="reports-page">

      <div className="reports-header">

        <div>

          <div className="dashboard-eyebrow">
            <span className="status-dot"/>
            REPORT CENTER
          </div>

          <h1 className="dashboard-title">
            Intelligence Reports
          </h1>

          <p className="dashboard-subtitle">
            Generate, export and manage AI-powered intelligence reports.
          </p>

        </div>

        <button className="generate-report-btn">
          <BrainCircuit size={17}/>
          GENERATE REPORT
        </button>

      </div>

      <section className="case-stats-grid">

        <div className="case-stat-card">
          <div className="case-stat-icon">
            <FileText size={20}/>
          </div>

          <span>TOTAL REPORTS</span>

          <strong>842</strong>

          <small>Available in library</small>

        </div>

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <BrainCircuit size={20}/>
          </div>

          <span>AI GENERATED</span>

          <strong>278</strong>

          <small>Automatically created</small>

        </div>

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <Shield size={20}/>
          </div>

          <span>SECURE REPORTS</span>

          <strong>194</strong>

          <small>Shared with agencies</small>

        </div>

        <div className="case-stat-card">

          <div className="case-stat-icon">
            <Clock3 size={20}/>
          </div>

          <span>GENERATED TODAY</span>

          <strong>18</strong>

          <small>Latest intelligence</small>

        </div>

      </section>

      <div className="dashboard-card reports-card">

        <div className="card-header">

          <div>

            <p className="card-label">
              REPORT LIBRARY
            </p>

            <h2>
              Available Reports
            </h2>

          </div>

        </div>

        <div className="reports-list">

          {reports.map((report)=>(

            <div
              className="report-item"
              key={report.title}
            >

              <div className="report-left">

                <div className="report-icon">
                  <FileText size={18}/>
                </div>

                <div>

                  <strong>
                    {report.title}
                  </strong>

                  <span>
                    {report.category}
                  </span>

                </div>

              </div>

              <div className="report-date">

                <Calendar size={15}/>
                {report.date}

              </div>

              <div>

                <span className={`report-status ${report.status.toLowerCase()}`}>
                  {report.status}
                </span>

              </div>

              <div className="report-actions">

                <button>
                  <Eye size={16}/>
                </button>

                <button>
                  <Download size={16}/>
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Reports;