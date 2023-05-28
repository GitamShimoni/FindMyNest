import "./ListingPage.css";
import Carousel from "better-react-carousel";
import data from "../data.json";
import { useState, useEffect } from "react";
import Rental from "./Rental";


const ListingPage = () => {
  const [isDisplayChecked, setIsDisplayCheck] = useState(true);
  const [isFilterChecked, setIsFilterCheck] = useState(false);
  const [isLikedChecked, setIsLikedCheck] = useState(false);
  
  const [data1, setData] = useState();
  const [sortBy, setsortBy] = useState();

  useEffect(() => {
    if (sortBy === "handleResetList") {
      setNewList(data1);
    } else if (sortBy === "handlePriceSortAccending") {
      handlePriceSortAccending();
    } else if (sortBy === "handlePriceSortDescending") {
      handlePriceSortDescending();
    } else if (sortBy === "handleSizeSortAccending") {
      handleSizeSortAccending();
    } else if (sortBy === "handleSizeSortDescending") {
      handleSizeSortDescending();
    }
  }, [sortBy, data1]);

  const [minPriceFilter, setminPriceFilter] = useState();
  const [maxPriceFilter, setmaxPriceFilter] = useState();
  const [minSizeFilter, setminSizeFilter] = useState();
  const [maxSizeFilter, setmaxSizeFilter] = useState();
  const [minRoomsFilter, setminRoomsFilter] = useState();
  const [maxRoomsFilter, setmaxRoomsFilter] = useState();
  const [minBathroomsFilter, setminBathroomsFilter] = useState();
  const [maxBathroomsFilter, setmaxBathroomsFilter] = useState();
  const [likedItems, setLikedItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

  useEffect(() => {
    setData(data.results);
    setNewList(data.results);
  }, []);

  const [newList, setNewList] = useState([]);

  function handleResetList() {
    setNewList(data1);
  }

  function handlePriceSortAccending() {
    setNewList((prev) => [...prev].sort((a, b) => a.price - b.price));
  }
  function handlePriceSortDescending() {
    setNewList((prev) => [...prev].sort((a, b) => b.price - a.price));
  }
  function handleSizeSortAccending() {
    setNewList((prev) =>
      [...prev].sort((a, b) => a.lotAreaValue - b.lotAreaValue)
    );
  }
  function handleSizeSortDescending() {
    setNewList((prev) =>
      [...prev].sort((a, b) => b.lotAreaValue - a.lotAreaValue)
    );
  }
  function handleFilter() {
    let minPriceNull = minPriceFilter;
    let maxPriceNull = maxPriceFilter;
    let minSizeNull = minSizeFilter;
    let maxSizeNull = maxSizeFilter;
    let minRoomsNull = minRoomsFilter;
    let maxRoomsNull = maxRoomsFilter;
    let minBathroomsNull = minBathroomsFilter;
    let maxBathroomsNull = maxBathroomsFilter;
    if (!minPriceNull) minPriceNull = 1;
    if (!maxPriceNull) maxPriceNull = 999999999;
    if (!minSizeNull) minSizeNull = 1;
    if (!maxSizeNull) maxSizeNull = 999999;
    if (!minRoomsNull) minRoomsNull = 1;
    if (!maxRoomsNull) maxRoomsNull = 6;
    if (!minBathroomsNull) minBathroomsNull = 1;
    if (!maxBathroomsNull) maxBathroomsNull = 6;
    if (isLikedChecked) {
      setNewList(
        data1.filter((value) => {
          const isInFavorite = likedItems.some(item => item==value.zpid);
          console.log(isInFavorite);
          return (
            value?.price > minPriceNull &&
            value?.price < maxPriceNull &&
            value?.lotAreaValue > minSizeNull &&
            value?.lotAreaValue < maxSizeNull &&
            value?.bedrooms >= minRoomsNull &&
            value?.bedrooms <= maxRoomsNull &&
            value?.bathrooms >= minBathroomsNull &&
            value?.bathrooms <= maxBathroomsNull &&
            isInFavorite
            
          );
        })
      );
    } else {
      setNewList(
        data1.filter((value) => {
          return (
            value?.price > minPriceNull &&
            value?.price < maxPriceNull &&
            value?.lotAreaValue > minSizeNull &&
            value?.lotAreaValue < maxSizeNull &&
            value?.bedrooms >= minRoomsNull &&
            value?.bedrooms <= maxRoomsNull &&
            value?.bathrooms >= minBathroomsNull &&
            value?.bathrooms <= maxBathroomsNull
          );
        })
      );
    }
    setminBathroomsFilter(1);

  }
  function handleResetTextList() {
    setminPriceFilter(null);
    setminSizeFilter(null);
    setmaxPriceFilter(null);
    setmaxSizeFilter(null);
    setminRoomsFilter(null);
    setminBathroomsFilter(null);
    setmaxRoomsFilter(null);
    setmaxBathroomsFilter(null);
  }
  function switchIsChecked() {
    setIsDisplayCheck(!isDisplayChecked);
  }
  function handleisFilterCheck() {
    setIsFilterCheck(!isFilterChecked);
  }
  function handleIsLikedCheck() {
    if (!isLikedChecked) {
      setNewList(
        data1.filter((value) => {
          return likedItems.some(item => item==value.zpid);
        })
      );
    } else setNewList(data1);
    setIsLikedCheck(!isLikedChecked);
  }
  function handleResetLiked() {
    setLikedItems([])
  }

  return (
    <>
      <div id="listing-page-header-div">
        <div id="listing-page-header-h1-div">
          <h1 id="listing-page-header">{`Let's find a home that's perfect for you.`}</h1>
        </div>
        <h1 className="change-mode-header">Filter</h1>
        <div className="viewmode-listing-page">
          <div id="show-filter-div">
            <i
              id={isFilterChecked ? "selected-display-icon" : ""}
              onClick={handleisFilterCheck}
              className="fa fa-sliders display-icon"
            ></i>
          </div>
        </div>
        {isFilterChecked && (
          <div id="filtering-div">
            <div id="listing-page-select-div">
              <select
                onChange={(e) => setsortBy(e.target.value)}
                name="order-list"
                id="select-order-list"
              >
                <option value="handleResetList">Sort By</option>
                <option value="handlePriceSortAccending">
                  Ascending Price
                </option>
                <option value="handlePriceSortDescending">
                  Descending Price
                </option>
                <option value="handleSizeSortAccending">Ascending Size</option>
                <option value="handleSizeSortDescending">
                  Descending Size
                </option>
              </select>
            </div>
            <div id="input-minprice-maxprice-div">
              <input
                className="filtering-input"
                type="number"
                placeholder="Min-Price ($) "
                onChange={(e) => setminPriceFilter(e.target.value)}
                value={minPriceFilter ? minPriceFilter : ""}
              />
              <input
                className="filtering-input"
                type="number"
                placeholder="Max-Price ($)"
                onChange={(e) => setmaxPriceFilter(e.target.value)}
                value={maxPriceFilter ? maxPriceFilter : ""}
              />
            </div>
            <div id="input-minssize-maxsize-div">
              <input
                className="filtering-input"
                type="number"
                placeholder="Min-Size (sqft)"
                onChange={(e) => setminSizeFilter(e.target.value)}
                value={minSizeFilter ? minSizeFilter : ""}
              />
              <input
                className="filtering-input"
                type="number"
                placeholder="Max-Size (sqft)"
                onChange={(e) => setmaxSizeFilter(e.target.value)}
                value={maxSizeFilter ? maxSizeFilter : ""}
              />
            </div>
            <div id="input-roomsbathrooms-div">
              <div id="input-minrooms-maxrooms-div">
                <label className="filter-margin-right" htmlFor="selectminrooms">
                  Min rooms
                </label>
                <select
                  className="filter-margin-right select-rooms-class"
                  name="selectminrooms"
                  id="select-min-rooms"
                  onChange={(e) => setminRoomsFilter(e.target.value)}
                  value={minRoomsFilter ? minRoomsFilter : "1"}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <label className="filter-margin-right" htmlFor="selectmaxrooms">
                  Max rooms
                </label>
                <select
                  className="filter-margin-right select-rooms-class"
                  name="selectmaxrooms"
                  id="select-max-rooms"
                  onChange={(e) => setmaxRoomsFilter(e.target.value)}
                  value={maxRoomsFilter ? maxRoomsFilter : "6"}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div id="input-minbathrooms-maxbathrooms-div">
                <label
                  className="filter-margin-right"
                  htmlFor="selectminbathrooms"
                >
                  Min bathrooms
                </label>
                <select
                  className="filter-margin-right select-rooms-class"
                  name="selectminbathrooms"
                  id="select-min-bathrooms"
                  onChange={(e) => setminBathroomsFilter(e.target.value)}
                  value={minBathroomsFilter ? minBathroomsFilter : "1"}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <label
                  className="filter-margin-right"
                  htmlFor="selectmaxbathrooms"
                >
                  Max bathrooms
                </label>
                <select
                  className="filter-margin-right select-rooms-class"
                  name="selectmaxbathrooms"
                  id="select-max-bathrooms"
                  onChange={(e) => setmaxBathroomsFilter(e.target.value)}
                  value={maxBathroomsFilter ? maxBathroomsFilter : "6"}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>

              <div id="filter-heart-div">
                <i
                  id={
                    isLikedChecked
                      ? "heart-icon-selected"
                      : "heart-icon-notselected"
                  }
                  className="fa fa-heart"
                  onClick={handleIsLikedCheck}
                ></i>
              </div>
            </div>
            <div id="filter-buttons-div">
              <button id="filter-button" onClick={handleFilter}>
                Filter
              </button>
              <button id="filter-reset-button" onClick={handleResetList}>
                Reset
              </button>
              <button
                id="filter-resettext-button"
                onClick={handleResetTextList}
              >
                Clear
              </button>
              <button id="filter-resetliked-button" onClick={handleResetLiked}>
                Reset Favorites
              </button>
            </div>
          </div>
        )}
      </div>
      <h1 className="change-mode-header">Display Mode</h1>
      <div className="viewmode-listing-page">
        <div id="listing-page-display-mode">
          <i
            id={isDisplayChecked ? "selected-display-icon" : ""}
            className="fas fa-arrows-alt-h display-icon"
            onClick={switchIsChecked}
          ></i>
          <i
            id={!isDisplayChecked ? "selected-display-icon" : ""}
            className="fa fa-sort-amount-asc display-icon"
            onClick={switchIsChecked}
          ></i>
        </div>
      </div>
      {isDisplayChecked ? (
        <div id="carousel-display-mode-div">
          <Carousel cols={2} rows={1} gap={0} loop mobileBreakpoint={600}>
            {newList &&
              newList.map((value, index) => {
                if (index < 12)
                  return (
                    <Carousel.Item key={index * 11}>
                      <Rental
                      likedItems = {likedItems}
                        setLikedItems={setLikedItems}
                        id={`carouselnum${index}`}
                        key={value.zpid}
                        value={value}
                      />
                    </Carousel.Item>
                  );
              })}
          </Carousel>
        </div>
      ) : (
        <div id="display-horizontal-container">
          <div id="display-horizontal-div">
            {newList &&
              newList.map((value, index) => {
                if (index < 12)
                  return (
                    <Rental
                    likedItems = {likedItems}
                      setLikedItems={setLikedItems}
                      key={value.zpid}
                      id={`carouselnum${index}`}
                      value={value}
                    />
                  );
              })}
          </div>
        </div>
      )}
      
    </>
  );
};

export default ListingPage;
