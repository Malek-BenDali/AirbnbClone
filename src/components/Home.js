import React from 'react'
import "../css/Home.css"
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="Home">
            <Banner />
            
            <div className="home__section">
                <Card
                    src="https://d3n14jmbdg5y6n.cloudfront.net/wp-content/uploads/2017/12/RYSE_CreatorRoom_King.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep"
                />
                <Card
                    src="https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg"
                    title="Entire homes"
                    description="Comfortable private places, with room for firends or family." 
                />
                <Card 
                    src="https://theringhotel.com/wp-content/uploads/2018/01/Slideshow-Special-Room02.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="130$/night"
                />
                <Card 
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in london"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="350$/night"
                />
                <Card 
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with greate amenities and fabolous shopping complex nearby"
                    price="244$/night"
                />
            </div>
        </div>
    )
}

export default Home

