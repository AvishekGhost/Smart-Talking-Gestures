import React, { useState, useRef, useEffect, useCallback } from "react";
import * as tmImage from "@teachablemachine/image";
import Spinner from 'react-bootstrap/Spinner';
import classes from "./Webcam.module.css";
let model;
const modelURL = "https://teachablemachine.withgoogle.com/models/B2T0Xdg8/model.json";
const metadataURL = "https://teachablemachine.withgoogle.com/models/B2T0Xdg8/metadata.json";

const Webcam = props => {
  const cv = window.cv;
  const { setPredictedAlphabet } = props;
  const [isLoading, setIsLoading] = useState(true);
  const webcamContainer = useRef();
  const videoContainer = useRef();
  const canvasContainer = useRef();

  const predict = useCallback(async () => {
    try {
      if (!canvasContainer.current) { return; }
      const prediction = await model.predict(canvasContainer.current);
      prediction.sort((a, b) => b.probability - a.probability);
      setPredictedAlphabet(prediction[0].className);
    } catch (err) {
      console.log(err);
    }
  }, [setPredictedAlphabet]);

  useEffect(() => {
    const FPS = 30, video = videoContainer.current;
    let cap, frame, fgmask, fgbg, timeoutId = null;

    async function init() {
      try {
        model = await tmImage.load(modelURL, metadataURL);
        cap = new cv.VideoCapture(video);
        frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
        fgmask = new cv.Mat(video.height, video.width, cv.CV_8UC1);
        fgbg = new cv.BackgroundSubtractorMOG2(100, 16, false);

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
          .then(function(stream) {
              video.srcObject = stream;
              video.play();
          })
          .catch(function(err) {
              console.log("An error occurred! " + err);
          });
      } catch (err) {
        console.log(err);
      }

      async function processVideo() {
        try {
          if (!canvasContainer.current) { return; }

          let begin = Date.now();
          // start processing.
          cap.read(frame);
          fgbg.apply(frame, fgmask, .9);
          cv.imshow('canvas_output', fgmask);
          // schedule the next one.
          let delay = 1000/FPS - (Date.now() - begin);
          timeoutId = setTimeout(processVideo, delay);
        } catch (err) {
          console.log(err)
        }
        await predict();
      };
      // first call
      timeoutId = setTimeout(processVideo, 0);
      setIsLoading(false);
    }
    init();
    return () => {
      if (frame) { frame.delete(); }
      if (fgmask) { fgmask.delete(); }
      if (fgbg) { fgbg.delete(); }
      clearTimeout(timeoutId);
    };
  }, [cv, predict]);

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : null}
      <div className={classes.webcams} ref={webcamContainer}>
        <video id="cam_input" ref={videoContainer} height="200" width="200"></video>
        <canvas id="canvas_output" ref={canvasContainer} height="200" width="200"></canvas>
      </div>
    </>
  );
};

export default Webcam;
