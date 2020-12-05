import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { drawStroke, clearCanvas } from './canvasUtils';
import {ColorPanel} from './shared/ColorPanel';
import { EditPanel } from './shared/EditPanel';
import { currentStrokeSelector } from './modules/currentStroke/selectors';
import { strokesSelector } from './modules/strokes/selectors';
import { historyIndexSelector } from './modules/historyIndex/selectors';
import { beginStroke, updateStroke} from './modules/currentStroke/reducer';
import { endStroke } from './modules/sharedActions';
import { useCanvas } from './CanvasContext';
import { FilePanel } from './shared/FilePanel';
import { ModalLayer } from './ModalLayer';


function App() {
  const canvasRef = useCanvas();
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
    dispatch(beginStroke({x: offsetX, y: offsetY}));
  }

  const endDrawing = () => {
    if(isDrawing){
      dispatch(endStroke({stroke: currentStroke, historyIndex}));
    }
  }

  const draw = (
    { nativeEvent } : React.MouseEvent<HTMLCanvasElement>
  ) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    dispatch(updateStroke({x: offsetX, y: offsetY}))
  }

  return (
    <>
      <ModalLayer />
      <EditPanel />
      <ColorPanel />
      <FilePanel />
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
