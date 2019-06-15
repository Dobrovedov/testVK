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
          <Checkbox name="check1" checked={this.state.check1}>Студент</Checkbox>
          <Checkbox name="check2" checked={this.state.check2}>Безработный</Checkbox>
          <Checkbox name="check1" checked={this.state.check3}>Живу с мамой</Checkbox>
          Student: {this.state.check1} <br />
          Homeless: {this.state.check2} <br />
          Mommy: {this.state.check3} <br />
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


