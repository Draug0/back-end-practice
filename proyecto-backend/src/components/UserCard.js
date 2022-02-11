const UserCard = ({user}) => {
    return (
        <div className='media box is-align-items-center'>
            <figure className='media-left'>
                <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
            </figure>
            <div className='media-content'>
                <div className='content'>
                    <p>
                        <strong>Nombre:</strong> <em>{user.name}</em>
                    </p>
                    <p>
                        <strong>E-mail:</strong> <em>{user.email}</em>
                    </p>
                    <p>
                        <strong>Phone:</strong> <em>{user.phone}</em>
                    </p>
                    <p>
                        <strong>City:</strong> <em>{user.address.city}</em>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default UserCard