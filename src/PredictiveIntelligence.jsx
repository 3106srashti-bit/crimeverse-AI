import {
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
  Target,
  ShieldCheck,
  MapPin,
  Activity,
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


const predictionTrendData = [
  { month: 'Jan', predictions: 4200 },
  { month: 'Feb', predictions: 4800 },
  { month: 'Mar', predictions: 5300 },
  { month: 'Apr', predictions: 6100 },
  { month: 'May', predictions: 6800 },
  { month: 'Jun', predictions: 7600 },
  { month: 'Jul', predictions: 8400 },
  { month: 'Aug', predictions: 9200 },
  { month: 'Sep', predictions: 10100 },
  { month: 'Oct', predictions: 11200 },
  { month: 'Nov', predictions: 12100 },
  { month: 'Dec', predictions: 12800 },
];


const riskData = [
  { name: 'Central', risk: 92 },
  { name: 'North', risk: 78 },
  { name: 'East', risk: 69 },
  { name: 'West', risk: 54 },
  { name: 'South', risk: 41 },
];


function PredictiveIntelligence() {

  return (

    <div className="predictive-page">


      <div className="predictive-header">


        <div>

          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            AI PREDICTIVE INTELLIGENCE

          </div>


          <h1 className="dashboard-title">

            Predictive Intelligence

          </h1>


          <p className="dashboard-subtitle">

            AI-powered forecasting of emerging crime patterns,
            risk signals, and potential hotspots.

          </p>

        </div>


        <div className="prediction-status">

          <ShieldCheck size={16} />

          MODEL STATUS: OPERATIONAL

        </div>


      </div>


      <section className="prediction-stats-grid">


        <div className="prediction-stat-card">

          <div className="prediction-stat-icon">

            <BrainCircuit size={22} />

          </div>

          <span>
            ACTIVE PREDICTIONS
          </span>

          <strong>
            12,480
          </strong>

          <small>
            +24.6% from previous period
          </small>

        </div>


        <div className="prediction-stat-card">

          <div className="prediction-stat-icon">

            <Target size={22} />

          </div>

          <span>
            MODEL ACCURACY
          </span>

          <strong>
            91.4%
          </strong>

          <small>
            Current prediction confidence
          </small>

        </div>


        <div className="prediction-stat-card">

          <div className="prediction-stat-icon">

            <AlertTriangle size={22} />

          </div>

          <span>
            HIGH-RISK SIGNALS
          </span>

          <strong>
            247
          </strong>

          <small>
            Areas requiring attention
          </small>

        </div>


        <div className="prediction-stat-card">

          <div className="prediction-stat-icon">

            <TrendingUp size={22} />

          </div>

          <span>
            RISK TREND
          </span>

          <strong>
            +18.2%
          </strong>

          <small>
            Overall risk increase
          </small>

        </div>


      </section>


      <section className="predictive-main-grid">


        <div className="dashboard-card prediction-chart-card">


          <div className="card-header">

            <div>

              <p className="card-label">
                PREDICTION ACTIVITY
              </p>

              <h2>
                AI Prediction Trends
              </h2>

            </div>

            <div className="prediction-live-badge">

              <Activity size={14} />

              LIVE MODEL DATA

            </div>

          </div>


          <div className="prediction-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={predictionTrendData}
              >

                <defs>

                  <linearGradient
                    id="predictionGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#8b5cf6"
                      stopOpacity={0.4}
                    />

                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
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
                      '1px solid rgba(139,92,246,0.3)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                />


                <Area
                  type="monotone"
                  dataKey="predictions"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fill="url(#predictionGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>


        <div className="dashboard-card risk-zones-card">


          <div className="card-header">

            <div>

              <p className="card-label">
                RISK FORECAST
              </p>

              <h2>
                Predicted Risk Zones
              </h2>

            </div>

          </div>


          <div className="risk-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={riskData}
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
                  domain={[0, 100]}
                  hide
                />


                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="#94a3b8"
                  tickLine={false}
                  axisLine={false}
                  fontSize={11}
                  width={60}
                />


                <Tooltip
                  contentStyle={{
                    background: '#0b1220',
                    border:
                      '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                />


                <Bar
                  dataKey="risk"
                  fill="#ef4444"
                  radius={[0, 6, 6, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


      </section>


      <section className="prediction-bottom-grid">


        <div className="dashboard-card forecast-card">


          <div className="card-header">

            <div>

              <p className="card-label">
                AI FORECAST
              </p>

              <h2>
                Intelligence Forecast
              </h2>

            </div>

            <BrainCircuit size={20} />

          </div>


          <div className="forecast-content">


            <div className="forecast-icon">

              <TrendingUp size={24} />

            </div>


            <div>

              <h3>
                Elevated crime activity expected
              </h3>

              <p>

                AI models indicate a potential increase in
                property-related and cybercrime incidents
                over the next prediction period.

              </p>

            </div>

          </div>


          <div className="forecast-confidence">

            <span>
              PREDICTION CONFIDENCE
            </span>

            <strong>
              91.4%
            </strong>

          </div>


          <div className="confidence-bar">

            <div
              style={{
                width: '91.4%',
              }}
            />

          </div>

        </div>


        <div className="dashboard-card hotspot-list-card">


          <div className="card-header">

            <div>

              <p className="card-label">
                PRIORITY AREAS
              </p>

              <h2>
                Predicted Hotspots
              </h2>

            </div>

          </div>


          <div className="predicted-hotspot-list">


            <div className="predicted-hotspot-item">

              <div className="hotspot-location">

                <MapPin size={16} />

                <span>
                  Central District
                </span>

              </div>

              <span className="risk-level critical">
                CRITICAL
              </span>

            </div>


            <div className="predicted-hotspot-item">

              <div className="hotspot-location">

                <MapPin size={16} />

                <span>
                  North District
                </span>

              </div>

              <span className="risk-level high">
                HIGH
              </span>

            </div>


            <div className="predicted-hotspot-item">

              <div className="hotspot-location">

                <MapPin size={16} />

                <span>
                  East District
                </span>

              </div>

              <span className="risk-level medium">
                MEDIUM
              </span>

            </div>


          </div>

        </div>


      </section>


    </div>

  );

}


export default PredictiveIntelligence;