import './Search.less';

export const Search = () => {
    return (
        <div className="search-container">
            <form type="submit">
                <input type="text" placeholder="Search..." />
                <button className="styled-btn">Search</button>
            </form>
        </div>
    );
}