import { Link } from 'react-router-dom';


export const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found 404</h1>
            <Link to="/">Home</Link>
            <br/>
            <a href='/'>Home</a>
        </div>
    )
}