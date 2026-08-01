import { useState } from 'react';

import {
  BrainCircuit,
  Send,
  Sparkles,
  User,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';


function AIInvestigator() {


  const [messages, setMessages] = useState([

    {
      type: 'ai',

      text:
        'Intelligence system online. I am ready to analyze crime patterns, incidents, cases, and intelligence signals.',
    },

  ]);


  const [input, setInput] = useState('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);


  const suggestedQuestions = [

    'What crime patterns are increasing?',

    'Analyze recent cybercrime activity',

    'Show high-risk crime areas',

  ];


  const handleSend = () => {


    if (!input.trim() || isAnalyzing) return;


    const userMessage = {

      type: 'user',

      text: input,

    };


    setMessages((previousMessages) => [

      ...previousMessages,

      userMessage,

    ]);


    const currentQuery = input;


    setInput('');

    setIsAnalyzing(true);


    setTimeout(() => {


      let response =
        `I analyzed your query: "${currentQuery}". The available intelligence signals require further analysis across crime trends, locations, and historical patterns.`;


      const query = currentQuery.toLowerCase();


      if (

        query.includes('cybercrime') ||

        query.includes('cyber crime')

      ) {


        response =
          'Cybercrime activity shows a rising trend across monitored regions. The strongest signals are associated with digital fraud, phishing, identity theft, and unauthorized account access. AI analysis recommends monitoring financial transaction anomalies and repeated digital identifiers.';


      }


      else if (

        query.includes('pattern') ||

        query.includes('trend') ||

        query.includes('increasing')

      ) {


        response =
          'Current intelligence indicates increasing activity in cybercrime and property-related incidents. The trend analysis suggests that crime activity is concentrated around high-density urban zones and areas with repeated historical incidents.';


      }


      else if (

        query.includes('high-risk') ||

        query.includes('high risk') ||

        query.includes('area') ||

        query.includes('location')

      ) {


        response =
          'The highest-risk zones are currently concentrated in Central District, North District, and East District. These areas show repeated incident activity and elevated historical crime density. Geospatial analysis is recommended for a more detailed hotspot assessment.';


      }


      else if (

        query.includes('robbery') ||

        query.includes('theft')

      ) {


        response =
          'Property-related crime signals indicate recurring incidents in areas with high movement and commercial activity. Temporal analysis suggests increased risk during evening hours. Further correlation with location and historical incident data is recommended.';


      }


      const aiMessage = {

        type: 'ai',

        text: response,

      };


      setMessages((previousMessages) => [

        ...previousMessages,

        aiMessage,

      ]);


      setIsAnalyzing(false);


    }, 1500);

  };


  const handleSuggestion = (question) => {

    setInput(question);

  };


  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {

      handleSend();

    }

  };


  const clearConversation = () => {


    setMessages([

      {

        type: 'ai',

        text:
          'Intelligence system online. I am ready to analyze crime patterns, incidents, cases, and intelligence signals.',

      },

    ]);

  };


  return (

    <div className="ai-investigator-page">


      <div className="ai-investigator-header">


        <div>


          <div className="dashboard-eyebrow">

            <span className="status-dot" />

            AI INTELLIGENCE SYSTEM

          </div>


          <h1 className="dashboard-title">

            AI Investigator

          </h1>


          <p className="dashboard-subtitle">

            Ask questions, investigate patterns, and discover
            intelligence using natural language.

          </p>


        </div>


        <div className="ai-system-badge">

          <ShieldCheck size={16} />

          SECURE AI SESSION

        </div>


      </div>


      <div className="ai-investigator-layout">


        <div className="ai-chat-card">


          <div className="ai-chat-header">


            <div className="ai-chat-title">


              <div className="ai-chat-icon">

                <BrainCircuit size={20} />

              </div>


              <div>

                <strong>

                  CrimeVerse Intelligence AI

                </strong>


                <span>

                  Analytical assistant · Online

                </span>


              </div>


            </div>


            <button

              className="clear-chat-button"

              onClick={clearConversation}

            >

              <RotateCcw size={15} />

              Clear

            </button>


          </div>


          <div className="ai-message-area">


            {messages.map((message, index) => (


              <div

                className={`ai-message-row ${message.type}`}

                key={index}

              >


                <div className="message-avatar">


                  {message.type === 'ai' ? (

                    <BrainCircuit size={16} />

                  ) : (

                    <User size={16} />

                  )}


                </div>


                <div className="message-bubble">


                  <span className="message-label">


                    {message.type === 'ai'

                      ? 'CRIMEVERSE AI'

                      : 'ANALYST'}


                  </span>


                  <p>

                    {message.text}

                  </p>


                </div>


              </div>


            ))}


            {isAnalyzing && (


              <div className="ai-message-row ai">


                <div className="message-avatar">

                  <BrainCircuit size={16} />

                </div>


                <div className="message-bubble analyzing-bubble">


                  <span className="message-label">

                    CRIMEVERSE AI

                  </span>


                  <p className="analyzing-text">

                    Analyzing intelligence

                    <span className="loading-dots">

                      ...

                    </span>


                  </p>


                </div>


              </div>


            )}


          </div>


          <div className="suggested-questions">


            <span>

              SUGGESTED INVESTIGATIONS

            </span>


            <div className="suggestion-list">


              {suggestedQuestions.map((question) => (


                <button

                  key={question}

                  onClick={() => handleSuggestion(question)}

                >


                  <Sparkles size={13} />


                  {question}


                </button>


              ))}


            </div>


          </div>


          <div className="ai-input-area">


            <input

              type="text"

              placeholder="Ask CrimeVerse AI about crime intelligence..."

              value={input}

              onChange={(event) => setInput(event.target.value)}

              onKeyDown={handleKeyDown}

            />


            <button

              className="send-ai-button"

              onClick={handleSend}

            >

              <Send size={17} />

            </button>


          </div>


          <p className="ai-disclaimer">


            AI-generated intelligence should be verified
            by qualified analysts before operational use.


          </p>


        </div>


        <div className="ai-side-panel">


          <div className="dashboard-card ai-status-card">


            <div className="card-header">


              <div>


                <p className="card-label">

                  AI SYSTEM STATUS

                </p>


                <h2>

                  Intelligence Engine

                </h2>


              </div>


            </div>


            <div className="ai-status-main">


              <div className="ai-pulse">

                <BrainCircuit size={28} />

              </div>


              <strong>

                ONLINE

              </strong>


              <span>

                All intelligence systems operational

              </span>


            </div>


            <div className="ai-status-stats">


              <div>

                <span>

                  MODEL

                </span>


                <strong>

                  CV-AI 1.0

                </strong>


              </div>


              <div>

                <span>

                  RESPONSE

                </span>


                <strong>

                  98ms

                </strong>


              </div>


              <div>

                <span>

                  CONFIDENCE

                </span>


                <strong>

                  94.2%

                </strong>


              </div>


            </div>


          </div>


          <div className="dashboard-card intelligence-capabilities">


            <div className="card-header">


              <div>


                <p className="card-label">

                  CAPABILITIES

                </p>


                <h2>

                  AI Analysis Tools

                </h2>


              </div>


            </div>


            <div className="capability-list">


              <div className="capability-item">


                <div>

                  <Sparkles size={15} />

                </div>


                <span>

                  Pattern Detection

                </span>


                <small>

                  ACTIVE

                </small>


              </div>


              <div className="capability-item">


                <div>

                  <BrainCircuit size={15} />

                </div>


                <span>

                  Natural Language Analysis

                </span>


                <small>

                  ACTIVE

                </small>


              </div>


              <div className="capability-item">


                <div>

                  <ShieldCheck size={15} />

                </div>


                <span>

                  Explainable Intelligence

                </span>


                <small>

                  ACTIVE

                </small>


              </div>


            </div>


          </div>


        </div>


      </div>


    </div>

  );

}


export default AIInvestigator;