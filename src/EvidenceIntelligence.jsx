import { useState } from 'react';

import {
  FileSearch,
  Search,
  Plus,
  Filter,
  ShieldCheck,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  Database,
  FileText,
  Image,
  Video,
  HardDrive,
  X,
  ChevronRight,
  Sparkles,
} from 'lucide-react';


const initialEvidence = [
  {
    id: 'EV-2026-00142',
    name: 'Financial Transaction Records',
    type: 'Digital',
    caseId: 'CV-2026-08421',
    source: 'Financial Intelligence Unit',
    status: 'Verified',
    updated: '18 minutes ago',
    confidence: '96%',
  },
  {
    id: 'EV-2026-00141',
    name: 'CCTV Footage - North District',
    type: 'Video',
    caseId: 'CV-2026-08420',
    source: 'City Surveillance Network',
    status: 'Pending Review',
    updated: '42 minutes ago',
    confidence: '89%',
  },
  {
    id: 'EV-2026-00140',
    name: 'Vehicle Registration Documents',
    type: 'Document',
    caseId: 'CV-2026-08419',
    source: 'Transport Database',
    status: 'Verified',
    updated: '1 hour ago',
    confidence: '94%',
  },
  {
    id: 'EV-2026-00139',
    name: 'Forensic Evidence Report',
    type: 'Forensic',
    caseId: 'CV-2026-08418',
    source: 'Forensic Analysis Unit',
    status: 'Flagged',
    updated: '2 hours ago',
    confidence: '82%',
  },
];


function EvidenceIcon({ type }) {

  if (type === 'Video') {
    return <Video size={19} />;
  }

  if (type === 'Document') {
    return <FileText size={19} />;
  }

  if (type === 'Forensic') {
    return <ShieldCheck size={19} />;
  }

  return <HardDrive size={19} />;
}


function EvidenceIntelligence() {

  const [evidence, setEvidence] =
    useState(initialEvidence);

  const [searchTerm, setSearchTerm] =
    useState('');

  const [selectedFilter, setSelectedFilter] =
    useState('All');

  const [selectedEvidence, setSelectedEvidence] =
    useState(null);


  const filteredEvidence = evidence.filter((item) => {

    const search =
      searchTerm.toLowerCase();

    const matchesSearch =
      item.id.toLowerCase().includes(search) ||
      item.name.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search) ||
      item.caseId.toLowerCase().includes(search) ||
      item.source.toLowerCase().includes(search);


    const matchesFilter =
      selectedFilter === 'All' ||
      item.type === selectedFilter ||
      item.status === selectedFilter;


    return matchesSearch && matchesFilter;

  });


  return (

    <div className="evidence-intelligence-page">


      <div className="evidence-intelligence-header">


        <div>


          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            EVIDENCE INTELLIGENCE

          </div>


          <h1 className="dashboard-title">

            Evidence Intelligence

          </h1>


          <p className="dashboard-subtitle">

            Organize, analyze, and validate evidence across
            active investigations and intelligence operations.

          </p>

        </div>


        <button className="new-evidence-button">

          <Plus size={17} />

          ADD EVIDENCE

        </button>


      </div>


      <section className="evidence-stats-grid">


        <div className="evidence-stat-card">

          <div className="evidence-stat-icon">

            <Database size={21} />

          </div>

          <span>
            TOTAL EVIDENCE
          </span>

          <strong>
            8,492
          </strong>

          <small>
            Across all investigations
          </small>

        </div>


        <div className="evidence-stat-card">

          <div className="evidence-stat-icon">

            <CheckCircle2 size={21} />

          </div>

          <span>
            VERIFIED
          </span>

          <strong>
            6,841
          </strong>

          <small>
            Evidence successfully validated
          </small>

        </div>


        <div className="evidence-stat-card">

          <div className="evidence-stat-icon">

            <Clock3 size={21} />

          </div>

          <span>
            PENDING REVIEW
          </span>

          <strong>
            1,284
          </strong>

          <small>
            Awaiting analyst verification
          </small>

        </div>


        <div className="evidence-stat-card">

          <div className="evidence-stat-icon">

            <AlertTriangle size={21} />

          </div>

          <span>
            FLAGGED
          </span>

          <strong>
            367
          </strong>

          <small>
            Requires further investigation
          </small>

        </div>


      </section>


      <div className="evidence-toolbar">


        <div className="evidence-search-box">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search evidence, cases, or sources..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        <div className="evidence-filter-buttons">


          {[
            'All',
            'Digital',
            'Video',
            'Document',
            'Forensic',
            'Verified',
            'Pending Review',
            'Flagged',
          ].map((filter) => (

            <button
              key={filter}
              className={
                selectedFilter === filter
                  ? 'evidence-filter active'
                  : 'evidence-filter'
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


      <div className="evidence-intelligence-layout">


        <div className="dashboard-card evidence-list-card">


          <div className="card-header">


            <div>

              <p className="card-label">
                INTELLIGENCE REPOSITORY
              </p>


              <h2>
                Evidence Repository
              </h2>

            </div>


            <span className="evidence-count">

              {filteredEvidence.length} ITEMS

            </span>


          </div>


          <div className="evidence-list">


            {filteredEvidence.length === 0 ? (

              <div className="no-evidence">

                <Search size={28} />

                <p>
                  No matching evidence found.
                </p>

              </div>

            ) : (

              filteredEvidence.map((item) => (

                <div
                  key={item.id}
                  className={
                    selectedEvidence?.id === item.id
                      ? 'evidence-item selected'
                      : 'evidence-item'
                  }
                  onClick={() =>
                    setSelectedEvidence(item)
                  }
                >


                  <div className="evidence-item-icon">

                    <EvidenceIcon type={item.type} />

                  </div>


                  <div className="evidence-item-content">


                    <div className="evidence-item-title-row">

                      <strong>
                        {item.name}
                      </strong>

                      <span
                        className={`evidence-status ${item.status
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {item.status}
                      </span>

                    </div>


                    <p className="evidence-id">

                      {item.id}

                    </p>


                    <div className="evidence-meta">

                      <span>
                        {item.type}
                      </span>

                      <span>
                        {item.caseId}
                      </span>

                      <span>
                        {item.updated}
                      </span>

                    </div>


                  </div>


                  <div className="evidence-item-right">

                    <span className="confidence-score">

                      {item.confidence}

                    </span>

                    <ChevronRight size={17} />

                  </div>


                </div>

              ))

            )}


          </div>


        </div>


        <div className="evidence-details-column">


          {selectedEvidence ? (

            <div className="dashboard-card evidence-detail-card">


              <div className="evidence-detail-header">


                <div>

                  <p className="card-label">
                    EVIDENCE DETAILS
                  </p>

                  <h2>
                    {selectedEvidence.id}
                  </h2>

                </div>


                <button
                  className="close-evidence-button"
                  onClick={() =>
                    setSelectedEvidence(null)
                  }
                >

                  <X size={17} />

                </button>


              </div>


              <div className="evidence-detail-title">

                <div className="evidence-large-icon">

                  <EvidenceIcon
                    type={selectedEvidence.type}
                  />

                </div>


                <div>

                  <h3>
                    {selectedEvidence.name}
                  </h3>

                  <span>
                    {selectedEvidence.type} Evidence
                  </span>

                </div>

              </div>


              <div className="evidence-detail-info">


                <div>

                  <span>
                    LINKED CASE
                  </span>

                  <strong>
                    {selectedEvidence.caseId}
                  </strong>

                </div>


                <div>

                  <span>
                    SOURCE
                  </span>

                  <strong>
                    {selectedEvidence.source}
                  </strong>

                </div>


                <div>

                  <span>
                    STATUS
                  </span>

                  <strong>
                    {selectedEvidence.status}
                  </strong>

                </div>


                <div>

                  <span>
                    AI CONFIDENCE
                  </span>

                  <strong>
                    {selectedEvidence.confidence}
                  </strong>

                </div>


              </div>


              <div className="evidence-ai-insight">


                <div className="evidence-ai-icon">

                  <Sparkles size={18} />

                </div>


                <div>

                  <span>
                    AI EVIDENCE INSIGHT
                  </span>

                  <p>

                    This evidence item shows strong
                    relevance to the linked investigation.
                    Cross-reference analysis with related
                    entities and incidents is recommended.

                  </p>

                </div>

              </div>


              <div className="evidence-analysis-status">


                <div className="analysis-status-header">

                  <span>
                    ANALYSIS PROGRESS
                  </span>

                  <strong>
                    86%
                  </strong>

                </div>


                <div className="analysis-progress-bar">

                  <div />

                </div>


                <p>

                  AI-assisted evidence analysis completed
                  with high confidence.

                </p>

              </div>


            </div>


          ) : (


            <div className="dashboard-card evidence-empty-state">


              <div className="evidence-empty-icon">

                <FileSearch size={28} />

              </div>


              <h2>
                Select Evidence
              </h2>


              <p>

                Select an evidence item from the repository
                to view detailed intelligence and AI analysis.

              </p>

            </div>

          )}


        </div>


      </div>


    </div>

  );

}


export default EvidenceIntelligence;