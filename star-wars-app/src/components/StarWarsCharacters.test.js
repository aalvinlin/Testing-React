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

const fakeData = {
    prev: null,
    next: "text",
    results: [
        {name: "character1", url: "url1"},
        {name: "Test Name Two", url: "url2"},
        {name: "Test Name Three", url: "url3"}
    ]
}

// API call tests with mockGetData
test ("API call is made", async () => {
    
    jest.mock("../api");

    console.log(mockGetData);

    mockGetData.mockResolvedValueOnce(fakeData);
    const {queryByText} = render(<StarWarsCharacters />);

    await wait(() => expect(queryByText(/character1/i)));
    queryByText("character1");
    
    expect(mockGetData).toHaveBeenCalled(1);
    expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");

})

