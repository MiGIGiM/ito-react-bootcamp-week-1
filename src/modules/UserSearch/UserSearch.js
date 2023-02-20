
const UserSearch = ({ setValue }) => {

    const onSubmit = async (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries());

        setValue(formJson.github_username)
    }

    return (
        <div>  
            <h1>Get GitHub username</h1>
            <form onSubmit={(e) => onSubmit(e)} className="search-form">
                <div className="search">
                    <input id="search_input" type="text" name="github_username" placeholder="Enter a username" />
                    <button id="submit_btn" type='submit'></button>
                </div>
            </form>
        </div>
    )
}

export default UserSearch