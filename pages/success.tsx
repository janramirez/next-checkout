import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useRouter } from "next/router";
import axios from "axios";
import constants from "../constants";

const success = () => {
    const router = useRouter();
    const { source } = router.query;

    useEffect( () => {
        if(source) {
            (
                async () => {
                    await axios.post(`${constants.endpoint}/orders/confirm`,{
                        source: source
                    });
                }
            )();
        }
    })
    return (
        <Wrapper>
            <div className="py-5 text-center">
                <h2>Payment successful</h2>
                <p className="lead">
                    Your purchase has been successfully completed!
                </p>
            </div>
        </Wrapper>
    );
};

export default success;
