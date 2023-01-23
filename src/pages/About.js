const About = () => {
  return (
    <div>
      <h1>Hi, this ia a about page!</h1>
    </div>
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
