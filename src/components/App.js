
import '../App.css';
import Testimonial from './Testimonial';
import reviews from '../data'

function App() {
  return (
    <div className="bg-violet-400">
      <div className='text-center'>
          <h1 className=''>Our Testimonial</h1>
          <div></div>
          <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
