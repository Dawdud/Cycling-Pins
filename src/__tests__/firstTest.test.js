import SignIn from "../Views/auth/signIn"
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render, fireEvent, getByTestId } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../config/firebase', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    signInWithEmailAndPassword: jest.fn(),
  }
})

describe('<SignIn/>', () => {

  it('should match the snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>);
    const password = getByTestId(container, 'userPassword')
    const email = getByTestId(container, 'userEmail')
    expect(password).toBeTruthy();
    expect(email).toBeTruthy();

  });


});
