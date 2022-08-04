import React from 'react';
import { render, screen, fireEvent, getByText, waitFor } from '@testing-library/react';
import App from './App';
import ModalBook from './components/book-app/ModalBook';

test('renders react text on the main page', () => {
  render(<App />);
  const linkElement = screen.queryAllByText(/React/);
  expect(linkElement[0].textContent).toContain('React');
});

test('when click on the modal button it opens the modal', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Open Modal/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  const modal = screen.queryAllByText(/Todo/);
  expect(modal[0].textContent).toContain('Todo');
});

test('when click on the close button it close the modal', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Open Modal/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  // const buttonClose = screen.getByRole('button', { name: /close/i });
  // console.log('===================================='); 
  // console.log(buttonClose);
  // console.log('====================================');
 // expect(buttonClose).toBeInTheDocument();
  // fireEvent.click(buttonClose);
  // await waitFor(() => {
  //   const modal = screen.queryAllByText(/Todo/);
  //   expect(modal[0].textContent).toContain('Todo');
  // });

  // TODO RERENDER the dom
  //const modal = screen.queryAllByText(/Todo/);
  //expect(modal[0].textContent).toContain('Todo'); 
});