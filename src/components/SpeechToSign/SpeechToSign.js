import React, { useState, useCallback,useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
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

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt, faMicrophoneAltSlash } from "@fortawesome/free-solid-svg-icons";
import classes from "./SpeechToSign.module.css";

const SpeechToSign = props => {
  const [outputImages, setOutputImages] = useState([]);
  const [textInput, setTextInput] = useState("");
  
  const [showImages, setShowImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const handleInput = useCallback(async () => {
    setIsLoading(true);
    const images = [];
    for (let char of textInput) {
      const imgURL = getImagePath(char.toLocaleLowerCase());
      images.push(imgURL);
    }
    setOutputImages(images);
    setShowImages(true);
    setIsLoading(false);
  }, [setShowImages, setOutputImages, textInput]);

  useEffect(() => {
    handleInput(); // using camelCase for variable name is recommended.
  }, [textInput, handleInput]); // this will call getChildChange when ever name changes.


  const getImagePath = alphabet => {
    switch (alphabet) {
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

  const resetInput = () => {
    setTextInput("");
    setOutputImages([]);
  };

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      setTextInput(result);
    }
  });

  return (
  <div>
    <div className="bg-dark text-light d-flex flex-column justify-content-center align-items-center">
      <h1> Welcome to Speech to Sign! </h1>{" "}
      <h3>
        Here you can comunicate with the deaf and dumbs with our translator.{" "}
      </h3>{" "}
      <div className={classes.inputContainer}>
        <Form.Control
          value={textInput}
          onChange={event => setTextInput(event.target.value)}
          type="text"
          placeholder="Enter text here or Click on the Mic button"
        />
      </div>{" "}
      <div className="my-3 d-flex justify-content-around align-items-center">
        <Button variant="primary" onClick={resetInput}>
          Reset{" "}
        </Button>
      </div>{" "}
      <div className="d-flex justify-content-around align-items-center">
        <span className="mr-2">
          <FontAwesomeIcon
            className={!isListening ? classes.micOn : classes.micOff}
            icon={!isListening ? faMicrophoneAlt : faMicrophoneAltSlash}
            size="2x"
            onClick={e => {
              if (!isListening) {
                setIsListening(true);
                listen();
              } else {
                setIsListening(false);
                stop();
              }
            }}
          />{" "}
        </span>{" "}
      </div>{" "}
      <div>Press the mic button to Record Your Voice</div>
      {listening && <div> Listening... </div>}{" "}
      {isLoading ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <p> You'll get your results below..</p>
      )}{" "}
    </div>
    <div className={classes.outputContainer}>
      <div className={classes.hover}>
    <div className={classes.center}>
    {showImages
        ? outputImages.map((imgURL, index) => {
          if (imgURL) {
            return (
              <img
                  key={index}
                  src={imgURL}
                  style={{
                    width: "50px",
                    height: "50px"
                  }}
                  className={classes.center}
                  alt="output img"
                />
            );
          } else {
            return <br key={index} />;
          }
        })
      : null}
      </div>{" "}
    </div></div>{" "}
  </div>
  );
};

export default SpeechToSign;