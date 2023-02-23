

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
