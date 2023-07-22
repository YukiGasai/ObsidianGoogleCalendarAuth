import { useEffect } from 'react';

export default function Custom404() {
    useEffect(() => {
        window.location.href = '/404.html';
    }, []);
    return (
    <div class="textContainer">
        <div class="headerContainer">
            <h1 class="headerText">404</h1>
        </div>
    </div>
    );
}