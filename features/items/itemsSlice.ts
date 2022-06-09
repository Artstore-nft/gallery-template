export type ItemType = {
    amount: string
    block_number: string
    block_number_minted: string
    contract_type: string
    last_metadata_sync?: string
    last_token_uri_sync?: string
    name: string
    owner_of: string
    symbol: string
    synced_at: string
    token_address: string
    token_hash?: string
    token_id: string
    token_uri: string
    metadata?: ItemMetadata
    id?: ItemId
    image?: ItemImage
    info?: ItemInfo
}

export type ItemMetadata = {
    name: string
    description: string
    image: string
    [key: string]: any
}

export type ItemId = {
    address: string
    id: string
}

export type ItemImage = {
    source: string
    type: "image" | "video"
}

export type ItemInfo = {
    name: string
    description: string
    collection: string
    ownedBy: string
    attributes?: ItemAttribute[]
}

export type ItemAttribute = {
    [key: string]: any
}

export interface ItemsState {
    items: ItemType[]
    hiddenItems: ItemId[]
    pinnedItems: ItemId[]
    itemsLoaded: "FALSE" | "PENDING" | "TRUE"
    order: "newest" | "oldest"
}