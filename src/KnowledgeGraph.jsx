import { useState } from 'react';

import {
  Network,
  Search,
  User,
  MapPin,
  FileText,
  Shield,
  Activity,
  Link2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';


const initialNodes = [
  {
    id: 'suspect-1',
    label: 'Unknown Suspect Group',
    type: 'PERSON',
    icon: User,
    x: 50,
    y: 24,
  },
  {
    id: 'case-1',
    label: 'CV-2026-08421',
    type: 'CASE',
    icon: FileText,
    x: 25,
    y: 52,
  },
  {
    id: 'location-1',
    label: 'Central District',
    type: 'LOCATION',
    icon: MapPin,
    x: 75,
    y: 52,
  },
  {
    id: 'account-1',
    label: 'Digital Account Network',
    type: 'EVIDENCE',
    icon: Shield,
    x: 50,
    y: 80,
  },
];


const connections = [
  ['suspect-1', 'case-1'],
  ['suspect-1', 'location-1'],
  ['case-1', 'location-1'],
  ['case-1', 'account-1'],
  ['location-1', 'account-1'],
];


function KnowledgeGraph() {


  const [nodes, setNodes] =
    useState(initialNodes);


  const [selectedNode, setSelectedNode] =
    useState(null);


  const [searchTerm, setSearchTerm] =
    useState('');


  const [zoom, setZoom] =
    useState(1);


  const filteredNodes = nodes.filter((node) =>
    node.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  const resetGraph = () => {

    setZoom(1);

    setSelectedNode(null);

    setSearchTerm('');

  };


  return (

    <div className="knowledge-graph-page">


      <div className="knowledge-graph-header">


        <div>


          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            RELATIONSHIP INTELLIGENCE

          </div>


          <h1 className="dashboard-title">

            Knowledge Graph

          </h1>


          <p className="dashboard-subtitle">

            Visualize relationships between people, cases,
            locations, evidence, and intelligence entities.

          </p>


        </div>


        <div className="knowledge-graph-status">

          <Network size={16} />

          GRAPH ENGINE ONLINE

        </div>


      </div>


      <div className="knowledge-graph-toolbar">


        <div className="knowledge-search-box">

          <Search size={16} />

          <input
            type="text"
            placeholder="Search entities..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        <div className="graph-controls">


          <button
            onClick={() =>
              setZoom((previousZoom) =>
                Math.min(previousZoom + 0.1, 1.5)
              )
            }
          >

            <ZoomIn size={16} />

          </button>


          <button
            onClick={() =>
              setZoom((previousZoom) =>
                Math.max(previousZoom - 0.1, 0.7)
              )
            }
          >

            <ZoomOut size={16} />

          </button>


          <button onClick={resetGraph}>

            <RotateCcw size={16} />

          </button>


        </div>


      </div>


      <div className="knowledge-graph-layout">


        <div className="dashboard-card graph-canvas-card">


          <div className="graph-canvas-header">


            <div>

              <p className="card-label">

                INTELLIGENCE NETWORK

              </p>


              <h2>

                Entity Relationship Map

              </h2>

            </div>


            <span className="graph-node-count">

              {filteredNodes.length} ENTITIES

            </span>


          </div>


          <div className="graph-canvas">


            <div
              className="graph-network"
              style={{
                transform: `scale(${zoom})`,
              }}
            >


              <svg
                className="graph-connections"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >


                {connections.map(
                  ([sourceId, targetId], index) => {

                    const source = nodes.find(
                      (node) =>
                        node.id === sourceId
                    );

                    const target = nodes.find(
                      (node) =>
                        node.id === targetId
                    );


                    if (!source || !target) {
                      return null;
                    }


                    return (

                      <line
                        key={index}
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        className="graph-line"
                      />

                    );

                  }
                )}


              </svg>


              {filteredNodes.map((node) => {


                const Icon = node.icon;


                return (

                  <button
                    key={node.id}
                    className={
                      selectedNode?.id === node.id
                        ? 'graph-node selected'
                        : 'graph-node'
                    }
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                    onClick={() =>
                      setSelectedNode(node)
                    }
                  >


                    <div className="graph-node-icon">

                      <Icon size={20} />

                    </div>


                    <strong>

                      {node.label}

                    </strong>


                    <span>

                      {node.type}

                    </span>


                  </button>

                );

              })}


            </div>


            <div className="graph-legend">


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


              <span>

                <i className="legend-evidence" />

                Evidence

              </span>


            </div>


          </div>


        </div>


        <div className="graph-details-column">


          {selectedNode ? (


            <div className="dashboard-card graph-details-card">


              <div className="card-header">


                <div>

                  <p className="card-label">

                    ENTITY DETAILS

                  </p>


                  <h2>

                    Intelligence Entity

                  </h2>

                </div>


                <button
                  className="graph-close-button"
                  onClick={() =>
                    setSelectedNode(null)
                  }
                >

                  <X size={16} />

                </button>


              </div>


              <div className="selected-entity">


                <div className="selected-entity-icon">

                  <selectedNode.icon size={25} />

                </div>


                <h3>

                  {selectedNode.label}

                </h3>


                <span>

                  {selectedNode.type}

                </span>


              </div>


              <div className="entity-stat-row">


                <div>

                  <span>

                    CONNECTIONS

                  </span>


                  <strong>

                    4

                  </strong>

                </div>


                <div>

                  <span>

                    CONFIDENCE

                  </span>


                  <strong>

                    94%

                  </strong>

                </div>


              </div>


              <div className="entity-relationships">


                <div className="card-label">

                  <Link2 size={13} />

                  RELATED INTELLIGENCE

                </div>


                <div className="relationship-item">

                  <Activity size={15} />

                  Connected to multiple incidents

                </div>


                <div className="relationship-item">

                  <FileText size={15} />

                  Linked investigation case

                </div>


                <div className="relationship-item">

                  <MapPin size={15} />

                  Associated geographic location

                </div>


              </div>


            </div>


          ) : (


            <div className="dashboard-card graph-empty-state">


              <div className="graph-empty-icon">

                <Network size={30} />

              </div>


              <h2>

                Select an Entity

              </h2>


              <p>

                Select a node from the intelligence graph
                to view relationships and entity details.

              </p>


            </div>

          )}


          <div className="dashboard-card graph-stats-card">


            <div className="card-header">


              <div>

                <p className="card-label">

                  GRAPH OVERVIEW

                </p>


                <h2>

                  Network Statistics

                </h2>

              </div>

            </div>


            <div className="graph-stat-list">


              <div>

                <Network size={17} />

                <span>

                  Total Entities

                </span>

                <strong>

                  1,842

                </strong>

              </div>


              <div>

                <Link2 size={17} />

                <span>

                  Relationships

                </span>

                <strong>

                  5,426

                </strong>

              </div>


              <div>

                <Activity size={17} />

                <span>

                  Active Connections

                </span>

                <strong>

                  247

                </strong>

              </div>


            </div>


          </div>


        </div>


      </div>


    </div>

  );

}


export default KnowledgeGraph;