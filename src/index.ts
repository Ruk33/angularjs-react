import { module } from 'angular';
import { ReactComponentDirective } from './directive/react-component-directive/react-component.directive';
import { components } from './components';
import { ReduxStoreService } from './redux-store-service';

module('app', [])
    .service('reduxStoreService', ReduxStoreService)
    .constant('components', components)
    .directive(
        'reactComponent', 
        ['components', 'reduxStoreService', (components, reduxStoreService) => new ReactComponentDirective(components, reduxStoreService)]
    );