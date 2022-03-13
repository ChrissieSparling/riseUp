import './UserHomeMenu.css'

const UserHomeMenu = ({username, setGetMenu, setGetForum, setGetToDos, setGetAffirmation, setGetStory, setGetMotivation, setGetPhilosophy, setGetQuotes, setGetInspirations }) => {

    const handleClick = e => {
        setGetMenu(false)
        if(e.target.id === 'forum'){
            setGetForum(true)
        } else if (e.target.id === 'todo'){
            setGetToDos(true)
        } else if (e.target.id === 'affirmations'){
            setGetAffirmation(true)
        } else if (e.target.id === 'motivations'){
            setGetMotivation(true)
        } else if (e.target.id === 'inspirations'){
            setGetInspirations(true)
        } else if (e.target.id === 'quotes'){
            setGetQuotes(true)
        } else if (e.target.id === 'philosophies'){
            setGetPhilosophy(true)
        } else {setGetStory(true)
    }

    return (
        <div>
            <div>
                <h1>Hello {username}</h1>
                <div className="user-home-btn-box">
                    <h2>What would you like to do?</h2>
                    <button className="btnUserHome" id="forum" onClick={setGetForum(true)}>Visit the Forums</button>
                    <button className="btnUserHome" id="affirmations" onClick={setGetAffirmation(true)}>Affirmations</button>
                    <button className="btnUserHome" id="motivations" onClick={setGetMotivation(true)}>Motivations</button>
                    <button className="btnUserHome" id="philosophies" onClick={setGetPhilosophy(true)}>Philosophies</button>
                    <button className="btnUserHome" id="quotes" onClick={setGetQuotes(true)}>Aspirations</button>
                    <button className="btnUserHome" id="inspirations" onClick={setGetInspirations(true)}>Inspiration</button>
                    <button className="btnUserHome" id="todo" onClick={setGetToDos(true)}>Visit ToDos</button>
                    <button className="btnUserHome" id="story" onClick={setGetStory(true)}>Read a Story</button>
                </div>
            </div>
        </div>
        );
    }
}

export default UserHomeMenu

