import { module } from 'angular';
import { ReactComponentDirective } from './react-component/react-component.directive';
import { components } from './components';

module('app', [])
    .constant('components', components)
    .directive(
        'reactComponent', 
        ['components', (components) => new ReactComponentDirective(components)]
    );