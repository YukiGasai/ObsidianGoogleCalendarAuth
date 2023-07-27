import { useEffect } from 'react';

export default function Custom400() {
    useEffect(() => {
        window.location.href = '/400.html';
    }, []);
    return (
    <div className="textContainer">
        <div className="headerContainer">
            <h1 className="headerText">400</h1>
        </div>
    </div>
    );
}