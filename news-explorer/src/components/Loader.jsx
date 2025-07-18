// loader.js
import React from 'react';

function Loader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      padding: '20px'
    }}>
      <div className="loader"></div>

      {/* Simple CSS spinner */}
      <style>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #9B177E;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
export default Loader;