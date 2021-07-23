import React from 'react'
import image from '../assets/PM.jpg'

const Testimonials = () => {
    return (
        <div className="testimonals container-fluid ">
            <div>Testimonals:</div>
            <div className="row ml-2 pl-3">
                <div id="testimonal-box" className="col-5 m-3">
                    <div className="row">
                        <div className="col-2 p-2">
                            {/* image */}
                            <img id="testimonal-img" src={image} alt="Avatar" />
                        </div>
                        <div className="col-10 justify-content-left">
                            <div id="testimonal-name">Name</div>
                            <div id="testimonal-company">Post @ Company</div>
                            <div id="testimonal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae.</div>
                        </div>
                    </div>
                </div>
                <div id="testimonal-box" className="col-5 m-3">
                    <div className="row">
                        <div className="col-2 p-2">
                            {/* image */}
                            <img id="testimonal-img" src={image} alt="Avatar" />
                        </div>
                        <div className="col-10 justify-content-left">
                            <div id="testimonal-name">Name</div>
                            <div id="testimonal-company">Post @ Company</div>
                            <div id="testimonal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
