import React from 'react'

export default function component1(props) {
    return (
        <div>


            Component {props.match.params.id}
            {console.log(props)}


        </div>
    )
}
