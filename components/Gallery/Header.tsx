import { Router, withRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import galleryConfig from '../../gallery-config'

type HeaderProps = {
    router: Router
}

type HomeButtonImageContainerProps = {
    image: string
}

type HomeButtonImageBoxProps = {
    image: string
}

type HomeButtonImageProps = {
    image: string
}

function Header({ router }: HeaderProps) {
    const [showHomebutton, setShowHomeButton] = useState(false)

    useEffect(() => {
        //if user is not on home page, show home button
        (router.pathname != '/') && setShowHomeButton(true)
    })

    return ( 
        <div className="w-full h-[60px] px-[20px] py-[6px]">
            { showHomebutton && <HomeButton /> }
        </div>
    )
}
function HomeButton() {
    const { profile: { image } } = galleryConfig.settings
    let imageSource: string

    if (image) {
        imageSource = `/images/${image}`
    } else {
        imageSource = null
    }

    return (
        <Link href="/">
            <a className="w-fit h-full flex px-[5px] border-2 rounded-xl">
                {imageSource && <HomeButtonImageContainer image={imageSource} />}
                <HomeButtonTitle />
            </a>
        </Link>
    )
}
function HomeButtonImageContainer({ image }: HomeButtonImageContainerProps) {
    return(
        <div className="w-full h-full p-[3px]">
            <HomeButtonImageBox image={image} />
        </div>
    )
}
function HomeButtonImageBox({ image }: HomeButtonImageBoxProps) {
    return (
        <div className="relative h-full aspect-[1/1] rounded-full  overflow-hidden">
            <HomeButtonImage image={image} />
        </div>
    )
}
function HomeButtonImage({ image }: HomeButtonImageProps) {
    return <img src={image} className="w-full" />
}
function HomeButtonTitle() {
    return <h1 className="grid content-center text-lg px-[5px]">Gallery</h1>
}

export default withRouter(Header)
