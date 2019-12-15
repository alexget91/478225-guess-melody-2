import * as React from "react";

interface Props {
  answersLength: number,
  onAnswer: (answer: Array<boolean>) => void,
  [propName: string]: any;
}

interface State {
  userAnswer: Array<boolean>,
}

const withUserAnswer = (Component) => {
  class WithUserAnswer extends React.PureComponent<Props, State> {
    get defaultState() {
      const {answersLength} = this.props;

      return {
        userAnswer: new Array(answersLength).fill(false),
      };
    }

    constructor(props) {
      super(props);

      this.state = this.defaultState;
      this._answerChangeHandler = this._answerChangeHandler.bind(this);
      this._answerSubmitHandler = this._answerSubmitHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        userAnswer={this.state.userAnswer}
        onAnswerChange={this._answerChangeHandler}
        onAnswerSubmit={this._answerSubmitHandler}
      />;
    }

    _answerChangeHandler(evt) {
      const userAnswer = [...this.state.userAnswer];
      const index = evt.currentTarget.dataset.index;

      userAnswer[index] = !userAnswer[index];
      this.setState({userAnswer});
    }

    _answerSubmitHandler() {
      this.props.onAnswer(this.state.userAnswer);
      this.setState(this.defaultState);
    }
  }

  return WithUserAnswer;
};

export default withUserAnswer;
