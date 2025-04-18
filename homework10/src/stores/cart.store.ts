import { defineStore } from 'pinia'
import { ref,computed } from 'vue'
import type { Book } from '../type'

interface CartItem {
    book: Book
    count: number
}

type Cart = Record<Book['id'], CartItem>

export const useCartStore = defineStore('cart', () => {

    const cart = ref<Cart>({})


    const cartBooks=computed<Array<Book>>(() => {
        return Object.values(cart.value).map(cartItem=>cartItem.book)
        
    })
 

    const cartItemsCount = computed<number>(() => {
        return Object.values(cart.value).map(cartItem => cartItem.count).reduce( (currentSum, currentNumber)=>{
            return currentSum+currentNumber},0)
        })

        


    function addToCart(book: Book): void {
        
        
        if (cart.value[book.id] ) {
            cart.value[book.id].count++
        } else {
            cart.value[book.id] = { book: book, count: 1 }
   
    }
    
}
   


    function deleteFromCart(book: Book): void {
        if (cart.value[book.id].count!=0){
         cart.value[book.id].count--}
        }
    

    function resetCart(): void {
        cart.value = {}
    }
    
     const getCount = (bookId: number): number => {
         return cart.value[bookId]?.count || 0; 
       };

   
    return {
        cart,
        addToCart,
        deleteFromCart,
        resetCart,
        cartBooks,
        cartItemsCount,
        getCount
       
    }
})