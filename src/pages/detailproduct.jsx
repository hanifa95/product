import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detailproduct = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const id = params.id;



  const getDetails = async () => {
    const response = await axios({
      method: "get",
      url: "https://fakestoreapi.com/products/" + id,
    });
    console.log("responce", response);

    if (response.status == 200) {
      setDetails(response.data);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {/* <h1>Edit</h1>
            <input defaultValue={name.name} type="text" onChange={(e)=>setName(e.target.value)} /> */}

      {/* <button onClick={EditDetail}>Edit</button> */}

      {details != null && (
        <>
          <h1 className="text-danger  text-center mt-4">Detail Product</h1>
        
          <div className="text-center">
            <img src={details.image} alt="" className="pt-3" width={"300px"} />
          </div>
          <h4 className="text-center pt-5">Title:{details.title}</h4>
          <p className="text-center">{details.category} </p>
          <p className="text-center ">Price: {details.price}</p>
          <p className="text-center">{details.description}</p>
         
        </>
      )}
    </div>
  );
};

export default Detailproduct;