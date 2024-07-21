export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="totalRecipe">
      <h1>
        {title}
        <span></span>
        <img
          alt=""
          className="emoji"
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        />
      </h1>
      <ul>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="" className="recipeImg" />
    </div>
  );
}
