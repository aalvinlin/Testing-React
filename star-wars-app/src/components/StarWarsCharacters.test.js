import React from "react";
import {render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import {getData as mockGetData} from "../api/getData";

// component mounting tests
test("renders the StarWarsCharacters component", () => {
    render(<StarWarsCharacters />);
})

test("renders the Previous button", () => {
    const {queryByText} = render(<StarWarsCharacters />);
    const previousButton = queryByText(/previous/i);
})

test("renders the Next button", () => {
    const {queryByText} = render(<StarWarsCharacters />);
    const nextButton = queryByText(/next/i);
})

// button click tests
test("Previous button can be clicked", () => {
    const {queryByText} = render(<StarWarsCharacters />);
    const previousButton = queryByText(/previous/i);
    fireEvent.click(previousButton);
})

test("Next button can be clicked", () => {
    const {queryByText} = render(<StarWarsCharacters />);
    const nextButton = queryByText(/next/i);
    fireEvent.click(nextButton);
})

// API call tests with mockGetData

