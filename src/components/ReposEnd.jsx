import React from 'react';
function ReposEnd({ num }) {
    if (!num) {
        return (
            <div>

            </div>
        );
    }
    return (
        <div className='end'>
            Найдено репозиториев: {num}
        </div>
    );
}

export default ReposEnd;