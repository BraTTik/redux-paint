import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startDrawing = () => {}
  const endDrawing = () => {}
  const draw = () => {}
  return <canvas 
          onMouseDown = { startDrawing }
          onMouseUp = {endDrawing}
          onMouseLeave = { endDrawing}
          onMouseMove = { draw }
          ref={canvasRef} 
          />;
}

export default App;
