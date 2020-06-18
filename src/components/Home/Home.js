import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import sign_to_speech_icon from "../../assets/sign-to-speech.svg";
import voice_to_sign_icon from "../../assets/voice_to_sign.svg";
import custom_sign_icon from "../../assets/custom_sign.svg";

const Home = (props) => {
	return (
		<div style={{ backgroundColor: "lightcyan" }}>
			<section className="text-500 bg-900 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="text-center mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font text mb-4">
							Welcome to <strong>Smart Talking Gestures!</strong>
						</h1>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
							We take your <strong>GESTURES</strong> and convert those into{" "}
							<strong>VOICE</strong> and vise-versa...you can also create your{" "}
							<strong>OWN</strong> gestures!!!
						</p>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
						</div>
					</div>

					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="p-2 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
							<div className="p-4 border-2 border-gray-600 rounded-md">
								<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
									<img
										src={sign_to_speech_icon}
										className="w-12 h-12"
										alt=""
									></img>
								</div>
								<div className="flex-grow">
									<h2 className="title-font text-xl font-medium text-gray-900 mb-3">
										Sign to Speech
									</h2>
									<p className="leading-relaxed text-base">
										Convert your ASL/ISL gestures to voice with us
									</p>
									<div className={classes.navLink}>
										<NavLink to="/sign-to-speech" className={classes.whiteText}>
											Signs to Speech
										</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div className="p-2 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
							<div className="p-4 border-2 border-gray-600 rounded-md">
								<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
									<img
										src={voice_to_sign_icon}
										className="w-12 h-12"
										alt=""
									></img>
								</div>
								<div className="flex-grow">
									<h2 className="title-font text-xl font-medium text-gray-900 mb-3">
										Voice to Sign
									</h2>
									<p className="leading-relaxed text-base">
										Convert your voice to ASL/ISL language with us
									</p>
									<div className={classes.navLink}>
										<NavLink to="/speech-to-sign" className={classes.whiteText}>
											Speech to Signs
										</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div className="p-2 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
							<div className="p-4 border-2 border-gray-600 rounded-md">
								<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
									<img
										src={custom_sign_icon}
										className="w-12 h-12"
										alt=""
									></img>
								</div>
								<div className="flex-grow">
									<h2 className="title-font text-xl font-medium text-gray-900 mb-3">
										Custom Gestures
									</h2>
									<p className="leading-relaxed text-base">
										Make your own gestures, create your own sign language with
										us
									</p>
									<div className={classes.navLink}>
										<NavLink to="/custom-signs" className={classes.whiteText}>
											Custom Signs
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
