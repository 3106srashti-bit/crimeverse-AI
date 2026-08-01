import {
  BrainCircuit,
  BarChart3,
  TrendingUp,
  FileText,
  Network,
  Database,
  Sparkles,
  Target,
  Shield,
  Search,
  Activity,
  ArrowUpRight,
} from 'lucide-react';

const pageData = {
  'Crime Analytics': {
    icon: BarChart3,
    label: 'CRIME ANALYTICS',
    title: 'Crime Analytics',
    description:
      'Analyze crime patterns, trends, categories, and regional intelligence signals.',
    metric1: ['2.4M', 'Total Records'],
    metric2: ['247', 'Active Hotspots'],
    metric3: ['18.6%', 'Trend Increase'],
  },

  'Predictive Intelligence': {
    icon: TrendingUp,
    label: 'PREDICTIVE INTELLIGENCE',
    title: 'Predictive Intelligence',
    description:
      'AI-powered forecasting of emerging crime patterns and potential risk zones.',
    metric1: ['91.4%', 'Model Accuracy'],
    metric2: ['12,480', 'Predictions'],
    metric3: ['7 Days', 'Forecast Window'],
  },

  'Case Intelligence': {
    icon: FileText,
    label: 'CASE INTELLIGENCE',
    title: 'Case Intelligence',
    description:
      'Centralized intelligence workspace for investigating active cases.',
    metric1: ['1,284', 'Active Cases'],
    metric2: ['86', 'Priority Cases'],
    metric3: ['94%', 'Data Completeness'],
  },

  'Network Analysis': {
    icon: Network,
    label: 'NETWORK ANALYSIS',
    title: 'Network Analysis',
    description:
      'Discover hidden relationships between people, locations, organizations, and events.',
    metric1: ['8,492', 'Entities'],
    metric2: ['24,680', 'Connections'],
    metric3: ['312', 'Key Clusters'],
  },

  'Evidence Intelligence': {
    icon: Database,
    label: 'EVIDENCE INTELLIGENCE',
    title: 'Evidence Intelligence',
    description:
      'Organize, analyze, and connect evidence across investigations.',
    metric1: ['48,290', 'Evidence Items'],
    metric2: ['12,842', 'Linked Cases'],
    metric3: ['98.2%', 'Indexed'],
  },

  'AI Investigator': {
    icon: BrainCircuit,
    label: 'AI INVESTIGATOR',
    title: 'AI Investigator',
    description:
      'Interact with an AI intelligence assistant to investigate crime data and cases.',
    metric1: ['24/7', 'AI Availability'],
    metric2: ['94%', 'AI Confidence'],
    metric3: ['18.4K', 'Queries Processed'],
  },

  'NLP Report Analysis': {
    icon: FileText,
    label: 'NLP REPORT ANALYSIS',
    title: 'NLP Report Analysis',
    description:
      'Extract entities, locations, events, and intelligence from unstructured reports.',
    metric1: ['86,420', 'Reports Processed'],
    metric2: ['97%', 'Extraction Accuracy'],
    metric3: ['42K', 'Entities Found'],
  },

  'Knowledge Graph': {
    icon: Network,
    label: 'KNOWLEDGE GRAPH',
    title: 'Knowledge Graph',
    description:
      'Explore connected intelligence across cases, people, locations, and events.',
    metric1: ['24,680', 'Connections'],
    metric2: ['8,492', 'Entities'],
    metric3: ['1,284', 'Cases Linked'],
  },

  'Explainable AI': {
    icon: Sparkles,
    label: 'EXPLAINABLE AI',
    title: 'Explainable AI',
    description:
      'Understand why AI models generate specific predictions and intelligence signals.',
    metric1: ['94%', 'Explainability'],
    metric2: ['91.4%', 'Accuracy'],
    metric3: ['100%', 'Auditability'],
  },

  'Policy Intelligence': {
    icon: Target,
    label: 'POLICY INTELLIGENCE',
    title: 'Policy Intelligence',
    description:
      'Transform crime intelligence into insights for policy and strategic planning.',
    metric1: ['42', 'Policy Signals'],
    metric2: ['18', 'Regions Analyzed'],
    metric3: ['86%', 'Impact Confidence'],
  },

  Reports: {
    icon: FileText,
    label: 'INTELLIGENCE REPORTS',
    title: 'Reports',
    description:
      'Generate and explore intelligence reports from analyzed crime data.',
    metric1: ['428', 'Reports'],
    metric2: ['86', 'This Month'],
    metric3: ['98%', 'Generated Successfully'],
  },

  'Data Sources': {
    icon: Database,
    label: 'DATA SOURCES',
    title: 'Data Sources',
    description:
      'Manage and monitor the data streams powering CrimeVerse AI.',
    metric1: ['24', 'Active Sources'],
    metric2: ['2.4M', 'Records'],
    metric3: ['99.8%', 'Data Uptime'],
  },
};

function IntelligencePage({ page }) {
  const data = pageData[page] || pageData['Crime Analytics'];
  const Icon = data.icon;

  return (
    <div className="intelligence-page">

      <div className="intelligence-page-header">

        <div>

          <div className="dashboard-eyebrow">
            <span className="status-dot" />
            {data.label}
          </div>

          <h1 className="dashboard-title">
            {data.title}
          </h1>

          <p className="dashboard-subtitle">
            {data.description}
          </p>

        </div>

        <div className="intelligence-page-icon">
          <Icon size={28} />
        </div>

      </div>


      <section className="intelligence-metrics">

        <div className="intelligence-metric-card">

          <div className="metric-card-icon">
            <Activity size={18} />
          </div>

          <span>
            {data.metric1[1]}
          </span>

          <strong>
            {data.metric1[0]}
          </strong>

          <small>
            Current intelligence status
          </small>

        </div>


        <div className="intelligence-metric-card">

          <div className="metric-card-icon">
            <Target size={18} />
          </div>

          <span>
            {data.metric2[1]}
          </span>

          <strong>
            {data.metric2[0]}
          </strong>

          <small>
            AI-powered intelligence metric
          </small>

        </div>


        <div className="intelligence-metric-card">

          <div className="metric-card-icon">
            <Sparkles size={18} />
          </div>

          <span>
            {data.metric3[1]}
          </span>

          <strong>
            {data.metric3[0]}
          </strong>

          <small>
            Updated in real time
          </small>

        </div>

      </section>


      <section className="intelligence-content-grid">


        <div className="dashboard-card intelligence-main-card">

          <div className="card-header">

            <div>

              <p className="card-label">
                <BrainCircuit size={13} />
                AI INTELLIGENCE ENGINE
              </p>

              <h2>
                Intelligence Workspace
              </h2>

            </div>

            <div className="ai-badge">
              AI ONLINE
            </div>

          </div>


          <div className="workspace-placeholder">

            <div className="workspace-icon">
              <Icon size={30} />
            </div>

            <h3>
              {data.title} Workspace
            </h3>

            <p>
              This intelligence module is ready to process,
              analyze, and visualize crime intelligence data.
            </p>

            <button className="primary-intelligence-button">
              <Search size={16} />
              Explore Intelligence
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>


        <div className="dashboard-card intelligence-activity-card">

          <div className="card-header">

            <div>

              <p className="card-label">
                SYSTEM ACTIVITY
              </p>

              <h2>
                Recent Activity
              </h2>

            </div>

          </div>


          <div className="activity-list">

            <div className="activity-item">

              <div className="activity-dot" />

              <div>

                <strong>
                  Intelligence model updated
                </strong>

                <span>
                  2 minutes ago
                </span>

              </div>

            </div>


            <div className="activity-item">

              <div className="activity-dot purple" />

              <div>

                <strong>
                  New data processed
                </strong>

                <span>
                  14 minutes ago
                </span>

              </div>

            </div>


            <div className="activity-item">

              <div className="activity-dot blue" />

              <div>

                <strong>
                  AI analysis completed
                </strong>

                <span>
                  32 minutes ago
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default IntelligencePage;