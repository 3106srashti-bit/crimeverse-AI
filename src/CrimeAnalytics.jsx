import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', incidents: 4200 },
  { month: 'Feb', incidents: 4800 },
  { month: 'Mar', incidents: 5100 },
  { month: 'Apr', incidents: 4700 },
  { month: 'May', incidents: 5900 },
  { month: 'Jun', incidents: 6400 },
  { month: 'Jul', incidents: 6100 },
  { month: 'Aug', incidents: 7200 },
  { month: 'Sep', incidents: 6800 },
  { month: 'Oct', incidents: 7600 },
  { month: 'Nov', incidents: 8100 },
  { month: 'Dec', incidents: 8600 },
];

const categoryData = [
  { category: 'Theft', incidents: 820 },
  { category: 'Cybercrime', incidents: 610 },
  { category: 'Assault', incidents: 480 },
  { category: 'Fraud', incidents: 390 },
  { category: 'Robbery', incidents: 280 },
];

function AnalyticsCard({ icon: Icon, title, value, change, positive }) {
  return (
    <div className="analytics-stat-card">
      <div className="analytics-stat-icon">
        <Icon size={20} />
      </div>

      <div className="analytics-stat-content">
        <p>{title}</p>

        <h2>{value}</h2>

        <span className={positive ? 'analytics-positive' : 'analytics-negative'}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </span>
      </div>
    </div>
  );
}

function CrimeAnalytics() {
  return (
    <div className="analytics-page">

      <div className="analytics-page-header">

        <div>
          <div className="dashboard-eyebrow">
            <span className="status-dot" />
            CRIME DATA INTELLIGENCE
          </div>

          <h1 className="dashboard-title">
            Crime Analytics
          </h1>

          <p className="dashboard-subtitle">
            Analyze crime patterns, categories, and incident trends across monitored regions.
          </p>
        </div>

        <button className="analytics-filter-button">
          Last 12 Months
        </button>

      </div>


      <section className="analytics-stats-grid">

        <AnalyticsCard
          icon={Activity}
          title="Total Incidents"
          value="68,420"
          change="12.8%"
          positive={false}
        />

        <AnalyticsCard
          icon={TrendingUp}
          title="Trend Growth"
          value="+18.6%"
          change="8.4%"
          positive={false}
        />

        <AnalyticsCard
          icon={BarChart3}
          title="Most Common Crime"
          value="Theft"
          change="34%"
          positive={false}
        />

        <AnalyticsCard
          icon={AlertTriangle}
          title="High Risk Events"
          value="2,847"
          change="6.2%"
          positive={true}
        />

      </section>


      <section className="analytics-charts-grid">

        <div className="dashboard-card analytics-large-card">

          <div className="card-header">

            <div>
              <p className="card-label">
                TEMPORAL ANALYSIS
              </p>

              <h2>
                Crime Incidents Over Time
              </h2>
            </div>

            <div className="ai-badge">
              AI ANALYZED
            </div>

          </div>


          <div className="analytics-chart">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={monthlyData}>

                <defs>

                  <linearGradient
                    id="analyticsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#22d3ee"
                      stopOpacity={0.4}
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
                />

                <YAxis
                  stroke="#64748b"
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: '#0b1220',
                    border: '1px solid rgba(34,211,238,0.25)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="incidents"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  fill="url(#analyticsGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>


        <div className="dashboard-card analytics-category-card">

          <div className="card-header">

            <div>
              <p className="card-label">
                CRIME DISTRIBUTION
              </p>

              <h2>
                Category Breakdown
              </h2>
            </div>

          </div>


          <div className="analytics-chart">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={categoryData}
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
                  type="category"
                  dataKey="category"
                  stroke="#94a3b8"
                  tickLine={false}
                  axisLine={false}
                  width={90}
                />

                <Tooltip
                  contentStyle={{
                    background: '#0b1220',
                    border: '1px solid rgba(34,211,238,0.25)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                />

                <Bar
                  dataKey="incidents"
                  fill="#8b5cf6"
                  radius={[0, 6, 6, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>


      <section className="dashboard-card analytics-insight-panel">

        <div className="analytics-insight-icon">
          <AlertTriangle size={22} />
        </div>

        <div>

          <p className="card-label">
            AI-GENERATED INSIGHT
          </p>

          <h2>
            Theft activity remains the dominant crime category
          </h2>

          <p>
            AI analysis indicates that theft-related incidents represent
            the largest share of recorded crime activity. The system has
            identified recurring patterns across multiple monitored regions.
          </p>

        </div>

        <div className="analytics-confidence">
          <span>CONFIDENCE</span>
          <strong>92%</strong>
        </div>

      </section>

    </div>
  );
}

export default CrimeAnalytics;