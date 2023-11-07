import { StatElement, StatSection, StatList, StatLabel, StatPercent } from "./Statistics.styled"

export const Statistics = props =>
{
  return (<StatSection className="statistics">
    {props.title && <h2 className="title">{props.title}</h2> }

    <StatList className="stat-list">
      {props.data.map(elem =>
          (<StatElement key={elem.id} className="item">
            <StatLabel className="label">{elem.label} </StatLabel>
            <StatPercent className="percentage">{elem.percentage}%</StatPercent>
          </StatElement>))}
          
  </StatList>
</StatSection>)
}