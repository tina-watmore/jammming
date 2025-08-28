import { ListItem } from "../ListItem/ListItem";
import './ResultsList.less';

export const ResultsList = () => {
    const songs = [
        {
            id: 1,
            title: "It's all coming back to me now",
            artist: "Celine Dion"            
        },
        {
            id: 2,
            title: "Adventure of a Lifetime",
            artist: "Coldplay"            
        },
        {
            id: 3,
            title: "Fly Away",
            artist: "Lenny Kravitz"            
        },
        {
            id: 4,
            title: "Genesis",
            artist: "Justice"            
        },
        {
            id: 5,
            title: "Another one bites the dust",
            artist: "Queen"            
        },                               
    ]
    return (
        <div className="results-list">
            <h3 className="heading">Results</h3>
            {
                songs.length > 0 ? (
                    <ul className="ul-reset">
                        {
                            songs.map((song) => (
                                <ListItem type="results" song={song} />
                            ))
                        }
                    </ul>
                ) : (
                    <p>There are no results</p>
                )
            }

        </div>
    )
}