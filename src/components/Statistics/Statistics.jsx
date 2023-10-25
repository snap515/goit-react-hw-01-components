export const Statistics = props =>
{
  console.log(props)
  return (<section className="statistics">
    {props.title && <h2 className="title">{props.title}</h2> }

    <ul className="stat-list">
      {props.data.map(elem =>
          (<li key={elem.id} className="item">
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}</span>
          </li>))}
          
  </ul>
</section>)
}