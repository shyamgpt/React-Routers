import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
function About() {
    return (
      <>
       <Navbar/>
        <main>
          <h1>About Page</h1>
          <Link to="/">Back</Link>
          {/* <Link to="/items">Item</Link> */}
        </main>
      </>
    );
  }
  
  export default About;
  