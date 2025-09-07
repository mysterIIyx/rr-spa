import {useLocation, NavLink} from 'react-router-dom';


const SiteMap = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="breadcrumbs">
            <span>Jesteś tutaj:</span> <span>{' '}</span>
            <NavLink to="/">Home</NavLink>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <span key={to}> / {value}</span>
                ) : (
                    <span key={to}>
                        {' '} / <NavLink to={to}>{value}</NavLink>
                    </span>
                );
            })}
        </div>
    );
};

export default SiteMap;