import CategoryItem from '../category-item/Category-item.component'
import './directory.styles.scss'

const categories = [
    {
      "id": 1,
      "title": "hats",
      "subTitle": "Shop Now",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "subTitle": "Shop Now",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "subTitle": "Shop Now",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "subTitle": "Shop Now",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "subTitle": "Shop Now",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

const Directory = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            )
            )}
        </div>
    )
}

export default Directory