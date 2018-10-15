import * as React from 'react';

type GreeterComponentProps = {
    name: string
};

export class GreeterComponent extends React.Component<GreeterComponentProps> {
    render = () => {
        const name = this.props.name;
        return <div>Hello {name} from React!</div>;
    };
}
