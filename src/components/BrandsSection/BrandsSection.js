// import './BrandsSection.css';

// const BrandsSection = () => {
//   const brands = [
//     { name: 'Indian Army', color: '#DC2626' },
//     { name: 'Cabinet Secretariat', color: '#64748B' },
//     { name: 'GMR', color: '#3B82F6' },
//     { name: 'DLF', color: '#1F2937' },
//     { name: 'Swiss Military', color: '#EF4444' },
//     { name: 'Apollo Hospitals', color: '#0EA5E9' },
//     { name: 'Worldmark Aerocity', color: '#6B7280' },
//     { name: 'Iotech', color: '#2563EB' },
//     { name: 'GLS Group', color: '#DC2626' }
//   ];

//   const testimonials = [
//     {
//       text: "Bro.,loved your podcast and reels from the podcast .Thank you so much to the whole team.",
//       author: "Kunal Diwan",
//       rating: 5
//     },
//     {
//       text: "Mavrick Productions captured our event beautifully! Highly recommend their professional photography and videography services.",
//       author: "Jeya Surya",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="brands-section">
//       <h2 className="brands-title">Brands We Have Worked With</h2>
      
//       <div className="brands-grid">
//         {brands.map((brand, index) => (
//           <div key={index} className="brand-item">
//             <div 
//               className="brand-logo" 
//               style={{ backgroundColor: brand.color }}
//             >
//               {brand.name.substring(0, 2)}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="testimonials-grid">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-card">
//             <div className="stars">
//               {[...Array(testimonial.rating)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <p className="testimonial-text">{testimonial.text}</p>
//             <div className="author-avatar"></div>
//             <p className="author-name">{testimonial.author}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BrandsSection;

import './BrandsSection.css';

const BrandsSection = () => {
  const brands = [
    { 
      name: 'Indian Army', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=363,fit=crop,trim=37.241379310344826;0;37.241379310344826;0/AMq8DzDaxqIMJv93/toppng.com-indian-army-logo-png-6520x6376-AR031gn0Qet4EaDV.png'
    },
    { 
      name: 'Cabinet Secretariat', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=126,fit=crop/AMq8DzDaxqIMJv93/cabinet_secretariat_of_india-Aq2JGKzl0WHNejZa.png'
    },
    { 
      name: 'GMR', 
      url: 'https://assets.zyrosite.com/AMq8DzDaxqIMJv93/gmr_group_-logo-YD0wEXazVnfV1NVE.svg'
    },
    { 
      name: 'DLF', 
      url: 'https://assets.zyrosite.com/AMq8DzDaxqIMJv93/dlf_logo-YbNJ40e3D5iWWykQ.svg'
    },
    { 
      name: 'Swiss Military', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=368,fit=crop/AMq8DzDaxqIMJv93/screenshot-2025-07-14-at-19.20.00-AVLaxgGnD7S8e6yL.png'
    },
    { 
      name: 'Apollo Hospitals', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=326,fit=crop/AMq8DzDaxqIMJv93/apollo-hospitals-seeklogo-m6Lb2XDXa3taRjnd.png'
    },
    { 
      name: 'Worldmark Aerocity', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=367,fit=crop/AMq8DzDaxqIMJv93/screenshot-2025-07-14-at-19.31.23-Awv98KPg5kCKpXQK.png'
    },
    { 
      name: 'Iotech', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=368,fit=crop/AMq8DzDaxqIMJv93/logo_final-2-Awv98KrMZ9c78xN5.png'
    },
    { 
      name: 'GLS Group', 
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=240,fit=crop/AMq8DzDaxqIMJv93/gls-logo-1-1-2-A1a5zXKqlRH62GkL.png'
    }
  ];

  const testimonials = [
    {
      text: "Bro.,loved your podcast and reels from the podcast .Thank you so much to the whole team.",
      author: "Kunal Diwan",
      rating: 5
    },
    {
      text: "Mavrick Productions captured our event beautifully! Highly recommend their professional photography and videography services.",
      author: "Jeya Surya",
      rating: 5
    }
  ];

  return (
    <section className="brands-section">
      <h2 className="brands-title">Brands We Have Worked With</h2>
      
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <div className="brand-logo-container">
              <img 
                src={brand.url} 
                alt={brand.name}
                className="brand-logo-img"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="author-avatar"></div>
            <p className="author-name">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;