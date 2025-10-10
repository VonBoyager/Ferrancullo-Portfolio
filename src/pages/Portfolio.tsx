export function Portfolio() {
  return (
    <section className="section portfolio" aria-label="Portfolio">
      <div className="container">
        <div className="panel panel--inset">
          <h2>PORTFOLIO PROJECTS</h2>
          <div className="grid">
            <div className="card">
              <h3>E-COMMERCE PLATFORM</h3>
              <div className="description">
                FULL-STACK E-COMMERCE SOLUTION WITH REACT, NODE.JS, AND STRIPE INTEGRATION. 
                FEATURES INCLUDE USER AUTHENTICATION, PAYMENT PROCESSING, AND ADMIN DASHBOARD.
              </div>
              <div className="card-actions">
                <a className="btn primary" href="#" target="_blank">LIVE DEMO</a>
                <a className="btn ghost" href="#" target="_blank">GITHUB</a>
              </div>
            </div>
            <div className="card">
              <h3>REAL-TIME CHAT APPLICATION</h3>
              <div className="description">
                WEBSOCKET-BASED CHAT APPLICATION WITH REACT AND SOCKET.IO. 
                INCLUDES ROOM CREATION, FILE SHARING, AND MESSAGE HISTORY.
              </div>
              <div className="card-actions">
                <a className="btn primary" href="#" target="_blank">LIVE DEMO</a>
                <a className="btn ghost" href="#" target="_blank">GITHUB</a>
              </div>
            </div>
            <div className="card">
              <h3>TASK MANAGEMENT SYSTEM</h3>
              <div className="description">
                COLLABORATIVE TASK MANAGEMENT TOOL WITH DRAG-AND-DROP FUNCTIONALITY. 
                BUILT WITH REACT, REDUX, AND FIREBASE FOR REAL-TIME COLLABORATION.
              </div>
              <div className="card-actions">
                <a className="btn primary" href="#" target="_blank">LIVE DEMO</a>
                <a className="btn ghost" href="#" target="_blank">GITHUB</a>
              </div>
            </div>
            <div className="card">
              <h3>WEATHER DASHBOARD</h3>
              <div className="description">
                RESPONSIVE WEATHER APPLICATION WITH LOCATION-BASED FORECASTS. 
                INTEGRATES MULTIPLE WEATHER APIs AND PROVIDES DETAILED WEATHER DATA.
              </div>
              <div className="card-actions">
                <a className="btn primary" href="#" target="_blank">LIVE DEMO</a>
                <a className="btn ghost" href="#" target="_blank">GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
