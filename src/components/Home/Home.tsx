
const Home = () => {
  return (
    <>
      <div className="promo relative">
        <img src="images/new-collection.png" alt="collection" />
        <div className="arrival absolute top-36 right-14 max-w-2xl ml-auto bg-yellow-50 py-16 px-11">
          <div className="font-semibold">New Arrival</div>
          <h2 className="font-bold text-5xl text-amber-500 mt-1">Discover Our<br/>
          New Collection
          </h2>
          <div className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum doloremque aperiam atque animi.</div>
          <button className="w-64 mt-11 py-6 font-bold bg-amber-500 text-white">BUY NOW</button>
        </div>
      </div>
      <div className="range">
        <h2 className="range-header">Browse The Range</h2>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div className="items-wrapper flex items-center gap-4 ">
        <div className="range-item1">
          <img src="images/dining.png" alt="dining" />
          <div>Dining</div>
        </div>
        <div className="range-item2">
          <img src="images/living.png" alt="Living" />
          <div>Living</div>
        </div>
        <div className="range-item3">
          <img src="images/bedroom.png" alt="Bedroom" />
          <div>Bedroom</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home