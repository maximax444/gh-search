import React from 'react';
function ReposEl({ rep }) {
    return (
        <div className='el'>
            <div className="img"><img src={rep.owner.avatar_url} alt="" />
                Автор: <a href={rep.owner.url}>{rep.owner.login}</a>
            </div>

            <div className="el__cont">
                <b>Репозиторий:</b><br /><br />
                Название: <a href={rep.url} target="_blank">{rep.name}</a> <br />
                Звёзды: {rep.stargazers_count}<br />
                Форки: {rep.forks_count}<br />
                Просмотров: {rep.watchers_count}<br /><br />
            </div>

        </div>
    );
}

export default ReposEl; 