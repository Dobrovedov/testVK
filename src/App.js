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
	        <Checkbox>Я согласен , что я <Link>пидор</Link></Checkbox>
	        <Checkbox>Я не согласен , что я <Link>пидор</Link></Checkbox>
	      </FormLayout>
      </Panel>
  </View>

  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));