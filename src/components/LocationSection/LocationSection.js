// import './LocationSection.css';

// const LocationSection = () => {
//   return (
//     <section className="location-section">
//       <div className="location-container">
//         <div className="location-info">
//           <h2 className="location-title">Mavrick Productions</h2>
//           <p className="location-description">
//             Your premier destination for photography and video production services, 
//             specializing in lifestyle, corporate, events, and more.
//           </p>

//           <div className="location-details">
//             <div className="detail-item">
//               <h3 className="detail-heading">Location</h3>
//               <p className="detail-text">
//                 Wework: DLF Forum Cybercity, DLF Cyber City, DLF Phase 3, 
//                 Sector 24, Gurugram, Haryana 122002
//               </p>
//             </div>

//             <div className="detail-item">
//               <h3 className="detail-heading">Hours</h3>
//               <p className="detail-text">9 AM - 10 PM</p>
//             </div>
//           </div>
//         </div>

//         <div className="location-map">
//           <div className="map-placeholder">
//             <p className="map-text">📍 Gurugram, Haryana</p>
//             <p className="map-subtext">DLF Cyber City</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationSection;

import './LocationSection.css';

const LocationSection = () => {
  const latitude = 28.494025;
  const longitude = 77.092567;
  // const externalMapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  // const handleOpenMap = () => {
  //   window.open(externalMapUrl, '_blank');
  // };

  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-info">
          <h2 className="location-title">Mavrick Productions</h2>
          <p className="location-description">
            Your premier destination for photography and video production services, 
            specializing in lifestyle, corporate, events, and more.
          </p>

          <div className="location-details">
            <div className="detail-item">
              <h3 className="detail-heading">Location</h3>
              <p className="detail-text">
                Wework: DLF Forum Cybercity, DLF Cyber City, DLF Phase 3, 
                Sector 24, Gurugram, Haryana 122002
              </p>
            </div>

            <div className="detail-item">
              <h3 className="detail-heading">Hours</h3>
              <p className="detail-text">9 AM - 10 PM</p>
            </div>
          </div>
        </div>

        <div className="location-map">
          <iframe
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mavrick Productions Location"
            className="map-iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;