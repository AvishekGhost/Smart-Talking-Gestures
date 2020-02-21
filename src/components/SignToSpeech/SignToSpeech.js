import React, { useState } from "react";

import path_a from "../../assets/pngs/a.png";
import path_b from "../../assets/pngs/b.png";
import path_c from "../../assets/pngs/c.png";
import path_d from "../../assets/pngs/d.png";
import path_e from "../../assets/pngs/e.png";
import path_f from "../../assets/pngs/f.png";
import path_g from "../../assets/pngs/g.png";
import path_h from "../../assets/pngs/h.png";
import path_i from "../../assets/pngs/i.png";
import path_j from "../../assets/pngs/j.png";
import path_k from "../../assets/pngs/k.png";
import path_l from "../../assets/pngs/l.png";
import path_m from "../../assets/pngs/m.png";
import path_n from "../../assets/pngs/n.png";
import path_o from "../../assets/pngs/o.png";
import path_p from "../../assets/pngs/p.png";
import path_q from "../../assets/pngs/q.png";
import path_r from "../../assets/pngs/r.png";
import path_s from "../../assets/pngs/s.png";
import path_t from "../../assets/pngs/t.png";
import path_u from "../../assets/pngs/u.png";
import path_v from "../../assets/pngs/v.png";
import path_w from "../../assets/pngs/w.png";
import path_x from "../../assets/pngs/x.png";
import path_y from "../../assets/pngs/y.png";
import path_z from "../../assets/pngs/z.png";
import path_space from '../../assets/pngs/space.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faCheckCircle,
  faBackspace,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
import Webcam from "./Webcam/Webcam";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./SignToSpeech.module.css";

const SignToSpeech = props => {
  const [predictedAlphabet, setPredictedAlphabet] = useState("a");
  const [generatedString, setGeneratedString] = useState("");
  const [showImages, setShowImages] = useState(false);
  const [outputImages, setOutputImages] = useState([]);

  const createPredictedString = () => {
    if (predictedAlphabet !== "") {
      setGeneratedString(generatedString + predictedAlphabet);
      const newImages = [...outputImages];
      const imgURL = getImagePath();
      newImages.push(imgURL);
      setOutputImages(newImages);
      setShowImages(true);
    }
  };

  const clearPredictedString = () => {
    setOutputImages([]);
    setGeneratedString("");
  };

  const popChar = () => {
    const updatedString = [...outputImages];
    updatedString.pop();
    setOutputImages(updatedString);
    setGeneratedString(currentString => {
      return currentString.slice(0, -1);
    })
  }

  const startSpeech = () => {
    if (generatedString) {
      const msg = new SpeechSynthesisUtterance(generatedString);
      window.speechSynthesis.speak(msg);
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const getImagePath = () => {
    switch (predictedAlphabet) {
      case "a": return path_a;
      case "b": return path_b;
      case "c": return path_c;
      case "d": return path_d;
      case "e": return path_e;
      case "f": return path_f;
      case "g": return path_g;
      case "h": return path_h;
      case "i": return path_i;
      case "j": return path_j;
      case "k": return path_k;
      case "l": return path_l;
      case "m": return path_m;
      case "n": return path_n;
      case "o": return path_o;
      case "p": return path_p;
      case "q": return path_q;
      case "r": return path_r;
      case "s": return path_s;
      case "t": return path_t;
      case "u": return path_u;
      case "v": return path_v;
      case "w": return path_w;
      case "x": return path_x;
      case "y": return path_y;
      case "z": return path_z;
      case " ": return path_space;
      default: return null;
    }
  };

  return (
    <div className={classes.SignToSpeech}>
      <Container className={classes.wrapper}>
        <h1>Signs to Speech</h1>
        <Row className="p-4">
          <Col
            md={8}
            className="p-2 d-flex justify-content-center align-items-center"
          >
            <div className={classes.webcamContainer}>
              <Webcam setPredictedAlphabet={setPredictedAlphabet} />{" "}
            </div>
          </Col>
          <Col
            md={4}
            className="p-2 d-flex flex-column justify-content-center align-items-center"
          >
            <h4>Predicted alphabet: {predictedAlphabet}</h4>
            <div className={classes.predictedAlphabetContainer}>
              <img
                className={classes.predictedAlphabetImage}
                src={getImagePath()}
                height="50px"
                width="50px"
                alt="OutputImage"
              />
            </div>
            <div className="d-flex justify-content-around align-items-center w-100 py-4">
              <button
                className={classes.createStringButton}
                onClick={createPredictedString}
              >
                <FontAwesomeIcon icon={faCheckCircle} className={classes.responsiveIcon} />
              </button>
              <button
                className={classes.clearStringButton}
                onClick={popChar}
              >
                <FontAwesomeIcon icon={faBackspace} className={classes.responsiveIcon} />
              </button>
              <button
                className={classes.clearStringButton}
                onClick={clearPredictedString}
              >
                <FontAwesomeIcon icon={faRedo} className={classes.responsiveIcon} />
              </button>
            </div>
            <p>Generated Msg: {generatedString}</p>
          </Col>
        </Row>
        <Row className="p-4">
          <Col
            md={8}
            className="p-2 d-flex justify-content-center align-items-center"
          >
            <div className={classes.predictedStringContainer}>
              {showImages
                ? outputImages.map((imgURL, index) => {
                    if (imgURL) {
                      return (
                        <img
                          key={index}
                          src={imgURL}
                          style={{ width: "50px", height: "50px" }}
                          alt="output img"
                        />
                      );
                    } else {
                      return <br key={index} />;
                    }
                  })
                : null}
            </div>
          </Col>
          <Col
            md={4}
            className="p-2 d-flex justify-content-around align-items-center w-100"
          >
            <button className={classes.startSpeechButton} onClick={startSpeech}>
              Speak&nbsp;
              <FontAwesomeIcon icon={faMicrophoneAlt} />
            </button>
            <button className={classes.stopSpeechButton} onClick={stopSpeech}>
              Stop&nbsp;
              <FontAwesomeIcon icon={faMicrophoneAltSlash} />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignToSpeech;
