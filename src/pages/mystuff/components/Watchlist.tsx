
import WatchlistCard from "./WatchlistCard";


interface props{
  list?: any[] 
}


const Watchlist: React.FC<props> = ({list}) => {

 

  
  return (
    <div >
      <div className="font-sans  mt-[1.5rem] ml-[3rem] flex justify-start items-center  relative">
        <h1 className="ml-[0.6rem] font-semibold text-[19px] absolute top-0">Watchlist</h1>
  <div className=" max-w-full grid  grid-cols-4 gap-[10px] mt-[40px]" >
    {list?.map( movie  => movie?.backdrop_path!==null&&  (
    <div>
    <WatchlistCard key={movie.id} movie={movie}/>
    </div>))}
   </div>
      </div>
    </div>
  );
};

export default Watchlist;
