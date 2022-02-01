import React from 'react';
import { useState } from 'react';
import whitelogo from '../assets/white-logo.png'

function Signup() {
    // const [baseImage, setBaseImage] = useState("");
    
    //converting image to base64. ty Sam Lama
    // const uploadImage = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertBase64(file);
    //     setBaseImage(baseImage);
    //     console.log(base64)
    // };
    
    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };

    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    //     };
    
    return (
        <div className='signup'>
            <div>
                <img style={{ maxWidth: 200 }} className="rounded m-5 mx-auto d-block" src={whitelogo}></img>
            </div>

            
            {/* form container */}
            <div style={{ backgroundColor: "#eed393" }} className="container rounded">
                <form >
                    <div className="rounded p-2 mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="p-2 mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <div className="p-2 mb-3">
                        <label className="form-label">Password Confirmation</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <button type="submit" className="m-3 btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
