import React from 'react';
import {render} from "@testing-library/react";
import App from './App';
import Nav from "./components/Nav";


test("renders without crashing", () => {
  render(<App/>)
})

test("navigation title is displaying correctly", () => {
  const {getByText} = render(<Nav/>)
  getByText(/women's world cup players ranked by search interest/i);
})

test("button displaying", () => {
  const {getByText} = render(<Nav/>)
  getByText(/dark mode/i)
})

