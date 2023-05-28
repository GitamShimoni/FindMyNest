import './Estate.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Estate = (value) => {

  const [likedItems, setLikedItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(likedItems))
  },[likedItems])

  function handleLikeClick() {
    setLikedItems((prev) => {
      if (prev.some((item) => item === value.value.zpid)) {
        return prev.filter((item) => item !== value.value.zpid);
      }
      return [...prev, value.value.zpid];
    });
  }


  return (
    <div id='real-estate-page'>
      <div id='backbutton-div'>
            <Link to={"../../listings"}>
              <button id='backbutton-button'> <i className='fas fa-arrow-alt-circle-right' id='backbutton-icon'></i></button>
            </Link>
          </div>
        <div className='place-box-page'>
            <div id='place-imgdiv-page'>
                <img className='place-img-page' src={`${value.value.imgSrc}`} alt="" />
                <h1 className='place-name-page'>{`${value.value.city}, ${value.value.country}.`}</h1>
            </div>
            <div id='estate-heart-icon-div'>
            <i id={likedItems.some((item) => item === value.value.zpid)
              ? "heart-icon-selected"
              : "heart-icon-notselected"} className="fa fa-heart"
                onClick={handleLikeClick}></i>
            </div>
        <Box id="description-page-box">
        <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i className="fa fa-home"></i>
              </ListItemIcon>
              <ListItemText primary="Address" secondary={`${value.value.streetAddress}, ${value.value.zipcode}`} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i className="fa fa-building-o"></i>
              </ListItemIcon>
              <ListItemText primary="Floors" secondary={`${value.value.bathrooms}`}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i className="fa fa-hotel"></i>
              </ListItemIcon>
              <ListItemText primary="Rooms" secondary={`${value.value.bedrooms}`} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i className="fa fa-object-group"></i>
              </ListItemIcon>
              <ListItemText primary="Built Area" secondary={`${value.value.lotAreaValue} ${value.value.lotAreaUnit}`}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <i className="fa fa-money"></i>
              </ListItemIcon>
              <ListItemText primary="Cost" secondary={`${value.value.price.toLocaleString()}$`}/>
            </ListItemButton>
          </ListItem>
        </List>
        </nav>
        </Box>
        </div>
    </div>
  )
}

export default Estate