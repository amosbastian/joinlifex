import { storiesOf } from "@storybook/react";
import Component from "./";
import mocks from "./mocks.json";
import model from "./model";

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} />);
});
