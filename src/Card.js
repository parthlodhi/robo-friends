const Card = ({id,name,email}) => {
  return(

     <div className='tc bg-light-green dib br3 ma2 grow bu2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2> {name} </h2>
        <p> {email}</p>
      </div>
     </div>
  )

}
export default Card;
