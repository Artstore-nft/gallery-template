export type Wallet = {
    chainId: string
    address: string
}

export type ProfileType = {
    image: string
    name: string
    bio: string
    links: Link[]
}

export type Link = {
    location: string
    display: string
    logo: string
}