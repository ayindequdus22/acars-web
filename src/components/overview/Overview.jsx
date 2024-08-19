import React, { useContext } from "react";
import "./overview.scss";
import { Link } from "react-router-dom";
import { showLikedContext } from "../../utils/showlikedcontext";
import { Axios } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";
import { toast } from 'react-toastify';


const Overview = () => {
  const showme = useContext(showLikedContext);
  const { data: overview, isLoading } = useQuery({
    queryKey: ["overview"],
    queryFn: async () => {
      const result = await Axios.get("/overviews")
      return result;
    }, onError: (error) => {
      toast.error(`Request failed: ${error.message}`);
    },
  })
  return (
    <div className="overviewProductsContainer fldc">
      <h3>Overview</h3>
      {isLoading ? <Loader /> :
        <div className="overviewProducts fldcW">
          {overview?.data.map((myOverview, id) => (

            <div className="overView" key={id}>
              <div className="fa fa-heart" onClick={() => showme.setShow(true)}></div>
              <div className="image">
                <picture>
                  <img src={myOverview.image} alt={id} />
                </picture>
              </div>
              <div className="details fldc">
                <p>{myOverview.name}</p>
                <p>${myOverview.price?.toFixed(2)}</p>
                <Link
                  className="pageLinks" to={'/products'} style={{}}
                >
                  View Products
                </Link>
              </div>
            </div>

          )
          )}
        </div>
      }


    </div>
  );
};
export default Overview;
