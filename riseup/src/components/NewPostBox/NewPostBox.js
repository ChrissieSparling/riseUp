import './NewPostBox.css'

const NewPostBox = props => {
    if(props.titleContent && props.boxContent){
        document.getElementById('post-title-input').textContent = props.titleContent;
        document.getElementById('post-body-input').textContent = props.boxContent;
    }

    return (
        <>
            <div className="write">
                <form className="writeForm" >
                    <div className="writFormGroup">
                        <input className="writeInput writeText NPtitle" name={'title'} onChange={props.handleInputChange} type="text" placeholder="Give it a title..." id="post-title-input"></input>
                        <textarea name={'body'} placeholder="Tell your story..." type="text" onChange={props.handleInputChange} className="writeInput writeText" id="post-body-input"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewPostBox