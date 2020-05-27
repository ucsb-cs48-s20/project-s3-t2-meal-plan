import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

addDecorator(withA11y);
addDecorator(withKnobs);
