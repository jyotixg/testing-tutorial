import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestComponent from './TestingComponent';

test("sample test", () => {
    expect(true).toBe(true);
})

test("sum value should be 6", () => {
    render(<TestComponent />);
    const sumElement = screen.getByTestId('sum_element');
    expect(sumElement.textContent).toBe("6");
})

test("check if test component is rendering", () => {
    render(<TestComponent />);
    const text = screen.getByText(/Testing Component/i);
    expect(text).toBeInTheDocument();
})

test("test if link element has href attribute or not", () => {
    render(<TestComponent />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'www.youtube.com');
})

test("check if h3 tag is present in the document", () => {
    render(<TestComponent />);
    const h3 = screen.getByTestId('h3tag');
    expect(h3).toBeInTheDocument();
    // expect(h3).not.toBeInTheDocument();
})

test("check if Button is clickable", () => {
    render(<TestComponent />);
    // const btnElement = screen.getByRole('button');  // if there is only one button in whole document
    // userEvent.click(btnElement);

    const btnElement = screen.getByRole('button', { name: /openbox/i }); // if there is more then one button you can get it by the name
    userEvent.click(btnElement);
})

// test("check if box div is present or not", () => {
//     render(<TestComponent />);
//     const boxElement = screen.getByText('box');
//     expect(boxElement).toBeInTheDocument();
// })

test("check if box is visible after clicking on the button", () => {
    render(<TestComponent />);
    const btnElement = screen.getByRole('button', { name: "Openbox" });
    userEvent.click(btnElement);
    const boxElement = screen.getByText('box');
    expect(boxElement).toBeInTheDocument();
})

test("check if box disappears or not after clicking on a button second time", () => {
    render(<TestComponent />);
    const btnElement = screen.getByRole('button', { name: "Openbox" });
    userEvent.click(btnElement);
    const boxElement = screen.getByText('box');
    expect(boxElement).toBeInTheDocument();
    userEvent.click(btnElement);
    expect(boxElement).not.toBeInTheDocument();
})

test("check the length of the elements with same test id", () => {
    render(<TestComponent />);
    const btnElement = screen.getByRole('button', { name: "Openbox" });
    userEvent.click(btnElement);
    const boxElement = screen.getAllByTestId('headings');
    expect(boxElement).toHaveLength(4);
})

test("check if the button is disabled", () => {
    render(<TestComponent />)
    const disabledButton = screen.getByTestId('disabled_btn');
    expect(disabledButton).toBeDisabled();
})

test("email input field should change", () => {
    render(<TestComponent />);
    const testValue = "test"
    const emailInput = screen.getByTestId('email_input');
    // expect(emailInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: testValue } })
    expect(emailInput.value).toBe(testValue);
})

test("get email input element by its placeholder text", () => {
    render(<TestComponent />);
    const emailInput = screen.getByPlaceholderText('Your email');
    expect(emailInput).toBeInTheDocument();
})

test("check if email input value is empty or not", () => {
    render(<TestComponent />)
    const emailInput = screen.getByTestId('email_input');
    // expect(emailInput.value).toBe("");
    expect(emailInput.value).toHaveLength(0);
})

test("check if email input value on change is empty or not", () => {
    render(<TestComponent />)
    const testValue = "test";
    const emailInput = screen.getByTestId('email_input');
    expect(emailInput.value).toHaveLength(0);
    fireEvent.change(emailInput, { target: { value: testValue } })
    expect(emailInput.value).toHaveLength(4);
})

test("check if the submit button is disabled until the name and password is empty", () => {
    render(<TestComponent />)
    const testValue = "test";
    const emailInput = screen.getByTestId('email_input');
    const passwordInput = screen.getByTestId('password_input');
    const submitBtn = screen.getByTestId('submit_btn');
    expect(submitBtn).toBeDisabled();
    fireEvent.change(emailInput, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    expect(submitBtn).not.toBeDisabled();
})

test("Submit button onclick has a loading text content", () => {
    render(<TestComponent />);
    const testValue = "test";
    const emailInput = screen.getByTestId('email_input');
    const passwordInput = screen.getByTestId('password_input');
    fireEvent.change(emailInput, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    const submitBtn = screen.getByTestId('submit_btn');
    userEvent.click(submitBtn);
    expect(submitBtn).toHaveTextContent('Loading');
   
    waitFor(()=>{
        expect(submitBtn).toHaveTextContent('Submit');
    })
})

test("Data component is visible on click of submit button", () => {
    render(<TestComponent />);
    const testValue = "test";
    const emailInput = screen.getByTestId('email_input');
    const passwordInput = screen.getByTestId('password_input');
    fireEvent.change(emailInput, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    const submitBtn = screen.getByTestId('submit_btn');
    userEvent.click(submitBtn);
    expect(submitBtn).toHaveTextContent('Loading');
   
    waitFor(()=>{
        const inputDataComponent = screen.getByText(/input/i);
        expect(inputDataComponent).toBeInTheDocument();
        expect(submitBtn).toHaveTextContent('Submit');
    })
})
