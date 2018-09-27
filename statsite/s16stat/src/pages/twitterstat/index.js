import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Icon, Select, Row, Table } from 'antd';
import { Line, Bar } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;
const { Column } = Table;

const Container = styled.div`
  min-height: 100vh;
`

const RowTable = styled(Table)`
  &.rowCursor {
    cursor: pointer;
  }
`

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

  constructor(props){
    super(props);
    this.state={
      collapse: false,
      chartType: 'ranking'
    }
  }

  changeType = (type) => {
    this.setState({chartType: type});
  }

  renderChart = () => {
    switch(this.state.chartType){
      case 'line': return <Line />
      case 'column': return <Bar />
      case 'ranking': return (
        <RowTable>
          <Column title="" />
          <Column title="ชื่อ" />
          <Column title="ยอดการติดตาม" />
          <Column title="การเปลี่ยนแปลง" />
        </RowTable>
      )
      default : return <Line />
    }
  }

  render() {
    const pathName = '/twStat';
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapse}
        >
          <BlankSpace />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathName]}>
            <SubMenu 
              key="sub1"
              title={<span><Icon type="global"/><span>การใช้ Social</span></span>}
            >
              <MenuItem key="/">
                <NavLink to ="/fbStat">
                  <Icon type="facebook"/>
                  <span>Facebook</span>
                </NavLink>
              </MenuItem>
              <MenuItem key="/twStat">
                <NavLink to ="/twStat">
                  <Icon type="twitter"/>
                  <span>Twitter</span>
                </NavLink>
              </MenuItem>
            </SubMenu>
            <MenuItem key="3">
              <NavLink to ="/ytStat">
                <Icon type="youtube"/>
                <span>Youtube</span>
              </NavLink>
            </MenuItem>
            <MenuItem key="4">
              <a href="https://www.facebook.com/sweatstat16/" target="_blank">
                <Icon type="facebook"/>
                <span>SweatStat</span>
              </a>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
            <HeadText>Sweat Stat</HeadText>
          </Header>
          <Container>
            <Row style={{marginTop: 20, marginBottom: 10, marginLeft: 20}}>
              <SelectText>กรุณาเลือกการแสดงผล </SelectText>
              <Select id="selectType" defaultValue={this.state.chartType} onChange={this.changeType} style={{width: 200}}>
                <Option value="ranking">Ranking (จัดอันดับ)</Option>
                <Option value="line">Line Chart (กราฟเส้น)</Option>
                <Option value="column">Column Chart (แผนภูมิแท่ง)</Option>
              </Select>
            </Row>
            <Content style={{ margin: '0px 20px', padding: 24, background: '#fff', height: '100%'}}>
              {this.renderChart()}
            </Content>
          </Container>
        </Layout>
      </Layout>
    );
  }
}

export default TwitterStatPage;