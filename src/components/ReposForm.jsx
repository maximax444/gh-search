import React, { useState } from 'react';
function ReposForm({search}) {
    const [str, setStr] = useState("");
    function startNewSearch(e) {
        e.preventDefault();
        search(str);
    }
    return (
        <form>
            <input type="text" value={str} onChange={e => setStr(e.target.value)} placeholder='Поиск...' />
            <button onClick={startNewSearch}>Найти</button>
        </form>
    );
}

export default ReposForm;