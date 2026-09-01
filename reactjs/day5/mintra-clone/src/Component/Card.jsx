function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} height="210px" width="200px" />
      <h2>{props.title}</h2>
      <h1>{props.description}</h1>
      <h2>Shop now</h2>
    </div>
  );
}
export default Card;