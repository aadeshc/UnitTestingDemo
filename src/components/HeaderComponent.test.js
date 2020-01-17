import * as React from "react";
import { shallow } from "enzyme";
import Header, { mymethod } from "./HeaderComponent";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("It should render without errors", () => {
    const wrapper = component.find(`[data-test='HeaderComponent']`);
    expect(wrapper.length).toBe(1);
  });

  it("Should Render Logo", () => {
    const wrapper = component.find(`[data-test='LogoImage']`);
    expect(wrapper.length).toBe(1);
  });

  it("Function test", () => {
    expect(mymethod()).toBe(4);
  });
});
