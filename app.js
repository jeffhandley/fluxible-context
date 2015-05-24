import Fluxible from 'fluxible';
import { RouteStore } from 'fluxible-router';
import Application from './components/Application';
import routes from './configs/routes';
import ApplicationStore from './stores/ApplicationStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

app.plug({
    name: 'fluxible-context',
    plugContext: function (options) {
        return {
            plugComponentContext(componentContext) {
                componentContext.demonstrate = function() {
                    console.log('componentContext.demonstrate');
                };
            },

            plugActionContext(actionContext) {
                actionContext.demonstrate = function() {
                    console.log('actionContext.demonstrate');
                };
            },

            plugStoreContext(storeContext) {
                storeContext.demonstrate = function() {
                    console.log('storeContext.demonstrate');
                };
            }
        };
    }
});

// register routes
var MyRouteStore = RouteStore.withStaticRoutes(routes);
app.registerStore(MyRouteStore);

// register other stores
app.registerStore(ApplicationStore);

module.exports = app;
