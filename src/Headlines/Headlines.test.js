import React from "react";
import { shallow } from "enzyme";
import Headlines from "./Headline";

describe("Test for class component", () => {
  it("Have Props", () => {
    const component = shallow(<Headlines />);
    const wrapper = component.find(`[data-test='AppHeader']`);
    expect(wrapper.length).toBe(1);
  });
  it("Have Props", () => {
    const component = shallow(<Headlines />);
    const wrapper = component.find(`[data-test='AppClass']`);
    expect(wrapper.length).toBe(1);
  });
  it("Have Props", () => {
    const component = shallow(<Headlines />);
    const wrapper = component.find(`[data-test='AppDesc']`);
    expect(wrapper.length).toBe(1);
  });
});
