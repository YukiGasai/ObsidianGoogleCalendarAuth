import { useEffect } from 'react';

export default function Custom404() {
    useEffect(() => {
        window.location.href = '/404.html';
    }, []);
    return (
    <div className="textContainer">
        <div className="headerContainer">
            <h1 className="headerText">404</h1>
        </div>
    </div>
    );
}