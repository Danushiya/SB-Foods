import React, { useEffect, useState } from 'react'
import '../../styles/Restaurants.css'
import axios from 'axios';

const AllRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
      }, [])

    const fetchRestaurants = async() =>{
        await axios.get('http://localhost:6001/fetch-restaurants').then(
          (response)=>{
            setRestaurants(response.data);
          }
        )
      }

  return (
    <div className="AllRestaurantsPage" style={{marginTop: '14vh'}}>

    <div className="restaurants-container">
 
        <div className="restaurants-body">
            <h3>All restaurants</h3>
            <div className="restaurants">

                {restaurants.map((restaurant) =>(

                    <div className='restaurant-item' key={restaurant._id}>
                        <div className="restaurant">
                            <img src={restaurant.mainImg} alt="" />
                            <div className="restaurant-data">
                                <h6>{restaurant.title}</h6>
                                <p>{restaurant.address}</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    </div>
    </div>
  )
}

export default AllRestaurants