
import './App.css'

function App() {
  return(
    <div className='App'>
      <h1>Ranking  of the week</h1>
      <SkeletonLoader number={4}></SkeletonLoader>
    </div>
  );
}

const SkeletonLoader = ({ number }) => {
  return (
    <div className="loader">
      {Array.from({ length: number }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
};

const SkeletonComponent = () => {
  return <div className='skeleton loadingbloc'></div>
}


    







export default App;
