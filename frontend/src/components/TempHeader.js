import React from 'react'
import { Link } from 'react-router-dom'

const TempHeader = () => {
    return (
        <div>
            <Link to='/'> home </Link>
            <Link to='/evento/1'> evento </Link>
            <Link to='/login'> login </Link>
            <Link to='/admin'> admin </Link>
            <Link to='/user'> user </Link>
            <Link to='/404'> 404 </Link>
        </div>
    )
}

export default TempHeader
