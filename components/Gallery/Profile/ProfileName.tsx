// import hooks
import { useContext } from 'react'

import { ProfileContext } from './Profile'

type ProfileNamePreviewProps = {
    name: string
}

export default function ProfileName() {
    const { profile: { name } } = useContext(ProfileContext)

    // if name exists show name, else show nothing
    return name ? <ProfileNamePreview name={name} /> : null
}

function ProfileNamePreview({ name }: ProfileNamePreviewProps) {
    return <h1 className="profileNameContent">{name}</h1>
}