import { useEffect } from 'react';

export default function Custom400() {
    useEffect(() => {
        window.location.href = '/400.html';
    }, []);
    return (
    <div class="textContainer">
        <div class="headerContainer">
            <h1 class="headerText">400</h1>
        </div>
    </div>
    );
}