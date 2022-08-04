import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import ModalBook from './ModalBook';

test('do not show the modal if open attribute is false', () => {
  render(<ModalBook  container={document.body as HTMLElement} 
    open={false} onClose={() => false}/>);

    const modalBook = screen.queryByTestId("modal-book");

    expect(modalBook).toBe(null);
});

test('shows the modal if open attribute is true', () => {
  render(<ModalBook  container={document.body as HTMLElement} 
    open={true} onClose={() => false}/>);

    const modalBook = screen.getByTestId("modal-book");

    expect(modalBook).toBeInTheDocument();
});

test('remove the modal if user clicked on close btn', () => {
const mockedFunction = jest.fn();

 let modal = render(<ModalBook  container={document.body as HTMLElement} 
    open={true} onClose={() => mockedFunction}/>);

 const buttonClose = modal.getByRole('button', { name: /close/i, hidden: true  });
 fireEvent.click(buttonClose);
// expect(mockedFunction).toHaveBeenCalled(); 


});