import { useState, useEffect } from "react";
import CrimeRiskMap from './CrimeRiskMap';
import CrimeAnalytics from './CrimeAnalytics';
import IntelligencePage from './IntelligencePage';
import AIInvestigator from './AIInvestigator';
import NetworkAnalysis from './NetworkAnalysis';
import PredictiveIntelligence from './PredictiveIntelligence';
import CaseIntelligence from './CaseIntelligence';
import EvidenceIntelligence from './EvidenceIntelligence';
import NLPReportAnalysis from './NLPReportAnalysis';
import KnowledgeGraph from './KnowledgeGraph';
import ExplainableAI from './ExplainableAI';
import PolicyIntelligence from './PolicyIntelligence';
import Reports from './Reports';
import DataSources from './DataSources';

import {
  Activity,
  BarChart3,
  BrainCircuit,
  Database,
  FileText,
  Globe2,
  Network,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Bell,
  Menu,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  MapPin,
  Clock3,
  ChevronRight,
} from 'lucide-react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';







const navigation = [
  {
    title: 'MAIN',
    items: [
      { label: 'Command Center', icon: Activity },
      { label: 'Crime Analytics', icon: BarChart3 },
      { label: 'Predictive Intelligence', icon: TrendingUp },
      { label: 'Geospatial Analysis', icon: Globe2 },
    ],
  },
  {
    title: 'INVESTIGATIONS',
    items: [
      { label: 'Case Intelligence', icon: FileText },
      { label: 'Network Analysis', icon: Network },
      { label: 'Evidence Intelligence', icon: Database },
    ],
  },
  {
    title: 'AI INTELLIGENCE',
    items: [
      { label: 'AI Investigator', icon: BrainCircuit },
      { label: 'NLP Report Analysis', icon: FileText },
      { label: 'Knowledge Graph', icon: Network },
      { label: 'Explainable AI', icon: Sparkles },
    ],
  },
  {
    title: 'INSIGHTS',
    items: [
      { label: 'Policy Intelligence', icon: Target },
      { label: 'Reports', icon: FileText },
      { label: 'Data Sources', icon: Database },
    ],
  },
];


function StatCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
  description,
}) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <div className="stat-icon">
          <Icon size={20} />
        </div>

        <div
          className={`stat-change ${
            positive ? 'positive' : 'negative'
          }`}
        >

          {positive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          {change}

        </div>

      </div>

      <p className="stat-title">
        {title}
      </p>

      <h2 className="stat-value">
        {value}
      </h2>

      <p className="stat-description">
        {description}
      </p>

    </div>
  );
}


function App() {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [activePage, setActivePage] =
    useState('Command Center');

   const [dashboardData, setDashboardData] = useState({
  totalRecords: 0,
  hotspots: 0,
  predictions: 0,
  accuracy: 0,
}); 

const [crimeTrendData, setCrimeTrendData] = useState([]);

const [crimeCategoryData, setCrimeCategoryData] = useState([]);

const [recentIncidents, setRecentIncidents] = useState([]);

const [aiInsight, setAiInsight] = useState({
  title: "",
  summary: "",
  confidence: 0,
});

useEffect(() => {

  fetch("http://127.0.0.1:5000/summary")
    .then((res) => res.json())
    .then((data) => setDashboardData(data))
    .catch((err) => console.log(err));

  fetch("http://127.0.0.1:5000/trend")
    .then((res) => res.json())
    .then((data) => setCrimeTrendData(data))
    .catch((err) => console.log(err));

  fetch("http://127.0.0.1:5000/crime-types")
  .then((res) => res.json())
  .then((data) => setCrimeCategoryData(data))
  .catch((err) => console.log(err));

  fetch("http://127.0.0.1:5000/recent-incidents")
  .then((res) => res.json())
  .then((data) => setRecentIncidents(data))
  .catch((err) => console.log(err));

  fetch("http://127.0.0.1:5000/ai-insight")
  .then((res) => res.json())
  .then((data) => setAiInsight(data))
  .catch((err) => console.log(err));

}, []);


  return (

    <div className="app-container">


      {sidebarOpen && (

        <div
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />

      )}


      <aside
        className={`sidebar ${
          sidebarOpen ? 'sidebar-open' : ''
        }`}
      >

        <div className="sidebar-header">

          <div className="brand-container">

            <div className="brand-icon">
              <Shield size={22} />
            </div>

            <div>

              <h1>
                CrimeVerse
              </h1>

              <p>
                AI INTELLIGENCE
              </p>

            </div>

          </div>

          <button
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >

            <X size={20} />

          </button>

        </div>


        <div className="sidebar-content">

          {navigation.map((section) => (

            <div
              className="navigation-section"
              key={section.title}
            >

              <p className="section-title">
                {section.title}
              </p>

              <div className="navigation-items">

                {section.items.map((item) => {

                  const Icon = item.icon;

                  const isActive =
                    activePage === item.label;

                  return (

                    <button
                      key={item.label}
                      className={`navigation-item ${
                        isActive ? 'active' : ''
                      }`}
                      onClick={() => {

                        setActivePage(item.label);

                        setSidebarOpen(false);

                      }}
                    >

                      <Icon size={18} />

                      <span>
                        {item.label}
                      </span>

                      {isActive && (

                        <span
                          className="active-indicator"
                        />

                      )}

                    </button>

                  );

                })}

              </div>

            </div>

          ))}

        </div>


        <div className="sidebar-user">

          <div className="user-avatar">
            IA
          </div>

          <div className="user-info">

            <p>
              Intelligence Analyst
            </p>

            <span>
              Secure Session
            </span>

          </div>

          <div className="online-indicator" />

        </div>

      </aside>


      <div className="main-wrapper">


        <header className="topbar">


          <div className="topbar-left">

            <button
              className="mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
            >

              <Menu size={20} />

            </button>


            <div>

              <div className="breadcrumb">

                <span>
                  Operations
                </span>

                <b>
                  /
                </b>

                <strong>
                  {activePage}
                </strong>

              </div>

              <p className="page-description">
                Real-time intelligence overview
              </p>

            </div>

          </div>


          <div className="topbar-right">

            <button className="search-button">

              <Search size={16} />

              <span>
                Search intelligence...
              </span>

              <kbd>
                ⌘ K
              </kbd>

            </button>


            <div className="system-status">

              <span className="status-dot" />

              AI SYSTEMS ONLINE

            </div>


            <button className="notification-button">

              <Bell size={18} />

              <span className="notification-dot" />

            </button>


            <div className="topbar-avatar">
              IA
            </div>

          </div>

        </header>


        <main className="main-content">
   


  {activePage === 'Geospatial Analysis' ? (

  <CrimeRiskMap />

) : activePage === 'Crime Analytics' ? (

  <CrimeAnalytics />

) : activePage === 'AI Investigator' ? (

  <AIInvestigator />

) : activePage === 'Network Analysis' ? (

  <NetworkAnalysis />

) : activePage === 'Predictive Intelligence' ? (

  <PredictiveIntelligence />

) : activePage === 'Case Intelligence' ? (

  <CaseIntelligence />

) : activePage === 'Evidence Intelligence' ? (

  <EvidenceIntelligence />

) : activePage === 'NLP Report Analysis' ? (

  <NLPReportAnalysis />
) : activePage === 'Knowledge Graph' ? (

  <KnowledgeGraph />
) : activePage === 'Explainable AI' ? (

  <ExplainableAI />
) : activePage === 'Policy Intelligence' ? (

  <PolicyIntelligence />
) : activePage === 'Reports' ? (

  <Reports />
) : activePage === 'Data Sources' ? (
    <DataSources />





) : (


<>

          <div className="dashboard-header">


            <div>

              <div className="dashboard-eyebrow">

                <span className="status-dot" />

                LIVE INTELLIGENCE FEED

              </div>


              <h1 className="dashboard-title">

                Command Center

              </h1>


              <p className="dashboard-subtitle">

                AI-powered overview of current crime
                intelligence and predictive signals.

              </p>

            </div>


            <div className="dashboard-time">

              <Clock3 size={16} />

              LAST UPDATED 2 MIN AGO

            </div>


          </div>


          <section className="stats-grid">


            <StatCard
              title="Total Crime Records"
              value={dashboardData.total_cases}
              change="12.8%"
              positive={true}
              icon={Database}
              description="Across monitored regions"
            />


            <StatCard
              title="Active Hotspots"
              value={dashboardData.top_state}
              change="8.4%"
              positive={false}
              icon={MapPin}
              description="High-risk zones detected"
            />


            <StatCard
              title="AI Predictions"
              value={dashboardData.top_crime}
              change="24.6%"
              positive={true}
              icon={BrainCircuit}
              description="Predictions generated"
            />


            <StatCard
              title="Model Accuracy"
              value="91.4%"
              change="3.2%"
              positive={true}
              icon={Target}
              description="Current prediction confidence"
            />


          </section>


          <section className="dashboard-grid">


            <div className="dashboard-card trend-card">


              <div className="card-header">


                <div>

                  <p className="card-label">
                    CRIME INTELLIGENCE
                  </p>

                  <h2>
                    Incident Trends
                  </h2>

                </div>


                <button className="card-action">

                  Last 12 months

                  <ChevronRight size={15} />

                </button>


              </div>


              <div className="chart-container">


                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <AreaChart
                    data={crimeTrendData}
                  >

                    <defs>

                      <linearGradient
                        id="crimeGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#22d3ee"
                          stopOpacity={0.35}
                        />

                        <stop
                          offset="100%"
                          stopColor="#22d3ee"
                          stopOpacity={0}
                        />

                      </linearGradient>

                    </defs>


                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(148,163,184,0.08)"
                      vertical={false}
                    />


                    <XAxis
                      dataKey="month"
                      stroke="#64748b"
                      tickLine={false}
                      axisLine={false}
                      fontSize={11}
                    />


                    <YAxis
                      stroke="#64748b"
                      tickLine={false}
                      axisLine={false}
                      fontSize={11}
                    />


                    <Tooltip
                      contentStyle={{
                        background: '#0b1220',
                        border:
                          '1px solid rgba(34,211,238,0.25)',
                        borderRadius: '12px',
                        color: '#fff',
                      }}
                    />


                    <Area
                      type="monotone"
                      dataKey="incidents"
                      stroke="#22d3ee"
                      strokeWidth={3}
                      fill="url(#crimeGradient)"
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>


            <div className="dashboard-card categories-card">


              <div className="card-header">

                <div>

                  <p className="card-label">
                    DISTRIBUTION
                  </p>

                  <h2>
                    Crime Categories
                  </h2>

                </div>

              </div>


              <div className="category-chart">


                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <BarChart
                    data={crimeCategoryData}
                    layout="vertical"
                    margin={{
                      left: 10,
                      right: 20,
                    }}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(148,163,184,0.08)"
                      horizontal={false}
                    />


                    <XAxis
                      type="number"
                      hide
                    />


                    <YAxis
                      dataKey="name"
                      type="category"
                      stroke="#94a3b8"
                      tickLine={false}
                      axisLine={false}
                      fontSize={11}
                      width={80}
                    />


                    <Tooltip
                      contentStyle={{
                        background: '#0b1220',
                        border:
                          '1px solid rgba(34,211,238,0.25)',
                        borderRadius: '12px',
                        color: '#fff',
                      }}
                    />


                    <Bar
                      dataKey="value"
                      fill="#8b5cf6"
                      radius={[0, 6, 6, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </div>


          </section>


          <section className="bottom-grid">


            <div className="dashboard-card ai-insight-card">


              <div className="card-header">


                <div>

                  <p className="card-label">

                    <Sparkles size={13} />

                    AI INTELLIGENCE

                  </p>


                  <h2>
                    Intelligence Brief
                  </h2>

                </div>


                <div className="ai-badge">
                  AI GENERATED
                </div>

              </div>


              <div className="insight-main">


                <div className="insight-icon">

                  <AlertTriangle size={22} />

                </div>


                <div>

                 <h3>
  Cybercrime Surge Detected
</h3>


                 <p>
  {aiInsight.summary}
</p>

                </div>

              </div>


              <div className="confidence-row">

                <span>
                  AI CONFIDENCE
                </span>

                <strong>
{aiInsight.confidence}%
</strong>

              </div>


              <div className="confidence-bar">

                <div
                  style={{
                    width: `${aiInsight.confidence}%`,
                  }}
                />

              </div>


              <button className="view-insight-button">

                View full analysis

                <ArrowUpRight size={16} />

              </button>

            </div>


            <div className="dashboard-card incidents-card">


              <div className="card-header">


                <div>

                  <p className="card-label">
                    LIVE FEED
                  </p>


                  <h2>
                    Recent Incidents
                  </h2>

                </div>


                <button className="card-action">

                  View all

                  <ChevronRight size={15} />

                </button>

              </div>


             <div className="incident-list">

  {recentIncidents.map((incident, index) => (

    <div className="incident-item" key={index}>

      <div className="incident-status critical" />

      <div className="incident-content">

        <div className="incident-title-row">

          <strong>
            {incident.id}
          </strong>

          <span className="severity high">
            {incident.cases} Cases
          </span>

        </div>

        <p>
          {incident.crime} · {incident.district}
        </p>

      </div>

    </div>

  ))}

</div>

</div>

</section>

</>


       )}
     </main>


      </div>


    </div>

  );
}


export default App;