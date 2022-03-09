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
                    <button id="forum" onClick={setGetForum(true)}>Visit the Forums</button>
                    <button id="todo" onClick={setGetToDos(true)}>Visit ToDos</button>
                    <button id="story" onClick={setGetStory(true)}>Read a Story</button>
                </div>
            </div>
        </div>
    );
}

export default UserHomeMenu

