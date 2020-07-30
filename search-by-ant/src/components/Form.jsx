import React from 'react'
import 'antd/dist/antd.css';
import './Form.css'
import { Button } from 'antd';
import { Form, Input} from 'antd';
import { Row, Col } from 'antd';

const { Search } = Input;

function SearchForm(props) {
    return (
        <div className="form">
            
                <form name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onSubmit={props.getBook}>
                    <Row justify="start">
                        <Col span={18}>
                            <Form.Item
                                label="BookName"
                                name="bookName" >
                            <Input />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Search
                            </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    
                </form>
                
            

        </div>
        
    )
}

export default SearchForm
