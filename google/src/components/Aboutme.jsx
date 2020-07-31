import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import avatar from './img/avatar.jpg'
import React, { Component } from 'react'

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
  
  class Aboutme extends Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <>
          <List
            dataSource={[
              {
                name: 'Dương Thị Ngọc',
              }
            ]}
            bordered
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <a onClick={this.showDrawer} key={`a-${item.id}`}>
                    Xem Profile
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar size="large" src= {avatar} />
                  }
                  title={<a href="#">{item.name}</a>}
                  description="Lạc quan vô đối, thương Hào hết lối:>"
                />
              </List.Item>
            )}
          />
          <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
              My Profile
            </p>
            <p className="site-description-item-profile-p">Về tôiiii >>>>>></p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Full Name" content="Dương Thị Ngọc" />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Account" content="ngocdt.sunrise@gmail.com" />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="City" content="Thái Nguyên" />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Country" content="Việt Nam" />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Birthday" content="15/09/1995" />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Website" content="https://khosach.herokuapp.com/" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Message"
                  content="Tôi luôn tin rằng ngày hôm nay là duy nhất."
                />
              </Col>
            </Row>
            <Divider />
            <p className="site-description-item-profile-p">Company</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Position" content="Brse" />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Responsibilities" content="Coding and Translating" />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Department" content="CodeFuture" />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Supervisor" content={<a>Boss Hào (with love)</a>} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Skills"
                  content="React / Javascript, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                />
              </Col>
            </Row>
            <Divider />
            <p className="site-description-item-profile-p">Contacts</p>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Email" content="ngocdt.sunrise@gmail.com" />
              </Col>
              <Col span={12}>
                <DescriptionItem title="Phone Number" content="+84 986810915" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Github"
                  content={
                    <a href="https://github.com/tamago1509">
                      https://github.com/tamago1509
                    </a>
                  }
                />
              </Col>
            </Row>
          </Drawer>
        </>
      );
    }
  }
  
  
  export default Aboutme
  