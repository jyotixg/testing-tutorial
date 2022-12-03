// import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import AthleteProfile from "./AthleteProfile";
// import ChildrenTable from "./ChildrenTable";
// import GuardianProfile from "./GuardianProfile";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Button, TableCell } from "@mui/material";


// // describe("Render athlete profile", () => {
// //     test("Athlete component is rendering", () => {
// //         render(<AthleteProfile />);
// //         const name = screen.getByTestId('athlete_component');
// //         expect(name).toBeInTheDocument();
// //     })

// //     test("Edit button is clickable", () => {
// //         render(<AthleteProfile />);
// //         const editIcon = screen.getByTestId('edit_icon');
// //         userEvent.click(editIcon);
// //     })

// //     test("Edit modal opens on click of edit button", () => {
// //         render(<AthleteProfile />);
// //         const editIcon = screen.getByTestId('edit_icon');
// //         userEvent.click(editIcon);
// //         const modal = screen.getByTestId('modal_name');
// //         expect(modal).toBeInTheDocument();
// //     })

// //     test("Name input is editable", () => {
// //         render(<AthleteProfile />)
// //         const editIcon = screen.getByTestId('edit_icon');
// //         userEvent.click(editIcon);
// //         const testValue = "test";
// //         const nameInputEl = screen.getByTestId('name_field');
// //         fireEvent.change(nameInputEl, { target: { defaultValue: testValue } });
// //     })

// //     test("Save Changes button is clickable", () => {
// //         render(<AthleteProfile />)
// //         const editIcon = screen.getByTestId('edit_icon');
// //         userEvent.click(editIcon);
// //         const saveBtn = screen.getByTestId('save_btn');
// //         userEvent.click(saveBtn);
// //         expect(editIcon).toBeInTheDocument();
// //     })

// //     test("Name input should change and is saved after button click", () => {
// //         render(<AthleteProfile />)
// //         const editIcon = screen.getByTestId('edit_icon');
// //         userEvent.click(editIcon);
// //         const testValue = "test";
// //         const nameInputEl = screen.getByTestId('name_field')
// //         fireEvent.change(nameInputEl, { target: { defaultValue: testValue } });
// //         const saveBtn = screen.getByTestId('save_btn');
// //         userEvent.click(saveBtn);
// //         expect(editIcon).toBeInTheDocument();
// //     })

// //     test("Close button is clickable", () => {
// //         render(<AthleteProfile />);
// //         const editIcon = screen.getByTestId('edit_icon');
// //         userEvent.click(editIcon);
// //         const closeIcon = screen.getByTestId('close_icon');
// //         userEvent.click(closeIcon);
// //         const profileText = screen.getByText(/profile/i);
// //         expect(profileText).toBeInTheDocument();
// //     })
// // })

// describe("Render guardian profile", () => {
//     // test("guardian profile renders", () => {
//     //     render(<GuardianProfile />);
//     //     const guardianText = screen.getByText('Guardian');
//     //     expect(guardianText).toBeInTheDocument();
//     // })

//     // test("Edit button is clickable", () => {
//     //     render(<GuardianProfile />)
//     //     const editIcon = screen.getByTestId('edit_icon');
//     //     userEvent.click(editIcon);
//     // })

//     // test("Edit modal opens on click of edit button", () => {
//     //     render(<GuardianProfile />);
//     //     const editIcon = screen.getByTestId('edit_icon');
//     //     userEvent.click(editIcon);
//     //     const modal = screen.getByText('Name');
//     //     expect(modal).toBeVisible();
//     // })

//     // test("Name input is editable", () => {
//     //     render(<GuardianProfile />);
//     //     const editIcon = screen.getByTestId('edit_icon');
//     //     userEvent.click(editIcon);
//     //     const nameInput = screen.getByTestId('name_field');
//     //     expect(nameInput).toBeInTheDocument();
//     //     const testValue = "test";
//     //     fireEvent.change(nameInput, { target: { defaultValue: testValue } });
//     // })

//     // test("Save button is clickable", () => {
//     //     render(<GuardianProfile />);
//     //     const editIcon = screen.getByTestId('edit_icon');
//     //     userEvent.click(editIcon);
//     //     const saveBtn = screen.getByTestId('save_btn');
//     //     expect(saveBtn).toBeInTheDocument();
//     // })

//     // test("Name input should change and is saved after button click", () => {
//     //     render(<GuardianProfile />);
//     //     const editIcon = screen.getByTestId('edit_icon');
//     //     userEvent.click(editIcon);
//     //     const nameValue = screen.getByTestId('name_field');
//     //     const testValue = "test";
//     //     fireEvent.change(nameValue, { target: { defaultValue: testValue } });
//     //     const saveBtn = screen.getByTestId('save_btn');
//     //     expect(saveBtn).toBeInTheDocument();
//     // })

//     // test("children component renders in guardian profile", () => {
//     //     render(<GuardianProfile />);
//     //     const childComp = screen.getByText(/children/i);
//     //     expect(childComp).toBeInTheDocument();
//     // })

//     // test("Guardian profile renders chidlren table", () => {
//     //     render(<GuardianProfile />);
//     //     waitFor(() => {
//     //         const modalValue = screen.getByText(/save changes/i);
//     //         expect(modalValue).toBeInTheDocument();
//     //     })
//     // })

//     // test("child component contains table", () => {
//     //     render(<ChildrenTable />);
//     //     const td = screen.getByText(/actions/i);
//     //     expect(td).toBeInTheDocument();
//     // })

//     // test("Edit icon is clickable", () => {
//     //     render(<ChildrenTable />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     // })

//     // test("Delete icon is clickable", () => {
//     //     render(<GuardianProfile />);
//     //     const deleteIcon = screen.getByTestId('delete_icon1');
//     //     userEvent.click(deleteIcon);
//     // })

//     // test("Edit modal opens onclick of edit button", () => {
//     //     render(<GuardianProfile />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     //     const editModal = screen.getByText(/save changes/i);
//     //     expect(editModal).toBeInTheDocument();
//     // })

//     // test("Name input field is editable", () => {
//     //     render(<ChildrenTable />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     //     const nameField = screen.getByTestId('name_field');
//     //     const testValue = "test";
//     //     fireEvent.change(nameField, { target: { defaultValue: testValue } });
//     //     const saveBtn = screen.getByTestId('save_btn');
//     //     userEvent.click(saveBtn);
//     // })

//     // test("Gender input field is editable", () => {
//     //     render(<ChildrenTable />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     //     const genderField = screen.getByTestId('gender_field');
//     //     const testValue = "test";
//     //     fireEvent.change(genderField, { target: { defaultValue: testValue } });
//     //     const saveBtn = screen.getByTestId('save_btn');
//     //     userEvent.click(saveBtn);
//     // })

//     // test("Birthdate input field is editable", () => {
//     //     render(<ChildrenTable />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     //     const birthdateField = screen.getByTestId('birthdate_field');
//     //     const testValue = "test";
//     //     fireEvent.change(birthdateField, { target: { defaultValue: testValue } });
//     //     const saveBtn = screen.getByTestId('save_btn');
//     //     userEvent.click(saveBtn);
//     // })

//     // test("Save Changes button is clickable", () => {
//     //     render(<ChildrenTable />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     //     const saveBtn = screen.getByTestId('save_btn');
//     //     userEvent.click(saveBtn);
//     // })

//     // test("Close icon is closing the modal", () => {
//     //     render(<ChildrenTable />);
//     //     const editIcon = screen.getByTestId('edit_icon1');
//     //     userEvent.click(editIcon);
//     //     const closeIcon = screen.getByTestId('close_icon');
//     //     const editModal = screen.getByText(/save changes/i);
//     //     userEvent.click(closeIcon);
//     //     expect(editModal).not.toBeInTheDocument();
//     // })

//     // test("Delete button is clickable", () => {
//     //     render(<ChildrenTable />)
//     //     const deleteBtn = screen.getByTestId('delete_icon1');
//     //     userEvent.click(deleteBtn);
//     // })

//     // test("Add Child button is opening add child modal", () => {
//     //     render(<ChildrenTable />);
//     //     const addChildBtn = screen.getByTestId('add_child');
//     //     userEvent.click(addChildBtn);
//     //     const addModal = screen.getByTestId('close_icon2');
//     //     expect(addModal).toBeInTheDocument();
//     // })

//     // test("Inputs in add modal able to add", () => {
//     //     render(<ChildrenTable />);
//     //     const addChildBtn = screen.getByTestId('add_child');
//     //     userEvent.click(addChildBtn);
//     //     const addBtn = screen.getByTestId('add_btn');
//     //     const testValue = 'test';
//     //     const nameField = screen.getByTestId('name_field');
//     //     const emailField = screen.getByTestId('email_field');
//     //     const genderField = screen.getByTestId('gender_field');
//     //     const birthdateField = screen.getByTestId('birthdate_field');
//     //     fireEvent.change(nameField, { target: { defaultValue: testValue } });
//     //     fireEvent.change(emailField, { target: { defaultValue: testValue } });
//     //     fireEvent.change(genderField, { target: { defaultValue: testValue } });
//     //     fireEvent.change(birthdateField, { target: { defaultValue: testValue } });
//     //     userEvent.click(addBtn);
//     // })

//     // test("Close button is closing the modal", () => {
//     //     render(<ChildrenTable />);
//     //     const addChildBtn = screen.getByTestId('add_child');
//     //     userEvent.click(addChildBtn);
//     //     const addModal = screen.getByTestId('add_btn');
//     //     const closeBtn = screen.getByTestId('close_icon2');
//     //     userEvent.click(closeBtn);
//     //     expect(addModal).not.toBeInTheDocument();
//     // })

//     // test("render new page", () => {
//     //     render(<GuardianProfile />)
//     //     const modalValue = screen.getByRole('button');
//     //     expect(modalValue).toBeInTheDocument();
//     //     userEvent.click(modalValue);
//     // })

//     // test("render athlete profile", () => {
//     //     render(<AthleteProfile />);
//     //     const val = screen.getByText('info', { exact: false })
//     //     expect(val).toBeInTheDocument();
//     // })

//     // test("children table renders in guardian profile component", () => {
//     //     render(<GuardianProfile />)
//     //     const addChildBtn = screen.getByTestId('add_child');
//     //     userEvent.click(addChildBtn);
//     //     const saveBtn = screen.getByRole('button');
//     //     // expect(saveBtn).toBeInTheDocument();
//     //     userEvent.click(saveBtn);
//     //     expect(saveBtn).not.toBeInTheDocument();
//     // })

//     // test("", () => {
//     //     render(<AthleteProfile />);
//     //     waitFor(() => expect(getByTestId("save_btn").toBeInTheDocument()))
//     // })

//     // test("", () => {
//     //     render(<AthleteProfile />);
//     //     // expect(() => expect(getByTestId('save_btn').toBeInTheDocument()))
//     //     const nameValue = screen.getByText(/athlete/i);
//     //     expect(nameValue).toBeInTheDocument();

//     //     waitFor(() => {
//     //         const closeIcon = screen.getByTestId('close_icon');
//     //         userEvent.click(closeIcon);
//     //     })
//     // })

//     // test("Guardian profile renders chidlren table", () => {
//     //     render(<GuardianProfile />);
//     //     waitFor(() => {
//     //         const modalValue = screen.getByText(/save changes/i);
//     //         expect(modalValue).toBeInTheDocument();
//     //     })
//     // })

//     // test("delete button onclick is calling a function", () => {
//     //     render(<ChildrenTable />);
//     //     const mockOnClick = jest.fn()
//     //     const { getByTestId } = render(<DeleteIcon onClick={mockOnClick()} />)
//     //     const clickIndicator = getByTestId('delete_icon0')
//     //     fireEvent.click(clickIndicator);
//     //     expect(mockOnClick).toHaveBeenCalledTimes(1)
//     // })

//     // test("edit button onclick is calling a function", () => {
//     //     render(<ChildrenTable />);
//     //     const mockOnClick = jest.fn();
//     //     const { getByTestId } = render(<EditIcon onClick={mockOnClick()} />);
//     //     const clickIndicator = getByTestId('edit_icon1');
//     //     fireEvent.click(clickIndicator);
//     //     expect(mockOnClick).toHaveBeenCalledTimes(1);
//     // })

//     // test("save button on click is calling a function", () => {
//     //     render(<AthleteProfile />);
//     //     const mockOnClick = jest.fn();
//     //     const editBtn = screen.getByTestId('edit_icon');
//     //     userEvent.click(editBtn);
//     //     const { getByTestId } = render(<Button onClick={mockOnClick()} />);
//     //     const clickIndicator = getByTestId('save_btn');
//     //     userEvent.click(clickIndicator);
//     //     expect(mockOnClick).toHaveBeenCalledTimes(1);
//     // })

//     // test("add child button onclick is calling a function", () => {
//     //     render(<GuardianProfile />);
//     //     const mockOnClick = jest.fn();
//     //     const addChildBtn = screen.getByTestId('add_child');
//     //     userEvent.click(addChildBtn);
//     //     const {getByTestId} = render(<Button onClick={mockOnClick()} />);
//     //     const addBtn = getByTestId('add_btn');
//     //     userEvent.click(addBtn);
//     //     expect(mockOnClick).toHaveBeenCalledTimes(1);
//     // })

//     // test("sample test", () => {
//     //     render(<ChildrenTable />);
//     //     const tableCell = render(<TableCell>Name</TableCell>);
//     //     expect(tableCell.firstElementChild).getattribute(align="center");
//     //     const tableCell = screen.getByTestId('name_tablecell');
//     //     expect(tableCell).toHaveValue('Name');
//     // })

//     test("", () => {
//         render(<ChildrenTable />);
//         const children = screen.getByText(/children/i);
        
//     })

// })


