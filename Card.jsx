import React from 'react'

function Card({ props }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card