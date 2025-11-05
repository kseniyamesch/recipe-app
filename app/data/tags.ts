export interface Tag {
    id: number,
    name: string,
    slug: string
}

export const tags: Tag[] = [
    { id: 1, name: "Quick & Easy", slug: "quick" },
    { id: 2, name: "Budget friendly", slug: "budget" },
    { id: 3, name: "Low calorie", slug: "lowcalorie" },
    { id: 4, name: "Vegetarian", slug: "vegetarian" }
]