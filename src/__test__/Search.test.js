import { fireEvent, render, screen } from "@testing-library/react";
import mockRestaurantListData from "../mocks/mockRestaurantListData.json";
import Content from "../app/components/Content";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

describe("check search fuctionality", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(mockRestaurantListData);
      },
    });
  });

  test("should search restaurants", async () => {
    await act(async() =>
      render(
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      )
    );
    const searchText = screen.getByTestId('searchText');
    const searchBtn = screen.getByTestId('searchBtn');

    fireEvent.change(searchText, {target : { value : "pizza"}});
    fireEvent.click(searchBtn);
    
    const resCard = screen.getAllByTestId('resCard');
    expect(resCard.length).toBe(3);
  });
});
