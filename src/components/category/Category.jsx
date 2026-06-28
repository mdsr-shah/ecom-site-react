function CategoryDirectory({ title, categories }) {
  return (
    <nav className="category-directory">

      <h2>{title}</h2>

      <ul className="category-directory__list">

        {categories.map((category) => (

          <li key={category.name}>

            <a href={category.link}>

              <img
                src={category.image}
                alt={category.name}
              />

              <span>

                {category.name}

              </span>

            </a>

          </li>

        ))}

      </ul>

      <button>

        See all categories

      </button>

    </nav>
  );
}

export default CategoryDirectory;