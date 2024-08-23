import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

describe('App component', () => {
    it('renders the App without crashing', () => {
        shallow(<App />);
    });
    it('renders App-header',() => {
        expect(wrapper.find('AppHeader')).exist().toEqual(true);
    });
    it('renders App-body',() => {
        expect(wrapper.find('AppBody')).exist().toEqual(true);
    });
    it('renders App-footer',() => {
        expect(wrapper.find('AppFooter')).exist().toEqual(true);
    });
})