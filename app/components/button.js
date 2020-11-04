import { computed } from "@ember/object";
import Component from "@ember/component";
import classnames from "classnames";

export default Component.extend({
  tagName: '',
  className: computed("button.{size,inverted,danger}", function () {
    let { size = "md", inverted = false, danger = false } = this;

    return classnames([size, { inverted: !!inverted, danger: !!danger }]);
  }),
  click() {
    alert("Button was clicked");
  }
});
