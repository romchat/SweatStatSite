import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Icon, Select, Row, Column } from 'antd';
import { Line } from 'react-chartjs-2';

const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;

const HeadText = styled.h1`
  display: block;
  color: yellow;
  text-align:center;
`

const SelectText = styled.text`
  display: inline;
  font-weight: bold;
  color: black;
`

const BlankSpace = styled.div`
  height: 50px;
  margin: 16px;
`

class TwitterStatPage extends React.Component {

  state = {
    collapse: false,
  };

  handleChange = (value) => {}


  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapse}
        >
          <BlankSpace />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu 
              key="sub1"
              title={<span><Icon type="global"/><span>การใช้ Social</span></span>}
            >
              <MenuItem key="1">
                <Icon type="facebook"/>
                <span>Facebook</span>
              </MenuItem>
              <MenuItem key="2">
                <Icon type="twitter"/>
                <span>Twitter</span>
              </MenuItem>
            </SubMenu>
            <MenuItem key="3">
              <Icon type="youtube"/>
              <span>Youtube</span>
            </MenuItem>
            <MenuItem key="4">
              <Icon type="facebook"/>
              <span>SweatStat</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
            <HeadText>Sweat Stat</HeadText>
          </Header>
          <Row style={{marginTop: 20, marginBottom: 10, marginLeft: 20}}>
            <SelectText>กรุณาเลือกการแสดงผล </SelectText>
            <Select defaultValue="simple" onChange={this.handleChange} style={{width: 200}}>
              <Option value="simple">Ranking (จัดอันดับ)</Option>
              <Option value="line">Line Chart (กราฟเส้น)</Option>
              <Option value="line">Column Chart (แผนภูมิแท่ง)</Option>
              <Option value="line">Table (ตาราง)</Option>
            </Select>
          </Row>
          <Row style={{marginTop: 10, marginBottom: 20, marginLeft: 20}}>
            <SelectText>เลือกรูปแบบการแสดงข้อมูล </SelectText>
            <Select defaultValue="moretoless" onChange={this.handleChange} style={{width: 180}}>
              <Option value="moretoless">จากมากไปน้อย</Option>
              <Option value="lesstomore">จากน้อยไปมาก</Option>
            </Select>
          </Row>
          <Content style={{ margin: '0px 20px', padding: 24, background: '#fff', height: '100%'}}>
            <Line/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default TwitterStatPage;