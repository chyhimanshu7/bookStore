// import React, { useEffect, useState } from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import axios from "axios";

// import Cards from "./Cards";
// function Freebook() {
//   const [book, setBook] = useState([]);
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");

//         const data = res.data.filter((data) => data.category === "Free");
//         console.log(data);
//         setBook(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
//             corporis nulla non suscipit, iure neque earum?
//           </p>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {book.map((item) => (
//               <Cards item={item} key={item.id} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Freebook;


import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log('API Response:', res.data); // Log full API response

        const data = res.data.filter((data) => data.category === "Free");
        console.log('Filtered Data:', data); // Log filtered data
        
        setBook(data);
      } catch (error) {
        console.log('API Error:', error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          "Free offered courses provide an invaluable opportunity for individuals to enhance their skills and knowledge without financial barriers. These courses are designed to make education accessible to a wider audience, promoting lifelong learning and personal development. By removing the cost obstacle, free courses empower learners from diverse backgrounds to pursue their interests, advance their careers, and contribute meaningfully to their communities."

Does that work for you, or would you like any adjustments?




 
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.length ? (
              book.map((item) => <Cards item={item} key={item.id} />)
            ) : (
              <p>No free books available</p>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
