import React from 'react';
import { Card } from 'antd';
import './Home.css'



const { Meta } = Card;
const blogs = [
    {
        title:"Mặc gì hôm nay?",
        cover: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:"Xinh đẹp mỗi ngày"
    },
    {
        title:"Ăn gì hôm nay?",
        cover: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        description:"Ăn ngon mỗi ngày"
    },
    {
        title:"Trồng gì hôm nay?",
        cover: "https://r-cf.bstatic.com/images/hotel/max1024x768/141/141752738.jpg",
        description:"Yêu cây mỗi ngày"
    },
    {
        title:"Chơi gì hôm nay?",
        cover: "https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/7/5CxUVucYSyuZyHtY47f56g-37.jpeg",
        description:"Tận hưởng mỗi ngày"
    }

]

function Home() {
    return (
        <div className="home">
            {
                blogs.map((blog, index) =>(
                    <Card
                        className="blog-card"
                        key={index}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={blog.cover} />}
                    >
                        <Meta title={blog.title} description={blog.description} />
                    </Card>


                ))   
            }
            
        </div>
    )
}

export default Home
