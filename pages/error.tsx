import React from "react";
import Wrapper from "../components/Wrapper";

const Error = () => {
    return (
        <Wrapper>
            <div className="py-5 text-center">
                <h2>Something went wrong</h2>
                <p className="lead">
                    Could not process your purchase at this time. Please try again.
                </p>
            </div>
        </Wrapper>
    );
};

export default Error;
