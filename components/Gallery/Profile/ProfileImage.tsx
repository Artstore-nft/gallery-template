import { useContext } from 'react'
import { ProfileContext } from './Profile'

type ProfileImagePreviewProps = {
    image: string
}

type ProfileImageBoxProps = {
    image: string
}

type ImageProps = {
    image: string
}

export default function ProfileImage() {
    const { profile: { image } } = useContext(ProfileContext)
    let imageSource: string

    if(image) {
        imageSource = `/images/${image}`
    } else {
        imageSource = null
    }

    return imageSource ? <ProfileImagePreview image={imageSource} /> : null
}

function ProfileImagePreview({ image }: ProfileImagePreviewProps) {
    return(
        <div className="container px-[16%]">
            <ProfileImageBox image={image} />
        </div>
    )
}
function ProfileImageBox({ image }: ProfileImageBoxProps) {
    return (
        <div className="relative min-w-[100px] aspect-[1/1] rounded-full  overflow-hidden">
            <Image image={image} />
        </div>
    )
}
function Image({ image }: ImageProps) {
    return <img src={image} className="w-full" />
}