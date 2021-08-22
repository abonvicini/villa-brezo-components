import "./CardContainer.css"

const CardContainer = ({children, styleCard}) => {
  return (
    <div className={styleCard}>
      {children}
    </div>
  )
}

export default CardContainer