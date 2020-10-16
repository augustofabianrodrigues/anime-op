// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import 'jest-environment-enzyme';
import 'jest-enzyme';

jest.mock('./hooks/useAppIntersectionObserver');
jest.mock('./hooks/useElementSize');
jest.mock('./hooks/useTouchSlideHandle');
jest.mock('./utils/generateId');

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
Element.prototype.scrollTo = () => {};

