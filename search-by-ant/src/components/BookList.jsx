import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './BookList.css'
import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Title } = Typography;

export class BookList extends Component {
    constructor(props) {
        super(props)
    
       
    }
    
    

    render() {
        return (
            <div>
                <Row>

                {
                    this.props.books.map(book=>(
                        <Col span={6} >
                            <div className="book">
                                <img src={book.cover} alt={book.title}/>
                                <Title level={3}>{book.title.length < 20 ? book.title:`${book.title.substring(0,22)}...`}</Title>
                                <p>Author: <span>{book.author}</span></p>
                            </div>
                        </Col>
                    ))
                }
                </Row>
            
            </div>
        )
    }
}

export default BookList
