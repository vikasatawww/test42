import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders register page', () => {
  const { getByLabelText } = render(<App />);
  const nameInput = getByLabelText(/full name/i);
  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('navigates to login page after registration', async () => {
  const { getByLabelText, getByText } = render(<App />);
  const registerButton = getByText(/register/i);
  fireEvent.click(registerButton);
  await waitFor(() => getByText(/login/i));
});

test('navigates to dashboard after login', async () => {
  const { getByLabelText, getByText } = render(<App />);
  const loginButton = getByText(/login/i);
  fireEvent.click(loginButton);
  await waitFor(() => getByText(/dashboard/i));
});

test('renders dashboard page', () => {
  const { getByText } = render(<App />);
  const dashboardElement = getByText(/dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
