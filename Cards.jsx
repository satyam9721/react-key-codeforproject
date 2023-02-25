

export default function Cards(props) {
  //with the help of props, we are fetching data from database.

  let options = props.options;
  let priceOptions = Object.keys(options); //displaying data half and full from database

 
          <img
            src={props.imgSrc} //imoprting diffrent image from to database
            className="card-img-top"
            alt="..." style={{height:"120px",objectFit:"fill"}} //this line fit each photo in organized way/>
          
                {/* selecting quantity of food */}
                {priceOptions.map((data) => {
                  return (
                    <options key={data} value={data}>
                      {data}
                    </options>
                 
<ul className="navbar-nav me-auto mb-2"> //shifting login and signup button on right side
  -------------------------------------------------------------------------------------------
  {(localStorage.getItem("auth"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
        </li>

        :""} //when authtoken exist then show the login page
    -------------------------------------------------------------------------------------------    
        
        const handleLogout =()=>{
    localStorage.removeItem("authToken");
    navigate("/login");

  }
        <div className='btn bg-white text-success mx-2' onClick={handleLogout}>
          Logout </div>  //performing logout when click on this button
------------------------------------------------------------------------------------------------
 let finalPrice = qty* parseInt(options[size]); //final price of the products
useEffect(()=>{
  setSize(priceRef.current.value)
},[])  //dispalying price of item

<select className="m-2 h-100  bg-secondary rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
