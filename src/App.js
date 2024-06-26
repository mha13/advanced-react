import { useRef } from 'react';
import './App.css';
import Effect from './Effect';
import Feedback from './Feedback';
import SignUp from './SignUp';
import State from './State';
import Spline from '@splinetool/react-spline';

// export default function Home() {
//   return (
//     <main>
//       <Spline
//         scene="https://prod.spline.design/glAhx7yTa-yjeQL0/scene.splinecode" 
//       />
//     </main>
//   );
// }






function App() {

  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
  }

  function moveObj() {
    console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    cube.current.position.x += 10;
  }

  return (
    <div>
      <div className='App bg-gray-500	'>

        <Feedback />
        <SignUp />

      </div>
      <Effect number='10' />
      <State />
      <div>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          onLoad={onLoad}
        />
        <button type="button" onClick={moveObj}>
          Move Cube
        </button>
      </div>
      <Spline scene="https://prod.spline.design/XrcYRWmi48eHtyV4/scene.splinecode" />
      <button type="button" className='text-9xl font-serif' onClick={() => alert("Hello! I am an alert box!!")}>
        CLICK
      </button>
      <Spline scene="https://prod.spline.design/lMg4UptGcosxWYBN/scene.splinecode" />

    </div>
  )
}

export default App;
