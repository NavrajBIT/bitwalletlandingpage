import React from 'react'
import image from "../../Assets/main.png"
import image2 from "../../Assets/wallet-illo.svg"
import image3 from "../../Assets/Explore-illo.png"
import image4 from "../../Assets/Browse-illo.png"
import qrcode from "../../Assets/qrcode.png"
import qrcode2 from "../../Assets/qrcode2.png"
import apple from "../../Assets/apple.png";
import chrome from "../../Assets/chrome.svg";
import android from "../../Assets/android.png";
import qrcode3 from "../../Assets/appleqr.png";
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
const body = () => {


    const handleClickScroll = () => {
        const element = document.getElementById('main_content2');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const textAnimation = {
        offscreen: { x: 100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 3
            }
        }
    }

    const imageAnimation = {
        offscreen: { x: 100 },
        offscreen2: { x: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }

        },
        onscreen2: {
            x: 100,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }

        }
    };
    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={
                {
                    once: true,
                    amount: 0.5
                }
            }
            transition={{ staggerChildren: 0.5 }}
            className="md:w-[80vw] mx-auto mt-40">
            <div className="main_content">
                <div
                    className='flex flex-col md:flex-row  items-center w-[80vw] mx-auto'>
                    <motion.div
                        variants={textAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[40vw] order-2 md:order-1">
                        <div className="content">
                            <h1 className="text-white text-2xl font-bold text-center md:text-left  md:tracking-[3px] md:text-[2.5rem] md:leading-[3.4rem] md:font-[1000]">
                                A crypto wallet & <br /> gateway to <br /> blockchain apps
                            </h1>
                            <p className="text-white mt-3 md:text-lg text-sm text-center md:text-left">
                                Start exploring blockchain applications in seconds. Trusted by over 30 million users worldwide.
                            </p>
                        </div>
                        <div
                            className="button text-center md:text-left">
                            <button
                                type="button"
                                onClick={handleClickScroll}
                                className="text-white w-full md:w-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">Download Now</button>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[40vw] order-1 md:order-2">
                        <div className="image md:w-[40vw] mx-auto">
                            <img src={image} alt="" className="w-60 mx-auto" />
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col md:flex-row  items-center w-[80vw] mx-auto mt-20'>
                    <motion.div
                        variants={textAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[40vw] order-2 md:order-1">
                        <div className="content">
                            <h1 className="text-white text-2xl font-bold text-center md:text-left ">
                                Buy, store, send and swap tokens
                            </h1>
                            <p className="text-white mt-3 md:text-[18px] text-sm text-center md:text-left">
                                Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange—everything you need to <br /> manage your digital assets.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[40vw] order-1 md:order-2">
                        <div className="image md:w-[40vw] px-4">
                            <img src={image2} alt="" className="md:w-[35vw]" />
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col md:flex-row  items-center w-[80vw] mx-auto mt-20'>
                    <motion.div
                        variants={textAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[50%] order-2 md:order-2">
                        <div className="content">
                            <h1 className="text-white text-2xl font-bold text-center md:text-left  md:tracking-[3px] md:text-[2.5rem] md:leading-[3.4rem] md:font-[1000]">
                                Own your data
                            </h1>
                            <p className="text-white mt-3 md:text-lg text-sm text-center md:text-left">
                                MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[50%] order-1 md:order-1 mx-auto">
                        <div className="image">
                            <img src={image3} alt="" className="md:w-[35vw]" />
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col md:flex-row  items-center w-[80vw] mx-auto mt-20'>
                    <motion.div
                        variants={textAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[50%] order-2 md:order-2">
                        <div className="content">
                            <h1 className="text-white text-2xl font-bold text-center md:text-left  md:tracking-[3px] md:text-[2.5rem] md:leading-[3.4rem] md:font-[1000]">
                                Own your data
                            </h1>
                            <p className="text-white mt-3 md:text-lg text-sm text-center md:text-left">
                                MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        className="md:w-[50%] order-1 md:order-2 mx-auto">
                        <div className="image">
                            <img src={image4} alt="" className="md:w-[35vw]" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div id='main_content2' className="sm:w-[80vw] main_content2 mt-28 border shadow-2xl border-purple-900 rounded-xl bg-gray-700">
                <h1 className="text-center text-white text-4xl font-bold py-3">Download BitWallet</h1>
                <div
                    className='px-4 py-10 flex md:flex-row flex-col  md:justify-between items-center md:w-[80vw] mx-auto mt-16'>
                    <motion.div
                        whileHover={{
                            scale: 1.08
                        }}
                        className="md:max-w-[18rem] mt-8 md:mt-0 max-w-sm bg-white  border-gray-200 rounded-lg shadow-2xl shadow-gray-900 dark:bg-gray-800 dark:border-gray-700">
                        <p>
                            <img className="rounded-t-lg px-4 py-4 w-fit" src={qrcode} alt="img" />
                        </p>
                        <div className="p-5">
                            <div>
                                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Download Chrome extension for Desktop</p>
                            </div>
                            <Link to="https://chrome.google.com/webstore/detail/bit-wallet/ddphokhghjkekfdoddpeffdpojdofcan" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Download For
                                <img src={chrome} alt="" className="w-8 h-8 ml-2 -mr-1" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            scale: 1.08
                        }}
                        className="md:max-w-[18rem] mt-8 sm:mt-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-900 dark:bg-gray-800 dark:border-gray-700">
                        <p>
                            <img className="rounded-t-lg px-4 py-4 w-fit" src={qrcode3} alt="img" />
                        </p>
                        <div className="p-5">
                            <div>
                                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Download Ios application</p>
                            </div>
                            <Link to="https://apps.apple.com/us/app/be-imagine-technology-wallet/id6443855034" className="inline-flex items-center px-3 py-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Download For
                                <img src={apple} className="w-8 h-8 ml-2 -mr-1" />
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.08
                        }}
                        className="md:max-w-[18rem] mt-8 sm:mt-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-900 dark:bg-gray-800 dark:border-gray-700">
                        <p>
                            <img className="rounded-t-lg px-4 py-4 w-fit" src={qrcode2} alt="img" />
                        </p>
                        <div className="p-5">
                            <div>
                                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Download Android Application</p>
                            </div>
                            <Link to="https://play.google.com/store/apps/details?id=beimagine.tech" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Download For
                                <img src={android} className="w-8 h-8 ml-2 -mr-1" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
            <div className="main_content3">
                <div className='flex flex-col items-center md:w-[80vw] mx-auto mt-28'>
                    <div className="order-1">
                        <div className="content">
                            <h1 className="text-white text-2xl font-bold text-center">
                                What is BITWALLET ?
                            </h1>
                        </div>
                    </div>
                    <div className="order-2">
                        <div className="video md:mt-24 mt-10">
                            <iframe className='w-[100vw] h-[30vh] md:w-[80vw] md:h-[80vh]' src="https://www.youtube.com/embed/YDsqedqmF84" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default body;