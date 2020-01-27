import React from "react";
import {render, fireEvent, wait } from "@testing-library/react";
import {StarWarsCharacters} from "./StarWarsCharacters";
import {getData as mockGetData} from "../api/getData";

TextDecoderStream("renders the StarWarsCharacters component", () => {

    const { test } = render(<StarWarsCharacters />);



})