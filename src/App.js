import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, Cell, Checkbox, FormLayout, Link, Radio } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
 
function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>Опрос Burger King</PanelHeader>
        <Group title="вопросы">
          <List>
            <Cell>Просим вас ответить на все вопросы</Cell>
            <Cell>Это займет всего пару минут</Cell>
          </List>
        </Group>
	      <FormLayout>
	        <Checkbox>Студент</Checkbox>
	        <Checkbox>Безработный</Checkbox>
	        <Checkbox>Живу с мамой</Checkbox>
	      </FormLayout>
		  <FormLayout>
        	<div>
		        <Radio name="radio" value="1" description="Если ты с ИТМО то ставишь это" defaultChecked>Я согласен , что я <Link>пидор</Link></Radio>
		        <Radio name="radio" value="2">Я не согласен , что я <Link>пидор</Link></Radio>
        	</div>
      	  </FormLayout>
      </Panel>
  </View>

  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));