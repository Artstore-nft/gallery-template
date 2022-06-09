import { useRouter } from 'next/router'

// import components
import Item from "../../../components/Gallery/Item/Item" 
import { ItemId, ItemType } from '../../../features/items/itemsSlice'

// import gallery config
import galleryConfig from '../../../gallery-config'

export default function ItemPage() {
    const items = galleryConfig.items.items as ItemType[]

    const router = useRouter()
    const itemId = router.query as ItemId
    
    const item = getItem(items, itemId)

    return <Item item={item} /> 
}

function getItem(items: ItemType[], { address, id }: ItemId): ItemType {
    const item = items.filter((item) => {
        if ((item.id.address == address) && (item.id.id == id)) {
            return true
        }
    })[0]

    return item
}
