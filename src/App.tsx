import React, {useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentStrokeSelector, historyIndexSelector, strokesSelector } from './selectors';
import './App.css';
import { beginStroke, endStroke, updateStroke } from './actions';
import { drawStroke, clearCanvas } from './canvasUtils';
import {ColorPanel} from './ColorPanel';
import { EditPanel } from './EditPanel';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentStroke = useSelector(currentStrokeSelector);
  const strokes = useSelector(strokesSelector);
  const historyIndex = useSelector(historyIndexSelector);
  const dispatch = useDispatch();

  const isDrawing = !!currentStroke.points.length;

  const getCanvasContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext('2d') }
  }

  useEffect(()=>{
    const { context, canvas } = getCanvasContext();
    if(!context || !canvas){
      return
    }

    requestAnimationFrame(()=>{
      clearCanvas(canvas);

      strokes.slice(0, strokes.length - historyIndex).forEach( stroke => {
        drawStroke(context, stroke.points, stroke.color)
      })
      drawStroke(context, currentStroke.points, currentStroke.color)
    })
  }, [currentStroke, historyIndex, strokes])

  const startDrawing = (
    { nativeEvent } : React.MouseEvent<HTMLCanvasElement>
  ) => {
    const {offsetX, offsetY} = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  }

  const endDrawing = () => {
    if(isDrawing){
      dispatch(endStroke());
    }
  }
  const draw = (
    { nativeEvent } : React.MouseEvent<HTMLCanvasElement>
  ) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    dispatch(updateStroke(offsetX, offsetY))
  }

  return (
    <>
      <EditPanel />
      <ColorPanel />
      <canvas
        ref={canvasRef}
        width="600"
        height="400"

        onMouseDown = {startDrawing}
        onMouseUp = {endDrawing}
        onMouseLeave = {endDrawing}
        onMouseMove = {draw}
      />
    </>
  )
}

export default App;
