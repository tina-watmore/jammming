import { ListItem } from "../ListItem/ListItem";
import './Playlist.less';

export const Playlist = () => {
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
        <div className="play-list">
            <h3 className="heading">Play list</h3>
            {
                songs.length > 0 ? (
                    <ul className="ul-reset">
                        {
                            songs.map((song) => (
                                <ListItem type="playlist" song={song} />
                            ))
                        }
                    </ul>
                ) : (
                    <p>There are no results</p>
                )
            }
            <div className="btn-container">
                <button type="button" className="styled-btn">Save to Spotify</button>
            </div>            
        </div>
    )
}