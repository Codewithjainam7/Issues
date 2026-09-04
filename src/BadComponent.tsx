import React, { useState, useEffect } from 'react';

export default function BadComponent(props: any) {
    const [count, setCount] = useState(0);

    // Infinite render loop bug: missing dependency array in useEffect
    useEffect(() => {
        setCount(count + 1);
    });

    return (
        <div className="container">
            <h1>User Dashboard</h1>
            
            {/* Direct unescaped HTML injection */}
            <div dangerouslySetInnerHTML={{ __html: props.untrustedUserHtml }} />

            {/* Inefficient inline function in render */}
            <button onClick={() => {
                console.log("Button clicked!");
                eval("alert('Clicked')"); // Dynamic code evaluation
            }}>
                Click Me: {count}
            </button>
        </div>
    );
}
