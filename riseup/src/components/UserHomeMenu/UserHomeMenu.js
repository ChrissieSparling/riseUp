import './UserHomeMenu.css'

const UserHomeMenu = ({username, setGetMenu, setGetForum, setGetToDos, setGetStory}) => {

    const handleClick = e => {
        setGetMenu(false)
        if(e.target.id === 'forum'){
            setGetForum(true)
        } else if (e.target.id === 'todo'){
            setGetToDos(true)
        } else {setGetStory(true)}
    }

    return (
        <div>
            <div>
                <h1>Hello {username}</h1>
                <div className="user-home-btn-box">
                    <h2>What would you like to do?</h2>
                    <button className="btnUserHome" id="forum" onClick={setGetForum(true)}>Visit the Forums</button>
                    <button className="btnUserHome" id="todo" onClick={setGetToDos(true)}>Visit ToDos</button>
                    <button className="btnUserHome" id="story" onClick={setGetStory(true)}>Read a Story</button>
                </div>
            </div>
        </div>
    );
}

export default UserHomeMenu

