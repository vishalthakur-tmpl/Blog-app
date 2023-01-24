import service1Icon from "../images/1.svg";
import service2Icon from "../images/2.svg";
import service3Icon from "../images/3.svg";
import service4Icon from "../images/4.svg";
import service5Icon from "../images/5.svg";
import service6Icon from "../images/6.svg";

const About = () => {
  const ServiceCard = ({ title, icon }) => (
    <div className="service-card">
      <div className="service-card-content">
        <img src={icon} className="service-svg" alt="service icon" />;
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tincidunt, ipsum ut suscipit congue, risus nibh malesuada magna, vel
          sagittis quam leo eget neque.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="about-us-container">
        <h1 className="about-title">About Our Blog App</h1>
        <p className="about-info">
          Our blog app is a platform for users to share their thoughts and ideas
          with the world. We believe in the power of self-expression and the
          ability for individuals to connect through shared experiences and
          perspectives.
        </p>
        <p>
          Our app features a clean and user-friendly interface, making it easy
          for users to create and share blog posts. It also includes a
          commenting system, allowing for an interactive and engaged community.
        </p>
      </div>

      <div className="services-container">
        <h1 className="about-title">Our Services</h1>
        <div className="services-card-container">
          <ServiceCard title="Service 1" icon={service1Icon} />
          <ServiceCard title="Service 2" icon={service2Icon} />
          <ServiceCard title="Service 3" icon={service3Icon} />
          <ServiceCard title="Service 4" icon={service4Icon} />
          <ServiceCard title="Service 5" icon={service5Icon} />
          <ServiceCard title="Service 6" icon={service6Icon} />
        </div>
      </div>
    </>
  );
};

export default About;

// import React, { useState, useEffect } from 'react';

// function SearchBar() {
//     const [searchValue, setSearchValue] = useState('');
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         fetch('recommendations.json')
//             .then(response => response.json())
//             .then(data => setRecommendations(data.recommendations))
//     }, []);

//     const handleSearchChange = (event) => {
//         setSearchValue(event.target.value);
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         // Filtering the recommendations based on the searchValue
//         const filteredRecommendations = recommendations.filter(item =>
//             item.toLowerCase().includes(searchValue.toLowerCase())
//         );
//         setRecommendations(filteredRecommendations);
//     };

//     return (
//         <form onSubmit={handleSearchSubmit}>
//             <input
//                 type="text"
//                 value={searchValue}
//                 onChange={handleSearchChange}
//                 placeholder="Search..."
//                 />
//             <button type="submit">Search</button>
//             {recommendations.length > 0 && (
//                 <ul>
//                     {recommendations.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             )}
//         </form>
//     );
// }

// export default SearchBar;
