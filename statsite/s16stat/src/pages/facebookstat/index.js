import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Icon, Select, Row, Table } from 'antd';
import { Line, Bar } from 'react-chartjs-2';

const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;
const { Column } = Table
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

class FacebookStatPage extends React.Component {

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
          <Column title="ยอดไลค์เพจ" />
          <Column title="การเปลี่ยนแปลง" />
        </RowTable>
      )
      default : return <Line />
    }
  }

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
            <Select id="selectType" defaultValue={this.state.chartType} onChange={this.changeType} style={{width: 200}}>
              <Option value="ranking">Ranking (จัดอันดับ)</Option>
              <Option value="line">Line Chart (กราฟเส้น)</Option>
              <Option value="column">Column Chart (แผนภูมิแท่ง)</Option>
            </Select>
          </Row>
          <Content style={{ margin: '0px 20px', padding: 24, background: '#fff', height: '100%'}}>
            {this.renderChart()}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default FacebookStatPage;