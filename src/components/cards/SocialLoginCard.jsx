import React from "react";

const SocialLoginCard = ({img, name, href, color}) => {
    const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

    return (
        <div
            className="card"
            onClick={() => window.location = href}
        >
            <div>
                <p style={{
                    margin: 0,
                    textAlign: "left",
                    padding: "5px 0px 5px 10px"
                }}>
                    {NAME}
                </p>
            </div>
            <div
                style={{
                    minHeight: 100,
                    maxHeight: 150,
                    minWidth: 100,
                    maxWidth: 150,
                    background: `url("${img}") no-repeat center center / 50% ${color}`
                }}
            />
        </div>
    );
};

export default SocialLoginCard;