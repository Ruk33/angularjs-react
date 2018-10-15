import { IDirective, IDirectiveLinkFn } from 'angular';
import { createElement, ComponentType } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux'
import { ReduxStoreService } from '../../redux-store-service';

export class ReactComponentDirective implements IDirective {
    restrict = 'A';
    scope = {
        props: '<'
    };

    constructor(
        private components: { [componentName: string]: ComponentType },
        private reduxStore: ReduxStoreService
    ) {

    }

    public link: IDirectiveLinkFn = (scope, element, attr) => {
        const componentName: string = attr.reactComponent;
        const componentType = this.components[componentName];

        if (!componentType) {
            return;
        }

        scope.$watch('props', (props) => {
            const component = createElement(componentType, props);
            const provider = createElement(Provider, { store: this.reduxStore.getStore() }, component);
            const domElement = element[0];
            render(provider, domElement);
        }, true);

        element.on('$destroy', () => {
            const domElement = element[0];
            unmountComponentAtNode(domElement);
        });
    }
}
