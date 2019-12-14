import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`When user changes the answer, it sets into a userAnswer in correct format`, () => {
  const wrapper = shallow(<MockComponentWrapped
    answers={mock.question.answers}
    answersLength={4}
    onAnswer={jest.fn()}
  />);

  expect(wrapper.props().userAnswer).toEqual([false, false, false, false]);

  wrapper.props().onAnswerChange({currentTarget: {
    dataset: {
      index: 0
    }
  }});
  expect(wrapper.props().userAnswer).toEqual([true, false, false, false]);

  wrapper.props().onAnswerChange({currentTarget: {
    dataset: {
      index: 0
    }
  }});
  expect(wrapper.props().userAnswer).toEqual([false, false, false, false]);

  wrapper.props().onAnswerChange({currentTarget: {
    dataset: {
      index: 1
    }
  }});
  expect(wrapper.props().userAnswer).toEqual([false, true, false, false]);
});
