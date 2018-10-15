import * as React from 'react';

type InputComponentProps = {
    value: string,
    onChange: (value: string) => void
};

export class InputComponent extends React.Component<InputComponentProps> {
    private handleChange = (event) => this.props.onChange(event.target.value);

    render = () => {
        return <input value={this.props.value} onChange={this.handleChange}/>;
    }
}
