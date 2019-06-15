import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, Cell, Checkbox, FormLayout, Link } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
 
function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group title="Items">
          <List>
            <Cell>Hello</Cell>
            <Cell>Lipkin</Cell>
            <Cell>и Нурлан</Cell>
          </List>
        </Group>
	      
        <FormLayout>
	        <Checkbox name="check1" checked={this.state.check1}>Я согласен , что я <Link>пидор</Link></Checkbox>

	        <Checkbox name="check2" checked={this.state.check2}>Я не согласен , что я <Link>пидор</Link></Checkbox>
          Pidor: {this.state.check1} <br />
          NePidor: {this.state.check2} <br />
	      </FormLayout>
      </Panel>
  </View>

  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));