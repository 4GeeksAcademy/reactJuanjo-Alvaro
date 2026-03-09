import React from "react";

const Jumbotron = () => {
    return (
        <div className="container my-5">
            <div className="p-5 mb-4 bg-custom-gray text-dark rounded-3 shadow-lg text-start">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">¡A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas dolore distinctio itaque dolorum enim quasi impedit harum maxime, dolores perferendis praesentium eum soluta, quam similique recusandae molestiae molestias reprehenderit.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Call to action!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;