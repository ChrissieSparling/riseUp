// import './UserHomeMenu.css'

const UserHomeMenu = ({username, setGetMenu, setGetForum, setGetToDos, setGetAffirmation, setGetStory, setGetMotivation, setGetPhilosophy, setGetQuotes, setGetInspirations }) => {

    const handleClick = e => {
        setGetMenu(false)
        if(e.target.id === 'forum'){
            setGetForum(true)
        } else if (e.target.id === 'todo'){
            setGetToDos(true)
        } else if (e.target.id === 'affirmation'){
            setGetAffirmation(true)
        } else if (e.target.id === 'motivation'){
            setGetMotivation(true)
        } else if (e.target.id === 'inspiration'){
            setGetInspirations(true)
        } else if (e.target.id === 'quote'){
            setGetQuotes(true)
        } else if (e.target.id === 'philosophy'){
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
                    <button className="btnUserHome" id="affirmation" onClick={setGetAffirmation(true)}>Affirmations</button>
                    <button className="btnUserHome" id="motivation" onClick={setGetMotivation(true)}>Motivations</button>
                    <button className="btnUserHome" id="philosophy" onClick={setGetPhilosophy(true)}>Philosophies</button>
                    <button className="btnUserHome" id="quote" onClick={setGetQuotes(true)}>Aspirations</button>
                    <button className="btnUserHome" id="inspiration" onClick={setGetInspirations(true)}>Inspiration</button>
                    <button className="btnUserHome" id="todo" onClick={setGetToDos(true)}>Visit ToDos</button>
                    <button className="btnUserHome" id="story" onClick={setGetStory(true)}>Read a Story</button>
                </div>
            </div>
        </div>
        );
    }
}

export default UserHomeMenu

