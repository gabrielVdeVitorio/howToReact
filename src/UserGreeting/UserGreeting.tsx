import './UserGreeting.css'

interface UserGreetingProps
{
    isLoggedIn?: boolean,
    username: string
}

function UserGreeting( {isLoggedIn = false, username} : UserGreetingProps)
{
    if (isLoggedIn)
    {
        return <h2 className="h2--welcome-message h2--message">Welcome {username}</h2>
    }
    else
    {
        return <h2 className='h2--login-message h2--message'>Please log in to continue</h2>
    }
}

export default UserGreeting