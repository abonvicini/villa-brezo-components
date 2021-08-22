import CardContainer from "../CardContainer"
import "./CardNews.css"

const CardNews = () =>{
  return(

    <CardContainer styleCard="card--news">
      <div className="card-news">
        
        <h1 className="card-title-news">
          Villa Brezo
        </h1>
        <p className="card-paragraph-news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, at sit quod voluptate perferendis quibusdam alias voluptates modi quo explicabo dolorem obcaecati rerum consectetur sapiente laborum earum neque ullam nam eligendi inventore dolor voluptatem eius, molestiae pariatur. Nobis quo optio fugit impedit ipsum repellendus quis! Consectetur soluta illo aliquam debitis.
        </p>
        <button className="card-button-news">
          <span>Take a tour!</span> 
        </button>
      </div>
    </CardContainer>

  )

}

export default CardNews;