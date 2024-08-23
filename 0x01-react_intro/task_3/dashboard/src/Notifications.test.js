import { shallow } from "enzyme";
import Notifications from "./Notifications";

const wrapper = shallow(<Notifications />);

describe("Notifications component", () => {
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });
    it("renders the list of notifications", () => {
        expect(wrapper.find("li").children().length).toHaveLength(3);
    });
    it("renders <p> with mesaage", () => {
        expect(wrapper.find("p").text()).toEqual("Here is the list of notifications");
    });
});