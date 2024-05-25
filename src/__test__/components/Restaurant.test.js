import { render } from "@testing-library/react";
import Restaurant, { withPromotedLabel } from "../../app/components/Restaurant";
import resCardMock from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom"

describe("Restaurant card component test cases", () => {
  test("Should match Restaurant snapshot", () => {
    const { container } = render(<Restaurant resData={resCardMock} />);
    expect(container).toMatchSnapshot();
  });

  test("Should match Restaurant with promoted label snapshot", () => {
    const RestaurantCardsPromoted = withPromotedLabel(Restaurant);
    const { container } = render(
      <RestaurantCardsPromoted resData={resCardMock} />
    );
    expect(container).toMatchSnapshot();
  });
});
