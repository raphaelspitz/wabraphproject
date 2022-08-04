import React from 'react';
import { render, screen, fireEvent, getByText, waitFor, findByTestId } from '@testing-library/react';
import Filter from './Filter';
import Books from '../../mocks/books.json'

test('testing input chnage', async () => {
  let filter = render(<Filter Books={Books} />);
  const input = filter.getByLabelText('search') as HTMLInputElement;

  fireEvent.change(input, {target: {value: 'doe'}})

 // await waitFor(() => input)
 
  const nameWrapper =  await screen.findByTestId('search') as HTMLInputElement;
  
  console.log(nameWrapper.value);
  
 // expect(input.value).toBe('doe')
});
