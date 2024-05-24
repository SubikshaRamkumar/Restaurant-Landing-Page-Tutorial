// // ImageUpload.js
// import React, { useState } from 'react';
// import './ImageUploading.css'; // Import the CSS file
// import Navbar from "./Navbar";

// const ImageUpload = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [imageName, setImageName] = useState('');
//   const [showDetails, setShowDetails] = useState(false);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.size < 2000000) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImageUrl(reader.result);
//         setImageName(file.name);
// 		setShowDetails(true);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert('Image size must be less than 2MB');
//     }
//   };

//   return (
// 	  <>
// 	<Navbar/>
//     <div className="image-upload-container">
//       <div className="right-section">
//         <input 
//           type="file" 
//           id="file" 
//           accept="image/*" 
//           hidden 
//           onChange={handleImageUpload} 
// 		  />
//         <div className="img-area" data-img={imageName}>
//           {imageUrl ? <img src={imageUrl} alt="Uploaded" /> : (
//             <>
//               <i className='bx bxs-cloud-upload icon'></i>
//               <h3>Upload Image</h3>
//               <p>Image size must be less than <span>2MB</span></p>
//             </>
//           )}
//         </div>
//         <button className="select-image" onClick={() => document.getElementById('file').click()}>
//           Select Image
//         </button>
//       </div>
//       {showDetails && ( // Render left section only if showDetails is true
//           <div className="left-section">
//             <div className="lined-box">
//               <div className="content">
//                 <h4>Image Details</h4>
//                 <p>Is crack present: Yes</p>
//                 <p>Number of cracks: 10</p>
//                 {/* Add more details here */}
//               </div>
//             </div>
//           </div>
// 			)}
//       {!showDetails && ( 
//           <div className="left-section">
//             <div className="lined-box">
//               <div className="content">
//                 <h4>Upload image to view the details</h4>
//               </div>
//             </div>
//           </div>
// 			)}


//     </div>
// 		  </>
//   );
// };

// export default ImageUpload;

import React, { useState } from 'react';
import './ImageUploading.css'; // Import the CSS file
import Navbar from "./Navbar";
import jsPDF from 'jspdf';
import ImageViewer from './ImageViewer'

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
        setImageName(file.name);
        setShowDetails(true);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Image size must be less than 2MB');
    }
  };

  const handlePdfDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Crack Dimensions:", 10, 10);

    const crackDimensions = [
      "Crack 1: 10 x 20",
      "Crack 2: 15 x 25",
      "Crack 3: 20 x 30",
      // Add more crack dimensions here
    ];

    crackDimensions.forEach((dimension, index) => {
      doc.text(dimension, 10, 20 + index * 10);
    });

    doc.save("crack_dimensions.pdf");
  };

  const images = [
    {
      url: 'airbus1.png',
      dimensions: 'Dimensions: 100x100',
    },
    {
      url: 'maintenance.png',
      dimensions: 'Dimensions: 150x150',
    },
    {
      url: 'solution.png',
      dimensions: 'Dimensions: 200x200',
    },
	{
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
	  {
		url: 'maintenance.png',
		dimensions: 'Dimensions: 150x150',
	  },
	  {
		url: 'solution.png',
		dimensions: 'Dimensions: 200x200',
	  },
    // Add more images as needed
  ];
  return (
    <>
      <Navbar />
      <div className="image-upload-container">
        <div className="right-section">
          <input
            type="file"
            id="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
          <div className="img-area" data-img={imageName}>
            {imageUrl ? <img src={imageUrl} alt="Uploaded" /> : (
              <>
                <i className='bx bxs-cloud-upload icon'></i>
                <h3>Upload Image</h3>
                <p>Image size must be less than <span>2MB</span></p>
              </>
            )}
          </div>
          <button className="select-image" onClick={() => document.getElementById('file').click()}>
            Select Image
          </button>
        </div>
        {showDetails && (
          <div className="left-section">
            <div className="lined-box">
              <div className="content">
				<div className='result1'>
                <h4>Image Details</h4>
                <p>Is crack present: Yes</p>
                <p>Number of cracks: 10</p>
				</div>
                {/* Add more details here */}
				<div className='result2'>

				<button className="download-pdf" onClick={handlePdfDownload}>
					Download PDF
                </button>
				</div>
              </div>
            </div>
			
          </div>
        )}
        {!showDetails && (
          <div className="left-section">
            <div className="lined-box">
              <div className="content">
                <h4>Upload image to view the details</h4>
              </div>
            </div>
          </div>
        )}
      </div>
	  {showDetails && (
		  <ImageViewer images={images} /> 
        )}
    </>
  );
};

export default ImageUpload;
