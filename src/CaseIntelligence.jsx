import { useState } from 'react';

import {
  FileText,
  Search,
  Plus,
  Filter,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Shield,
  ChevronRight,
  X,
} from 'lucide-react';


const initialCases = [
  {
    id: 'CV-2026-08421',
    title: 'Digital Financial Fraud Network',
    type: 'Cybercrime',
    location: 'Central District',
    priority: 'High',
    status: 'Investigating',
    updated: '12 minutes ago',
    investigator: 'Intelligence Unit A',
  },
  {
    id: 'CV-2026-08420',
    title: 'North District Robbery Series',
    type: 'Robbery',
    location: 'North District',
    priority: 'Critical',
    status: 'Open',
    updated: '34 minutes ago',
    investigator: 'Investigation Team B',
  },
  {
    id: 'CV-2026-08419',
    title: 'Vehicle Theft Pattern Analysis',
    type: 'Vehicle Theft',
    location: 'East District',
    priority: 'Medium',
    status: 'Investigating',
    updated: '1 hour ago',
    investigator: 'Crime Analysis Unit',
  },
  {
    id: 'CV-2026-08418',
    title: 'Organized Fraud Investigation',
    type: 'Fraud',
    location: 'West District',
    priority: 'High',
    status: 'Under Review',
    updated: '2 hours ago',
    investigator: 'Financial Crimes Unit',
  },
];


function CaseIntelligence() {


  const [cases, setCases] =
    useState(initialCases);


  const [searchTerm, setSearchTerm] =
    useState('');


  const [selectedFilter, setSelectedFilter] =
    useState('All');


  const [selectedCase, setSelectedCase] =
    useState(null);


  const filteredCases = cases.filter((caseItem) => {


    const matchesSearch =
      caseItem.id
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      caseItem.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      caseItem.type
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      caseItem.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());


    const matchesFilter =
      selectedFilter === 'All' ||
      caseItem.status === selectedFilter ||
      caseItem.priority === selectedFilter;


    return matchesSearch && matchesFilter;

  });


  return (

    <div className="case-intelligence-page">


      <div className="case-intelligence-header">


        <div>

          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            INVESTIGATION INTELLIGENCE

          </div>


          <h1 className="dashboard-title">

            Case Intelligence

          </h1>


          <p className="dashboard-subtitle">

            Monitor active investigations, analyze case activity,
            and organize intelligence across ongoing operations.

          </p>

        </div>


        <button className="new-case-button">

          <Plus size={17} />

          NEW CASE

        </button>


      </div>


      <section className="case-stats-grid">


        <div className="case-stat-card">

          <div className="case-stat-icon">

            <FileText size={21} />

          </div>

          <span>
            TOTAL CASES
          </span>

          <strong>
            1,284
          </strong>

          <small>
            Across all investigations
          </small>

        </div>


        <div className="case-stat-card">

          <div className="case-stat-icon">

            <Activity size={21} />

          </div>

          <span>
            ACTIVE INVESTIGATIONS
          </span>

          <strong>
            247
          </strong>

          <small>
            Currently under investigation
          </small>

        </div>


        <div className="case-stat-card">

          <div className="case-stat-icon">

            <AlertTriangle size={21} />

          </div>

          <span>
            HIGH PRIORITY
          </span>

          <strong>
            86
          </strong>

          <small>
            Require immediate attention
          </small>

        </div>


        <div className="case-stat-card">

          <div className="case-stat-icon">

            <CheckCircle2 size={21} />

          </div>

          <span>
            RESOLVED THIS MONTH
          </span>

          <strong>
            142
          </strong>

          <small>
            Successfully closed cases
          </small>

        </div>


      </section>


      <div className="case-toolbar">


        <div className="case-search-box">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search cases, locations, or case types..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        <div className="case-filter-buttons">


          {[
            'All',
            'Open',
            'Investigating',
            'Under Review',
            'High',
            'Critical',
          ].map((filter) => (

            <button
              key={filter}
              className={
                selectedFilter === filter
                  ? 'case-filter active'
                  : 'case-filter'
              }
              onClick={() =>
                setSelectedFilter(filter)
              }
            >

              <Filter size={13} />

              {filter}

            </button>

          ))}


        </div>


      </div>


      <div className="case-intelligence-layout">


        <div className="dashboard-card cases-list-card">


          <div className="card-header">


            <div>

              <p className="card-label">
                ACTIVE OPERATIONS
              </p>


              <h2>
                Investigation Cases
              </h2>

            </div>


            <span className="case-count">

              {filteredCases.length} CASES

            </span>


          </div>


          <div className="case-list">


            {filteredCases.length === 0 ? (

              <div className="no-cases">

                <Search size={28} />

                <p>
                  No matching cases found.
                </p>

              </div>

            ) : (

              filteredCases.map((caseItem) => (

                <div
                  className={
                    selectedCase?.id === caseItem.id
                      ? 'case-item selected'
                      : 'case-item'
                  }
                  key={caseItem.id}
                  onClick={() =>
                    setSelectedCase(caseItem)
                  }
                >


                  <div className="case-item-icon">

                    <FileText size={19} />

                  </div>


                  <div className="case-item-content">


                    <div className="case-item-title-row">

                      <strong>
                        {caseItem.title}
                      </strong>

                      <span
                        className={`case-priority ${caseItem.priority.toLowerCase()}`}
                      >
                        {caseItem.priority}
                      </span>

                    </div>


                    <p className="case-id">

                      {caseItem.id}

                    </p>


                    <div className="case-meta">


                      <span>

                        <Shield size={13} />

                        {caseItem.type}

                      </span>


                      <span>

                        <Activity size={13} />

                        {caseItem.location}

                      </span>


                      <span>

                        <Clock3 size={13} />

                        {caseItem.updated}

                      </span>


                    </div>


                  </div>


                  <div className="case-item-right">


                    <span
                      className={`case-status ${caseItem.status
                        .toLowerCase()
                        .replace(' ', '-')}`}
                    >

                      {caseItem.status}

                    </span>


                    <ChevronRight size={17} />

                  </div>


                </div>

              ))

            )}


          </div>


        </div>


        <div className="case-details-column">


          {selectedCase ? (


            <div className="dashboard-card case-detail-card">


              <div className="case-detail-header">


                <div>

                  <p className="card-label">
                    CASE DETAILS
                  </p>

                  <h2>
                    {selectedCase.id}
                  </h2>

                </div>


                <button
                  className="close-case-button"
                  onClick={() =>
                    setSelectedCase(null)
                  }
                >

                  <X size={17} />

                </button>


              </div>


              <div className="case-detail-title">

                <h3>
                  {selectedCase.title}
                </h3>

                <span
                  className={`case-priority ${selectedCase.priority.toLowerCase()}`}
                >
                  {selectedCase.priority}
                </span>

              </div>


              <div className="case-detail-info">


                <div>

                  <span>
                    CASE TYPE
                  </span>

                  <strong>
                    {selectedCase.type}
                  </strong>

                </div>


                <div>

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    {selectedCase.location}
                  </strong>

                </div>


                <div>

                  <span>
                    STATUS
                  </span>

                  <strong>
                    {selectedCase.status}
                  </strong>

                </div>


                <div>

                  <span>
                    ASSIGNED UNIT
                  </span>

                  <strong>
                    {selectedCase.investigator}
                  </strong>

                </div>


              </div>


              <div className="case-ai-insight">


                <div className="case-ai-icon">

                  <Activity size={18} />

                </div>


                <div>

                  <span>
                    AI CASE INSIGHT
                  </span>

                  <p>

                    This case shows connections with
                    multiple incidents in the same region.
                    Network and evidence analysis is
                    recommended.

                  </p>

                </div>


              </div>


              <div className="case-timeline">


                <div className="timeline-item">

                  <div className="timeline-dot completed" />

                  <div>

                    <strong>
                      Case Created
                    </strong>

                    <span>
                      Initial incident registered
                    </span>

                  </div>

                </div>


                <div className="timeline-item">

                  <div className="timeline-dot completed" />

                  <div>

                    <strong>
                      Intelligence Analysis Started
                    </strong>

                    <span>
                      AI systems analyzing related patterns
                    </span>

                  </div>

                </div>


                <div className="timeline-item">

                  <div className="timeline-dot active" />

                  <div>

                    <strong>
                      Investigation In Progress
                    </strong>

                    <span>
                      Current investigation phase
                    </span>

                  </div>

                </div>


              </div>


            </div>


          ) : (


            <div className="dashboard-card case-empty-state">


              <div className="case-empty-icon">

                <FileText size={28} />

              </div>


              <h2>
                Select a Case
              </h2>


              <p>

                Select an investigation from the list
                to view detailed intelligence and case activity.

              </p>


            </div>


          )}


        </div>


      </div>


    </div>

  );

}


export default CaseIntelligence;