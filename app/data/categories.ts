export interface Category {
    id: number,
    name: string,
    icon: string,
    slug: string
}

export const categories: Category[] = [
    { id: 1, name: 'Breakfast', icon: '/icons/breakfast.svg', slug: 'breakfast' },
    { id: 2, name: 'Lunch', icon: '/icons/lunch.svg', slug: 'lunch' },
    { id: 3, name: 'Dinner', icon: '/icons/dinner.svg', slug: 'dinner' },
    { id: 4, name: 'Desserts', icon: '/icons/dessert.svg', slug: 'desserts' },
    { id: 5, name: 'Snacks', icon: '/icons/snack.svg', slug: 'snacks' }
]