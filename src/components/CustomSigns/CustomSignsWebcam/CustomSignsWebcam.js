import React, { useEffect, useRef, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import cssClasses from './CustomSignsWebcam.module.css';

let webcam = null, net = null;
const classifier = knnClassifier.create();

const CustomSignsWebcam = props => {
    const { classes, setClasses } = props;
    const [prediction, setPrediction] = useState(null);
    const webcamElement = useRef();
    const classContainer = useRef();
    const consoleRef = useRef();
    const classInputRef = useRef();

    const addClass = () => {
        setClasses(prevClasses => [...prevClasses, classInputRef.current.value]);
    }

    const addExample = async classId => {
        console.log('add example ' + classId);
        const img = await webcam.capture();
        const activation = net.infer(img, 'conv_preds');
        classifier.addExample(activation, classId);
        console.log(classifier.getClassifierDataset());
        img.dispose();
    };

    useEffect(() => {
        async function init() {
            console.log('Loading mobilenet..');
            net = await mobilenet.load();
            console.log('Successfully loaded model');
            webcam = await tf.data.webcam(webcamElement.current);

            while (true) {
                if (classifier.getNumClasses() > 0) {
                    const img = await webcam.capture();
                    const activation = net.infer(img, 'conv_preds');
                    const result = await classifier.predictClass(activation);
                    setPrediction(result.classIndex);
                    img.dispose();
                }
                await tf.nextFrame();
            }
        }
        init();
    }, []);
    const myDefineClassifierModel = async (myPassedClassifier) => {
        let myLayerList = []
         myLayerList[0] = []    // for the input layer name as a string
         myLayerList[1] = []    // for the input layer
         myLayerList[2] = []    // for the concatenate layer name as a string
         myLayerList[3] = []    // for the concatenate layer

        let myMaxClasses = myPassedClassifier.getNumClasses()                                                                                      
        //console.log('myPassedClassifier.getNumClasses()')
        //console.log(myMaxClasses)
        for (let myClassifierLoop = 0; myClassifierLoop < myMaxClasses; myClassifierLoop++ ){      // need number of classifiers 
          //console.log(myPassedClassifier.getClassifierDataset()[myClassifierLoop])                                                                                                                                                           
          //console.log('shape first layer =')                                                                                                                                                           
          //console.log(myPassedClassifier.getClassifierDataset()[myClassifierLoop].shape[0])

            myLayerList[0][myClassifierLoop] = 'myInput'  + myClassifierLoop                  // input name as a string
            console.log('define input for'+myClassifierLoop)                                                                                       
            myLayerList[1][myClassifierLoop] = tf.input({shape: myPassedClassifier.getClassifierDataset()[myClassifierLoop].shape[0], name: myLayerList[1][myClassifierLoop]});      // Define input layer
            console.log('define dense for: '+myClassifierLoop)
            myLayerList[2][myClassifierLoop] = 'myInput'+myClassifierLoop+'Dense1'    // concatenate as a string                                                                                  
            myLayerList[3][myClassifierLoop] = tf.layers.dense({units: 1024, name: classes[myClassifierLoop]}).apply(myLayerList[1][myClassifierLoop]);             //Define concatenate layer 
        }
        // what the layers used to look like before the loop                                                                                            
    //const myInput2 = tf.input({shape: [1], name: 'myInput2'});
    //const myInput2Dense1 = tf.layers.dense({units: 20, name: 'myInput2Dense1'}).apply(myInput2);
    console.log('Concatenate Paths')                                                                                                                                                                                          
    const myConcatenate1 = tf.layers.concatenate({axis : 1, name: 'myConcatenate1'}).apply(myLayerList[3]);    // send the entire list of dense                                                                                           
    const myConcatenate1Dense4 = tf.layers.dense({units: 1, name: 'myConcatenate1Dense4'}).apply(myConcatenate1)                                                                                              
    
    console.log('Define Model');                                                                                                                                                                                    
    const myClassifierModel = tf.model({inputs: myLayerList[1], outputs: myConcatenate1Dense4});    // This would be a global model. With list of inputs as an array                                                                                                                                                                                         
    myClassifierModel.summary()
    console.log('myClassifierModel.layers[myMaxClasses]')     
    console.log(myClassifierModel.layers[myMaxClasses])
    myPassedClassifier.getClassifierDataset()[0].print(true);

    for (let myClassifierLoop = 0; myClassifierLoop < myMaxClasses; myClassifierLoop++ ){   // since the first layers are inputs must add maxClasses   
        const myInWeight = await myPassedClassifier.getClassifierDataset()[myClassifierLoop]                                                                                        
        myClassifierModel.layers[myClassifierLoop + myMaxClasses].setWeights([myInWeight, tf.ones([1024])]);       //model.layers[0].setWeights([tf.ones([10, 2]), tf.ones([2])]);                                                                                        
    }                                                                                 
    return  myClassifierModel;                                                                               
}         


    const saveModelBtn = async () =>{
        const myClassifierModel2 = await myDefineClassifierModel(classifier)         // pass global classifier                                                                                                                                                                                                                                                                      
        myClassifierModel2.save('downloads://myClassifierModel01')  
        myClassifierModel2.summary(null,null,x => {document.getElementById('myDivSummary').innerHTML += x + '<br>'}); 
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div ref={classContainer} className="p-3">
                <div ref={consoleRef}>{prediction === undefined ? null : classes[prediction]}</div>
                {classes.length > 0 ? classes.map((name, index) => {
                    return (
                    <button
                        id={`class-${index}`}
                        onClick={e => addExample(index)}
                        key={index}
                        className={cssClasses.addBtn}>
                        Add {name}
                    </button>
                    );
                }) : null}
            </div>
            <div className="p-3">
                <input type="text" ref={classInputRef}/>
                <button id="add-class" onClick={addClass}>Add Class</button>
            </div>
            <video id="webcam" width="224" height="224" ref={webcamElement}></video>
            <button className={cssClasses.saveBtn} onClick={saveModelBtn}>Save</button>
        </div>
    )
}

export default CustomSignsWebcam;
