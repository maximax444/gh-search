import React from 'react';
import ReposEl from './ReposEl';
function ReposList({ err, reps }) {
    if (err) {
        return (
            <h4>
                Ошибка поиска!
            </h4>
        )
    }
    if (!reps.length) {
        return (
            <h4>
                Не найдено!
            </h4>
        )
    }
    reps.slice(0, 10);
    return (
        <div>
            {reps.slice(0, 10).map(rep =>
                <ReposEl rep={rep} key={rep.id} />
            )}
        </div>
    );
}

export default ReposList;