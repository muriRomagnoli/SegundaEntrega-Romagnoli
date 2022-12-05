import { doc, getDoc, getDocs, addDoc, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '.'


export const getItems = (categoryId) => {
    return new Promise((res, rej) => {
        const collectionRef = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) : collection(db, 'items')

        getDocs(collectionRef).then(response => {
            const filteredItems = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            res(filteredItems)
        }).catch(err => {
            rej(err)
        })
    })
}

export const getItemsById = (itemId) => {
    return new Promise((res, rej) => {
        const docRef = doc(db, 'items', itemId)

        getDoc(docRef).then(doc => {
            const data = doc.data()
            const itemAdapted = { id: doc.id, ...data }
            res(itemAdapted)
        }).catch(err => {
            rej(err)
        })
    })
}


export const createOrderInDb = async (cart, total, buyer) => {
    const ids = cart.map(item => item.id)
    const itemsRef = collection(db, 'items')
    const itemsDb = await getDocs(query(itemsRef, where(documentId(), 'in', ids)))
    const { docs } = itemsDb

    return new Promise((res, rej) => {
        const objOrder = {
            buyer,
            items: cart,
            total
        }

        const batch = writeBatch(db)
        const itemsWithoutStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock
            const itemInCart = cart.find(item => item.id === doc.id)
            const itemQuantity = itemInCart?.quantity

            stockDb >= itemQuantity ? batch.update(doc.ref, { stock: stockDb - itemQuantity }) : itemsWithoutStock.push({ id: doc.id, ...dataDoc })
        })

        if (itemsWithoutStock.length === 0) {
            batch.commit()
            const orderRef = collection(db, 'orders')
            res(addDoc(orderRef, objOrder))
        } else {
            rej()
        }
    })

}