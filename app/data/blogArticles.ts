export interface BlogArticle {
  id: number
  title: string
  description: string
  image: string
  link: string
  date: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "5 Quick Breakfast Ideas in 10 Minutes",
    description:
      "How to make a delicious and healthy breakfast when you’re short on time — a selection of recipes to save your morning.",
    image: "/blog/breakfast.jpg",
    link: "/",
    date: "2025-09-15",
  },
  {
    id: 2,
    title: "Secrets to Perfect Pasta at Home",
    description:
      "Pasta may seem simple, but there are a few tricks that can make it restaurant-quality. Let’s share some cooking hacks!",
    image: "/blog/pasta.jpg",
    link: "/",
    date: "2025-10-02",
  },
  {
    id: 3,
    title: "How to Plan a Balanced Weekly Menu",
    description:
      "Meal planning is the key to healthy eating. Here’s an example of how to create a weekly menu that’s both tasty and nutritious.",
    image: "/blog/menu.jpg",
    link: "/",
    date: "2025-10-20",
  },
]
