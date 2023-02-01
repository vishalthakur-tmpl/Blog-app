import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const { blogId } = useParams();

  const searchAPI = `https://nordic-rose-api.onrender.com/search?keyword=`;
  const articleAPI = `https://nordic-rose-api.onrender.com/article/`;

  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${searchAPI}${value}`);
      setResults(response.data);
    };
    if (value) {
      fetchData();
    } else {
      setResults([]);
    }
    setShowClearButton(value !== "");
  }, [value]);

  const handleClick = (blogId) => {
    setValue("");
    setResults([]);
    navigate(`/article/${blogId}`);
    axios
      .get(`${articleAPI}${blogId}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const clearInput = () => {
    setValue("");
    setResults([]);
    setShowClearButton(false);
  };

  return (
    <>
      <form className="search">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search..."
        />
        {showClearButton && (
          <button className="clear-button" onClick={clearInput}>
            <RxCross2 />
          </button>
        )}
        <button className="search-button">
          <BiSearchAlt />
        </button>
      </form>
      {results.length > 0 && (
        <div className="dropdown">
          {results.slice(1, 5).map((result) => (
            <div
              key={result.id}
              className="cards"
              onClick={() => handleClick(result.id)}
            >
              <h4>{result.title}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
