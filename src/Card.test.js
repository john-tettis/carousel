import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";



it('renders properly',()=>{
  render(<Card/>)
})

it('renders the right content',()=>{
  const {asFragment} = render(<Card/>)
  expect(asFragment()).toMatchSnapshot()
})